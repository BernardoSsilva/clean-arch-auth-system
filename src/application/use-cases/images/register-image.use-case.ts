import { Injectable } from '@nestjs/common';
import { ImageEntity } from 'src/application/entities/image.entity';
import { ImageRepository } from 'src/application/repositories/image.repository';

@Injectable()
export class RegisterImageUseCase {
  constructor(private imageRepository: ImageRepository) {}
  async execute(image: ImageEntity, userId) {
    const createdImage = await this.imageRepository.registerImage(image, userId);
    return createdImage;
  }
}
