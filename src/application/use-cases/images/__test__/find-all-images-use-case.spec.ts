import { ImageEntity } from '../../../../application/entities/image.entity';
import { ImageInMemoryRepository } from '../../../../../test/repositories/in-memory-image.repository';
import { FindAllImagesUseCase } from '../find-all-images.use-case';

describe('Find all images use case unit tests', () => {
  const imagesRepository = new ImageInMemoryRepository();
  const findAllImages = new FindAllImagesUseCase(imagesRepository);
  it('Should find all images', async () => {
    const image = new ImageEntity({
      imageName: 'testName',
      imageExtension: 'testExtension',
      imageStoredName: 'testStoredName',
      imageSize: 500,
    });

    await imagesRepository.registerImage(image, 'testId');

    const result = await findAllImages.execute();
    expect(result).toHaveLength(1);
  });

  it('Should return an error if images not found', async () => {
    imagesRepository.images.splice(0, 1)
    expect(async () => await findAllImages.execute()).rejects.toThrow();
  });
});
