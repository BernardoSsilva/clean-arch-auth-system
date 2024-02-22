import { Injectable } from '@nestjs/common';
import { ImageRepository } from '../../../application/repositories/image.repository';
import { ImageEntity } from '../../../application/entities/image.entity';

@Injectable()
export class FindAllImagesUseCase {
  constructor(private profileImageRepository: ImageRepository) {}

  async execute(): Promise<ImageEntity[]> {

    const images = await this.profileImageRepository.findAll();
    return images;
  }
}
