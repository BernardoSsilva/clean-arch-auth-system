import { ImageInMemoryRepository } from '../../../../../test/repositories/in-memory-image.repository';
import { ImageEntity } from '../../../../application/entities/image.entity';
import { DeleteImageUseCase } from '../delete-image-use-case';

describe('Delete image use case unit test', () => {
  const imageRepository = new ImageInMemoryRepository();
  const deleteImage = new DeleteImageUseCase(imageRepository);

  it('Should return a error if image not found', () => {
    expect(async () => await deleteImage.execute('FakeId')).rejects.toThrow();
  });

  it('Should delete a image', async () => {
    const image = new ImageEntity({
      imageName: 'testName',
      imageExtension: 'testExtension',
      imageStoredName: 'testStoredName',
      imageSize: 500,
    });

    await imageRepository.registerImage(image, "testId")
    expect(imageRepository.images[0]).toBeDefined()
    await imageRepository.deleteImage("testId")
    expect(imageRepository.images).toHaveLength(0)
  });
});
