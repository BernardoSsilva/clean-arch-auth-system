import { Controller, Get, Param } from '@nestjs/common';
import { FindImageByUserIdUseCase } from '../../../../application/use-cases/images/find-image-by-user-id.use-case';

@Controller('/image/user')
export class FindImageByUserIdController {
  constructor(private findImageByUserId: FindImageByUserIdUseCase) {}
  @Get('/:userId')
  async getImageByUserId(@Param('userId') userId: string) {
    return await this.findImageByUserId.execute(userId);
  }
}
