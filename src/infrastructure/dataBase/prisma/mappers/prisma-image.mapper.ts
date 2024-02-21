import { ImageEntity } from '../../../../application/entities/image.entity';
import { ProfileImage as PrismaImage } from '@prisma/client';
import fs from 'fs';
import { toB64Image } from '../../../../shared/utils/b64Transformer';

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

  static toDomainB64(image: PrismaImage){
    return toB64Image(image);
  }

   
}
