import { Controller, Get, Param } from '@nestjs/common';
import { FindUserByIdUseCase } from '../../../../application/use-cases/find-user-by-id.use-case';
import { UserPresenter } from '../../presenters/user.presenter';

@Controller('user/find')
export class FindUserByIdController {
  constructor(private findUserByIdUseCase: FindUserByIdUseCase) {}
  @Get('/:id')
  async findById(@Param('id') id: string) {
    const user = await this.findUserByIdUseCase.execute(id);

    return UserPresenter.toHttp(user)
  }
}
