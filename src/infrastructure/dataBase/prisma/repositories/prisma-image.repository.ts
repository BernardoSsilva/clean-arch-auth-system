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
    const images = await this.prisma.images.findMany({
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
    const imageExists = await this.prisma.images.findUnique({
      where: { imageId },
    });

    if (!imageExists) {
      throw new NotFoundError('Image not found');
    }

    fs.unlinkSync(`/uploads/${imageExists.imageStoredName}`);
    await this.prisma.images.delete({
      where: { imageId },
    });
  }

  async registerImage(image: ImageEntity, userId: string) {
    const raw = await PrismaImageMapper.toPrisma(image);
    const userHaveImages = await this.prisma.user.findMany({
      where: { userId },
      select: {
        Images: true
      },
    });

    if (userHaveImages !== null) {
      await this.prisma.images.deleteMany({
        where: {
          userId: '4f5e9310-80aa-4aaf-b82e-42780e2db95c',
        },
      });
    }

    const newImage = await this.prisma.images.create({
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
    const image = await this.prisma.images.findUnique({
      where: { imageId },
    });

    if (!image) {
      throw new NotFoundError('Image not found');
    }

    return PrismaImageMapper.toDomainB64(image) as unknown as ImageEntity;
  }

  async findAll() {
    const images = await this.prisma.images.findMany();

    if (!images) {
      throw new NotFoundError('Images not found');
    }
    return images.map((image) =>
      PrismaImageMapper.toDomainB64(image),
    ) as unknown as ImageEntity[];
  }
}
