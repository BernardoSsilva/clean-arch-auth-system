import { Controller, Get, UseGuards } from '@nestjs/common';
import { FindAllUsersUseCase } from '../../../../application/use-cases/user/find-all-users.use-case';
import { AuthGuard } from '../../../../infrastructure/guard/auth.guard';
import { UserPresenter } from '../../presenters/user.presenter';

@Controller('/users/get/all')
export class FindAllUsersController {
  constructor(private findAllUsersUseCase: FindAllUsersUseCase) {}

  @UseGuards(AuthGuard)
  @Get()
  async findAll() {
    const users = await this.findAllUsersUseCase.execute();
    return users.map((user) => UserPresenter.toHttp(user));
  }
}
