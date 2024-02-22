import { Controller, Delete, Param, UseGuards } from '@nestjs/common';
import { DeleteImageUseCase } from '../../../../application/use-cases/images/delete-image-use-case';
import { AuthGuard } from 'src/infrastructure/guard/auth.guard';

@Controller('/image/delete')
export class DeleteImageController {
  constructor(private deleteImageUseCase: DeleteImageUseCase) {}

  @UseGuards(AuthGuard)
  @Delete('/:imageId')
  async deleteImage(@Param('imageId') imageId: string) {
    await this.deleteImageUseCase.execute(imageId);
  }
}
