import {
  Body,
  Controller,
  Param,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { RegisterImageUseCase } from '../../../../application/use-cases/images/register-image.use-case';
import { ImageEntity } from '../../../../application/entities/image.entity';

@Controller('/image/create')
export class CreateImageController {
  constructor(private registerImageUseCase: RegisterImageUseCase) {}
  @Post('/:userId')
  @UseInterceptors(FileInterceptor('file'))
  async createImage(
    @UploadedFile() file: Express.Multer.File,
    @Param('userId') userId: string,
  ) {
    const createImage = new ImageEntity({
      imageName: file.originalname,
      imageSize: file.size,
      imageExtension: file.mimetype,
      imageStoredName: file.originalname,
    });
    const image = await this.registerImageUseCase.execute(createImage, userId);
  }
}
