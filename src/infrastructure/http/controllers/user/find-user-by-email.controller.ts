import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { FindUserByEmailUseCase } from '../../../../application/use-cases/find-user-by-email.use-case';
import { AuthGuard } from '../../../../infrastructure/guard/auth.guard';
import { UserPresenter } from '../../presenters/user.presenter';

@Controller('/user/email')
export class FindUserByEmailController {
  constructor(private findUserByEmailUseCase: FindUserByEmailUseCase) {}

  @UseGuards(AuthGuard)
  @Get(':userEmail')
  async findByEmail(@Param() userEmail: string) {
    const user = await this.findUserByEmailUseCase.execute(userEmail);
    return UserPresenter.toHttp(user.user);
  }
}
