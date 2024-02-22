import { ImageEntity } from '../../src/application/entities/image.entity';
import { ImageRepository } from '../../src/application/repositories/image.repository';
import { NotFoundError } from '../../src/shared/errors/not-found.error';

export class ImageInMemoryRepository implements ImageRepository {
  public images: ImageEntity[] = [];
  async registerImage(image: ImageEntity, userId: string): Promise<void> {
    image.id = userId;
    await this.images.push(image);
  }
  async findById(imageId: string): Promise<ImageEntity> {
    const image = await this.images.find((image) => image.id === imageId);
    if (!image || image.id === null) {
      throw new NotFoundError('Image not found');
    }
    return image;
  }
  async findAll(): Promise<ImageEntity[]> {
    return await this.images;
  }
  async findByUserId(userId: string): Promise<ImageEntity> {
    const image = await this.images.find((image) => image.id === userId);
    if (!image || image.id === null) {
      throw new NotFoundError('Image not found');
    }
    return image;
  }
  async deleteImage(imageId: string): Promise<void> {
    const imageIndex = await this.images.findIndex(
      (image) => image.id === imageId,
    );
    await this.images.splice(imageIndex, 1);
  }
}
