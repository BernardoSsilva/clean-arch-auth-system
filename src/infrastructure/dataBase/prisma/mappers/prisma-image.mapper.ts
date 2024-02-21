import { ImageEntity } from 'src/application/entities/image.entity';
import { ProfileImage as PrismaImage } from '@prisma/client';

export class PrismaImageMapper {
  static toPrisma(image: ImageEntity) {
    return {
      imageName: image.props.imageName,
      imageExtension: image.props.imageExtension,
      imageSize: image.props.imageSize,
      imageStoredName: image.props.imageStoredName,
    };
  }

  static toDomain(image: PrismaImage): ImageEntity {
    return new ImageEntity(image);
  }
}
