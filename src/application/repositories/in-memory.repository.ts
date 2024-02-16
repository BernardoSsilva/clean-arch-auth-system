import { RepositoryContract } from 'src/application/repositories/repository.contract';
import { Entity } from 'src/shared/entities/entity';
import { NotFoundError } from 'src/shared/errors/not-found.error';

export class inMemoryRepository<E extends Entity>
  implements RepositoryContract<E>
{
  items: E[] = [];
  async findById(id: string): Promise<E> {
    return this.items.find((item) => item.id === id);
  }
  async findAll(): Promise<E[]> {
    if (this.items.length <= 0) {
      throw new NotFoundError('No entities found');
    }
    return await this.items;
  }
  update(id: string, entity: E): Promise<void> {
    const index = this.items.findIndex((item) => item.id === id);
    this.items[index] = entity;
    return null;
  }
  delete(id: string): Promise<void> {
    const index = this.items.findIndex((item) => item.id == id);
    this.items.splice(index, 1);
    return;
  }

  insert(entity: E): Promise<void> {
    this.items.push(entity);
    return;
  }
}
