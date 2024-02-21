import { Body, Controller, Param, Patch, UseGuards } from '@nestjs/common';
import { UpdateUserUseCase } from '../../../../application/use-cases/update-user-use-case';
import { UpdateUserDto } from '../../dtos/update-user.DTO';
import { UserPresenter } from '../../presenters/user.presenter';
import { AuthGuard } from '../../../../infrastructure/guard/auth.guard';
@Controller('/user/update-user')
export class UpdateUserController {
  constructor(private updateUserUseCase: UpdateUserUseCase) {}
  @UseGuards(AuthGuard)
  @Patch('/:userId')
  async updateUser(@Body() userData: UpdateUserDto, @Param("userId") userId:string) {
    const user = await this.updateUserUseCase.execute(userData, userId);
    return UserPresenter.toHttp(user);
  }
}
