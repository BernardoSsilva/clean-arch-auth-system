import { Controller, Delete, Param, UseGuards } from '@nestjs/common';
import { DeleteUserUseCase } from '../../../../application/use-cases/delete-user.use-case';
import { AuthGuard } from '../../../../infrastructure/guard/auth.guard';

@Controller('/user/delete')
export class DeleteUserController {
  constructor(private deleteUserUseCase: DeleteUserUseCase) {}

  @UseGuards(AuthGuard)
  @Delete('/:userId')
  async deleteUser(@Param() userId) {
    return await this.deleteUserUseCase.execute(userId);
  }
}
