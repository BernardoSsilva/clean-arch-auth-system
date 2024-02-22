import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import { ImageRepository } from '../../../../application/repositories/image.repository';
import { NotFoundError } from '../../../../shared/errors/not-found.error';
import { PrismaImageMapper } from '../mappers/prisma-image.mapper';
import { PrismaService } from '../prisma.service';
import { ImageEntity } from './../../../../application/entities/image.entity';

@Injectable()
export class PrismaImageRepository implements ImageRepository {
  constructor(private prisma: PrismaService) {}
  async findByUserId(userId: string): Promise<ImageEntity[]> {
    const images = await this.prisma.profileImage.findMany({
      where: { userId },
    });

    if (!images) {
      throw new NotFoundError('Image not found');
    }
    return images.map((image) =>
      PrismaImageMapper.toDomainB64(image),
    ) as unknown as ImageEntity[];
  }
  async deleteImage(imageId: string): Promise<void> {
    const imageExists = await this.prisma.profileImage.findUnique({
      where: { imageId },
    });

    if (!imageExists) {
      throw new NotFoundError('Image not found');
    }

    fs.unlinkSync(`/uploads/${imageExists.imageStoredName}`);
    await this.prisma.profileImage.delete({
      where: { imageId },
    });
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

    if (!image) {
      throw new NotFoundError('Image not found');
    }

    return PrismaImageMapper.toDomainB64(image) as unknown as ImageEntity;
  }

  async findAll() {
    const images = await this.prisma.profileImage.findMany();

    if (!images) {
      throw new NotFoundError('Images not found');
    }
    return images.map((image) =>
      PrismaImageMapper.toDomainB64(image),
    ) as unknown as ImageEntity[];
  }
}
