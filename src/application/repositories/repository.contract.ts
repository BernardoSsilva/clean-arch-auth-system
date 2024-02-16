import { Entity } from 'src/shared/entities/entity';

export interface RepositoryContract<E extends Entity> {
  findById(id: string): Promise<E>;
  findAll(): Promise<E[]>;
  insert(entity: E): Promise<void>;
  update(id: string, entity: E): Promise<void>;
  delete(id: string): Promise<void>;
}
