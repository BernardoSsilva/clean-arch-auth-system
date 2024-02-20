import { Injectable } from '@nestjs/common';
import { UserRepository } from '../../application/repositories/user.repository';
@Injectable()
export class FindUserByEmailUseCase {
  constructor(private userRepository: UserRepository) {}

  async execute(email: string) {
    const user = await this.userRepository.findByEmail(email);
    return { user };
  }
}
