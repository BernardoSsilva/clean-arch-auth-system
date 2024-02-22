import { ImageEntity } from '../../../../application/entities/image.entity';
import { ImageInMemoryRepository } from '../../../../../test/repositories/in-memory-image.repository';
import { FindImageByIdUseCase } from '../find-image-by-id.use-case';

describe('Find image by id use case unit test', () => {
  const imageRepository = new ImageInMemoryRepository();
  const findImage = new FindImageByIdUseCase(imageRepository);
  it('Should be able to find image by id', async () => {
    const image = new ImageEntity({
      imageName: 'testName',
      imageExtension: 'testExtension',
      imageStoredName: 'testStoredName',
      imageSize: 500,
    });

    await imageRepository.registerImage(image, 'testId');

    const result = await findImage.execute('testId');

    expect(result).toEqual(imageRepository.images[0]);
  });

  it("Should throw an error if image is not found", async () => {
    expect(async () => await findImage.execute("fakeId")).rejects.toThrow()
  })
});
