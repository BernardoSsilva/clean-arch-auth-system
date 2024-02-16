import { UserEntity } from 'src/application/entities/user.entity';
import { inMemoryRepository } from 'src/application/repositories/in-memory.repository';
import { SelectAllUsersUseCase } from 'src/application/useCases/user/select-all-users.usecase';

export class UserInMemoryRepository implements inMemoryRepository<UserEntity> {
  items: UserEntity[];
  async findById(id: string): Promise<UserEntity> {
    return await this.items.find((item) => item.id === id);
  }
  async findAll(): Promise<UserEntity[]> {
    return await SelectAllUsersUseCase.UseCase;
  }
  update(id: string, entity: UserEntity): Promise<void> {
    throw new Error('Method not implemented.');
  }
  delete(id: string): Promise<void> {
    throw new Error('Method not implemented.');
  }
  insert(entity: UserEntity): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
