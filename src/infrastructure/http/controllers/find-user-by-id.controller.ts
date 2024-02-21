import { Controller, Get, Param } from '@nestjs/common';
import { FindUserByIdUseCase } from '../../../application/use-cases/find-user-by-id.use-case';

@Controller('user/find')
export class FindUserByIdController {
  constructor(private findUserByIdUseCase: FindUserByIdUseCase) {}
  @Get('/:id')
  async findById(@Param('id') id: string) {
    return await this.findUserByIdUseCase.execute(id);
  }
}
