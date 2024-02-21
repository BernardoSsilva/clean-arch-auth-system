import { Controller, Delete, Param } from '@nestjs/common';
import { DeleteUserUseCase } from '../../../application/use-cases/delete-user-use-case';

@Controller('/user/delete')
export class DeleteUserController {
  constructor(private deleteUserUseCase: DeleteUserUseCase) {}

  @Delete('/:userId')
  async deleteUser(@Param() userId) {
    return await this.deleteUserUseCase.execute(userId);
  }
}
