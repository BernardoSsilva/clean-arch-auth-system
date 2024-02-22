import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/infrastructure/guard/auth.guard';
import { FindImageByIdUseCase } from '../../../../application/use-cases/images/find-image-by-id.use-case';

@Controller('/image')
export class FindImageByIdController {
  constructor(private findImageByIdUseCase: FindImageByIdUseCase) {}
  @UseGuards(AuthGuard)
  @Get('/:id')
  async getImageById(@Param('id') id: string) {
    const image = await this.findImageByIdUseCase.execute(id);
    return image;
  }
}
