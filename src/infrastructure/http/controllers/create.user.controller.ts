import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { DeleteUserUseCase } from 'src/application/use-cases/delete-user-use-case';
import { FindUserByEmailUseCase } from 'src/application/use-cases/find-user-by-email-use-case';
import { RegisterUserUseCase } from '../../../application/use-cases/register-user-use-case';
import { UpdateUserUseCase } from '../../../application/use-cases/update-user-use-case';
import { CreateUserDto } from '../dtos/create.user.DTO';
import { UpdateUserDto } from '../dtos/update.user.DTO';

@Controller('/user')
export class CreateUserController {
  constructor(
    private registerUserUseCase: RegisterUserUseCase,
    private findUserByEmailUseCase: FindUserByEmailUseCase,
    private updateUserUseCase: UpdateUserUseCase,
    private deleteUserUseCase: DeleteUserUseCase
  ) {}
  @Post('/register')
  async createUser(@Body() userBody: CreateUserDto) {
    await this.registerUserUseCase.execute(userBody);
    return {};
  }

  
  @Patch('updateUser/:userId')
  async updateUser( @Body() userData: UpdateUserDto, @Param() userId) {
    return await this.updateUserUseCase.execute(userData, userId);
  }

  @Delete("delete/:userId")
  async deleteUser(@Param() userId){
    return await this.deleteUserUseCase.execute(userId)
  }
}
