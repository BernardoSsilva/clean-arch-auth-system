import { Body, Controller, Param, Patch } from '@nestjs/common';
import { UpdateUserUseCase } from '../../../../application/use-cases/update-user-use-case';
import { UpdateUserDto } from '../../dtos/update-user.DTO';
import { UserPresenter } from '../../presenters/user.presenter';

@Controller('/user/update-user')
export class UpdateUserController {
  constructor(private updateUserUseCase: UpdateUserUseCase) {}
  @Patch('/:userId')
  async updateUser(@Body() userData: UpdateUserDto, @Param() userId) {
    const user = await this.updateUserUseCase.execute(userData, userId);
    return UserPresenter.toHttp(user)
  }
}
