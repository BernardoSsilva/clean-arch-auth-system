import { ImageInMemoryRepository } from '../../../../../test/repositories/in-memory-image.repository';
import { RegisterImageUseCase } from '../register-image.use-case';
import { ImageEntity } from '../../../../application/entities/image.entity';

describe('Create image use case unit test', () => {
  it('Should be able to create a new image', async () => {
    const imageRepository = new ImageInMemoryRepository();
    const createImageUseCase = new RegisterImageUseCase(imageRepository);

    const image = new ImageEntity({
      imageName: 'testName',
      imageExtension: 'testExtension',
      imageStoredName: 'testStoredName',
      imageSize: 500,
    });

    await createImageUseCase.execute(image, 'testUserId');

    expect(image).toBeDefined();
    expect(image.imageName).toEqual(
      (await imageRepository.findById('testUserId')).imageName,
    );
  });
});
