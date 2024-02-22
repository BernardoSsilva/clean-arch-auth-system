import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { FindImageByUserIdUseCase } from '../../../../application/use-cases/images/find-image-by-user-id.use-case';
import { AuthGuard } from 'src/infrastructure/guard/auth.guard';

@Controller('/image/user')
export class FindImageByUserIdController {
  constructor(private findImageByUserId: FindImageByUserIdUseCase) {}

  @UseGuards(AuthGuard)
  @Get('/:userId')
  async getImageByUserId(@Param('userId') userId: string) {
    return await this.findImageByUserId.execute(userId);
  }
}
