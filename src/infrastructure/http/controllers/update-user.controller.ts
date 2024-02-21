import { Body, Controller, Param, Patch } from '@nestjs/common';
import { UpdateUserUseCase } from '@application/use-cases/update-user.use-case';
import { UpdateUserDto } from '../dtos/update-user.DTO';

@Controller('/user/update-user')
export class UpdateUserController {
  constructor(private updateUserUseCase: UpdateUserUseCase) {}
  @Patch('/:userId')
  async updateUser(@Body() userData: UpdateUserDto, @Param() userId) {
    return await this.updateUserUseCase.execute(userData, userId);
  }
}
