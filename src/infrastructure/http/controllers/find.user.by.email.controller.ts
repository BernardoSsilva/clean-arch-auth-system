import { Controller, Get, Param } from '@nestjs/common';
import { FindUserByEmailUseCase } from '../../../application/use-cases/find-user-by-email-use-case';

@Controller('/user/email')
export class FindUserByEmailController {
  constructor(private findUserByEmailUseCase: FindUserByEmailUseCase) {}
  @Get(':userEmail')
  async findByEmail(@Param() userEmail: string) {
    return await this.findUserByEmailUseCase.execute(userEmail);
  }
}
