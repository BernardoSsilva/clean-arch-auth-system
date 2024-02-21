import { Controller, Get, Param } from '@nestjs/common';
import { FindImageByIdUseCase } from '../../../../application/use-cases/images/find-image-by-id.use-case';

@Controller('/image')
export class FindImageByIdController {
  constructor(private findImageByIdUseCase: FindImageByIdUseCase) {}
  @Get('/:id')
  async getImageById(@Param('id') id: string) {
    const image = await this.findImageByIdUseCase.execute(id);
    return image
  }
}
