import { Injectable } from '@nestjs/common';
import { UserRepository } from '../repositories/user.repository';

@Injectable()
export class FindUserByIdUseCase {
  constructor(private userRepository: UserRepository) {}

  async execute(userId: string) {
    return await this.userRepository.findById(userId);;
     
  }
}
