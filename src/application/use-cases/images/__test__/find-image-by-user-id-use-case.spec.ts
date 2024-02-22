import { ImageEntity } from '../../../../application/entities/image.entity';
import { ImageInMemoryRepository } from '../../../../../test/repositories/in-memory-image.repository';
import { FindImageByUserIdUseCase } from '../find-image-by-user-id.use-case';

describe('Find image by user id use case unit test', () => {
  const imageRepository = new ImageInMemoryRepository();
  const findByUserId = new FindImageByUserIdUseCase(imageRepository);
  it('Should throw an error if image does not exist', () => {
    expect(async () => await findByUserId.execute('fakeId')).rejects.toThrow();
  });

  it('Should return image', async () => {
    const image = new ImageEntity({
      imageName: 'testName',
      imageExtension: 'testExtension',
      imageStoredName: 'testStoredName',
      imageSize: 500,
    });

    await imageRepository.registerImage(image, "testId")

    const result = await findByUserId.execute("testId")

    expect(result).toBeDefined()
  });
});
