import { Controller, Get } from '@nestjs/common';
import { FindAllImagesUseCase } from '../../../../application/use-cases/images/find-all-images.use-case';

@Controller('/image')
export class FindAllImagesController {
  constructor(private findAllImagesUseCase: FindAllImagesUseCase) {}
  @Get()
  async findAll() {

    const images = await this.findAllImagesUseCase.execute();
    return images;
  }
}
