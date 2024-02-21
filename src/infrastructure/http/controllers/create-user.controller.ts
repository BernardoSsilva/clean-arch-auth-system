import { Body, Controller, Post } from '@nestjs/common';
import { RegisterUserUseCase } from '../../../application/use-cases/register-user.use-case';
import { CreateUserDto } from '../dtos/create-user.DTO';
import { UserPresenter } from '../presenters/user.presenter';

@Controller('/user/register')
export class CreateUserController {
  constructor(private registerUserUseCase: RegisterUserUseCase) {}
  @Post()
  async createUser(@Body() userBody: CreateUserDto) {
    const user = await this.registerUserUseCase.execute(userBody);
    return UserPresenter.toHttp(user.user);
  }
}
