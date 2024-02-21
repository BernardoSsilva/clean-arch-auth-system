import { Body, Controller, Post } from '@nestjs/common';
import { RegisterUserUseCase } from '../../../application/use-cases/register-user.use-case';
import { CreateUserDto } from '../dtos/create-user.DTO';

@Controller('/user/register')
export class CreateUserController {
  constructor(private registerUserUseCase: RegisterUserUseCase) {}
  @Post()
  async createUser(@Body() userBody: CreateUserDto) {
    await this.registerUserUseCase.execute(userBody);
    return {};
  }
}
