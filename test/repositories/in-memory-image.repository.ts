import { ImageEntity } from 'src/application/entities/image.entity';
import { ImageRepository } from 'src/application/repositories/image.repository';

export class ImageInMemoryRepository implements ImageRepository {
  public images: ImageEntity[] = [];
  async registerImage(image: ImageEntity, userId: string): Promise<void> {
    image.id = userId;
    await this.images.push(image);
  }
  async findById(imageId: string): Promise<ImageEntity> {
    return await this.images.find((image) => image.id === imageId);
  }
  async findAll(): Promise<ImageEntity[]> {
    return await this.images;
  }
  async findByUserId(userId: string): Promise<ImageEntity> {
    return await this.images.find((image) => image.id === userId);
  }
  async deleteImage(imageId: string): Promise<void> {
    const imageIndex = await this.images.findIndex(
      (image) => image.id === imageId,
    );
    await this.images.splice(imageIndex, 1);
  }
}
