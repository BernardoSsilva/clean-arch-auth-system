import { ImageEntity, ImageProps } from './../../../image.entity';
describe('Image entity unit test', () => {
  it('Should be able to create a new image entity ', () => {
    const imageProps: ImageProps = {
      imageName: 'testName',
      imageExtension: 'testExtension',
      imageStoredName: 'testStoredName',
      imageSize: 500,
    };

    const imageEntity = new ImageEntity(imageProps);

    expect(imageEntity).toBeDefined();
    expect(imageEntity.id).toBeDefined();
  });
});
