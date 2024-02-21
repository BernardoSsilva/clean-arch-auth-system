import { ImageEntity } from './../../../../application/entities/image.entity';
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { PrismaImageMapper } from '../mappers/prisma-image.mapper';

@Injectable()
export class PrismaImageRepository {
  constructor(private prisma: PrismaService) {}

  async registerImage(image: ImageEntity, userId: string) {
    const raw = await PrismaImageMapper.toPrisma(image);
    const userHaveImage = await this.prisma.user.findUnique({
      where: { userId },
      select: {
        ProfileImage: true,
      },
    });

    if (userHaveImage) {
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
}