import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { CreateUserDto } from '../dtos/create.user.DTO';
import { RegisterUserUseCase } from '../../../application/use-cases/register-user-use-case';
import { FindUserByIdUseCase } from '../../../application/use-cases/find-user-by-id-use-case';
import { FindAllUsersUseCase } from 'src/application/use-cases/find-all-users-use-case';
import { FindUserByEmailUseCase } from 'src/application/use-cases/find-user-by-email-use-case';
import { UpdateUserDto } from '../dtos/update.user.DTO';
import { UpdateUserUseCase } from '../../../application/use-cases/update-user-use-case';
import { DeleteUserUseCase } from 'src/application/use-cases/delete-user-use-case';

@Controller('/user')
export class UserController {
  constructor(
    private registerUserUseCase: RegisterUserUseCase,
    private findUserByIdUseCase: FindUserByIdUseCase,
    private findAllUsersUseCase: FindAllUsersUseCase,
    private findUserByEmailUseCase: FindUserByEmailUseCase,
    private updateUserUseCase: UpdateUserUseCase,
    private deleteUserUseCase: DeleteUserUseCase
  ) {}
  @Post('/register')
  async createUser(@Body() userBody: CreateUserDto) {
    await this.registerUserUseCase.execute(userBody);
    return {};
  }

  @Get('/:id')
  async findById(@Param('id') id: string) {
    return await this.findUserByIdUseCase.execute(id);
  }

  @Get()
  async findAll() {
    return await this.findAllUsersUseCase.execute();
  }

  @Get('email/:userEmail')
  async findByEmail(@Param() userEmail: string) {
    return await this.findUserByEmailUseCase.execute(userEmail);
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
