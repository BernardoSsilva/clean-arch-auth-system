import { Injectable } from '@nestjs/common';
import { UserEntity } from '../entities/user.entity';
import { UserRepository } from '../repositories/user.repository';
import { UpdateUserDto } from 'src/infrastructure/http/dtos/update.user.DTO';
@Injectable()
export class UpdateUserUseCase {
  constructor(private userRepository: UserRepository) {}
  async execute(user: UpdateUserDto, userId: string) {
    return await this.userRepository.update(user, userId);
  }
}
