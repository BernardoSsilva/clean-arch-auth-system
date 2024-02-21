import { Injectable } from '@nestjs/common';
import { UpdateUserDto } from '../../../infrastructure/http/dtos/update-user.DTO';
import { UserRepository } from '../../repositories/user.repository';
import { NotFoundError } from '../../../shared/errors/not-found.error';

@Injectable()
export class UpdateUserUseCase {
  constructor(private userRepository: UserRepository) {}
  async execute(user: UpdateUserDto, userId: string) {
    const userExists = await this.userRepository.findById(userId);
    if(!userExists){
      throw new NotFoundError('User not found');
    }
    return await this.userRepository.update(user, userId);
  }
}
