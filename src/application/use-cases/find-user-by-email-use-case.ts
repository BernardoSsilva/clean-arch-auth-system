import { Injectable } from '@nestjs/common';
import { UserRepository } from '../../application/repositories/user.repository';
@Injectable()
export class FindUserByEmailUseCase {
  constructor(private UserRepository: UserRepository) {}

  async execute(email: string) {
    const user = await this.UserRepository.findByEmail(email);
    return { user };
  }
}
