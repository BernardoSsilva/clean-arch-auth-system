import { Controller, Get, UseGuards } from '@nestjs/common';
import { FindAllImagesUseCase } from '../../../../application/use-cases/images/find-all-images.use-case';
import { AuthGuard } from 'src/infrastructure/guard/auth.guard';

@Controller('/image')
export class FindAllImagesController {
  constructor(private findAllImagesUseCase: FindAllImagesUseCase) {}
  @UseGuards(AuthGuard)
  @Get()
  async findAll() {
    const images = await this.findAllImagesUseCase.execute();
    return images;
  }
}
