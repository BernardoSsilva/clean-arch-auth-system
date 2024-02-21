import { Injectable } from '@nestjs/common';
import { UpdateUserDto } from 'src/infrastructure/http/dtos/update-user.DTO';
import { UserRepository } from '../repositories/user.repository';
@Injectable()
export class UpdateUserUseCase {
  constructor(private userRepository: UserRepository) {}
  async execute(user: UpdateUserDto, userId: string) {
    return await this.userRepository.update(user, userId);
  }
}
