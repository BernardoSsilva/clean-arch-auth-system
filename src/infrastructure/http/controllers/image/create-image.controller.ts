import {
  Controller,
  Param,
  Post,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { ImageEntity } from '../../../../application/entities/image.entity';
import { RegisterImageUseCase } from '../../../../application/use-cases/images/register-image.use-case';
import { AuthGuard } from 'src/infrastructure/guard/auth.guard';

const storage = diskStorage({
  destination: './uploads',
  filename: (req, file, cb) => {
    const randomName = Array(32)
      .fill(null)
      .map(() => Math.round(Math.random() * 16).toString(16))
      .join('');
    cb(null, `${randomName}`);

    return randomName;
  },
});
@Controller('/image/create')
export class CreateImageController {
  constructor(private registerImageUseCase: RegisterImageUseCase) {}
  @UseGuards(AuthGuard)
  @Post('/:userId')
  @UseInterceptors(FileInterceptor('file', { storage }))
  async createImage(
    @UploadedFile() file: Express.Multer.File,
    @Param('userId') userId: string,
  ) {
    const createImage = new ImageEntity({
      imageName: file.originalname,
      imageSize: file.size,
      imageExtension: file.mimetype,
      imageStoredName: file.filename,
    });
    const image = await this.registerImageUseCase.execute(createImage, userId);
  }
}
