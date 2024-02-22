import { Controller, Delete, Param } from '@nestjs/common';
import { DeleteImageUseCase } from '../../../../application/use-cases/images/delete-image-use-case';

@Controller('/image/delete')
export class DeleteImageController {
  constructor(private deleteImageUseCase: DeleteImageUseCase) {}

  @Delete('/:imageId')
  async deleteImage(@Param('imageId') imageId: string) {
    await this.deleteImageUseCase.execute(imageId);
  }
}
