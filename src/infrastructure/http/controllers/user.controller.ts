import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateUserDto } from '../dtos/create.user.DTO';
import { RegisterUserUseCase } from '../../../application/use-cases/register-user-use-case';
import { FindUserByIdUseCase } from '../../../application/use-cases/find-user-by-id-use-case';
import { FindAllUsersUseCase } from 'src/application/use-cases/find-all-users-use-case';
import { FindUserByEmailUseCase } from 'src/application/use-cases/find-user-by-email-use-case';

@Controller('/user')
export class UserController {
  constructor(
    private registerUserUseCase: RegisterUserUseCase,
    private findUserByIdUseCase: FindUserByIdUseCase,
    private findAllUsersUseCase:FindAllUsersUseCase,
    private findUserByEmailUseCase: FindUserByEmailUseCase
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
  async findAll(){
    return await this.findAllUsersUseCase.execute();
  }

  @Get("email/:userEmail")
  async findByEmail(@Param() userEmail:string){
    console.log(userEmail)
    return await this.findUserByEmailUseCase.execute(userEmail)
  }
}
