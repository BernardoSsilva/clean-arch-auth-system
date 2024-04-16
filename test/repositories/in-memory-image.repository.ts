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
    if (!image || image.id == null) {
      throw new NotFoundError('Image not found');
    }
    return image;
  }
  async findAll(): Promise<ImageEntity[]> {
    const allImages = await this.images;
    if (allImages.length == 0) {
      throw new NotFoundError('Images not found');
    }
    return allImages;
  }
  async findByUserId(userId: string): Promise<ImageEntity[]> {
    const images = await this.images.filter((image) => image.id === userId);
    if (!images || images.length <= 0) {
      throw new NotFoundError('Image not found');
    }
    return image;
  }
  async deleteImage(imageId: string): Promise<void> {
    const imageIndex = await this.images.findIndex(
      (image) => image.id === imageId,
    );
    if (imageIndex < 0) {
      throw new NotFoundError('Image not found');
    }
    await this.images.splice(imageIndex, 1);
  }
}
