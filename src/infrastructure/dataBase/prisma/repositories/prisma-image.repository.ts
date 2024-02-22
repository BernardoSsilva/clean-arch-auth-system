import { ImageEntity } from './../../../../application/entities/image.entity';
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { PrismaImageMapper } from '../mappers/prisma-image.mapper';
import { ImageRepository } from 'src/application/repositories/image.repository';

@Injectable()
export class PrismaImageRepository implements ImageRepository {
  constructor(private prisma: PrismaService) {}
  async findByUserId(userId: string): Promise<ImageEntity> {
    const images = await this.prisma.profileImage.findUnique({
      where: { userId },
    });
    return PrismaImageMapper.toDomainB64(images) as unknown as ImageEntity;
  }
  deleteImage(imageId: string): Promise<void> {
    throw new Error('Method not implemented.');
  }

  async registerImage(image: ImageEntity, userId: string) {

    const raw = await PrismaImageMapper.toPrisma(image);
    const userHaveImage = await this.prisma.user.findUnique({
      where: { userId },
      select: {
        ProfileImage: true,
      },
    });

    if (userHaveImage.ProfileImage !== null) {
      await this.prisma.profileImage.delete({
        where: {
          userId,
        },
      });
    }

    const newImage = await this.prisma.profileImage.create({
      data: {
        userId,
        imageName: raw.imageName,
        imageExtension: raw.imageExtension,
        imageSize: raw.imageSize,
        imageStoredName: raw.imageStoredName,
      },
    });

    return { newImage };
  }

  async findById(imageId: string): Promise<ImageEntity> {
    const image = await this.prisma.profileImage.findUnique({
      where: { imageId },
    });

    return PrismaImageMapper.toDomainB64(image) as unknown as ImageEntity;
  }

  async findAll() {
    console.log('ta aqui pelo menos');
    const images = await this.prisma.profileImage.findMany();
    return images.map((image) =>
      PrismaImageMapper.toDomainB64(image),
    ) as unknown as ImageEntity[];
  }
}
