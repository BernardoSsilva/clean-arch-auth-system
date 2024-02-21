import { Module } from '@nestjs/common';
import { DeleteUserUseCase } from '../../application/use-cases/delete-user.use-case';
import { FindAllUsersUseCase } from '../../application/use-cases/find-all-users.use-case';
import { FindUserByEmailUseCase } from '../../application/use-cases/find-user-by-email.use-case';
import { FindUserByIdUseCase } from '../../application/use-cases/find-user-by-id.use-case';
import { RegisterUserUseCase } from '../../application/use-cases/register-user.use-case';
import { UpdateUserUseCase } from '../../application/use-cases/update-user.use-case';
import { DatabaseModule } from '../dataBase/database.module';
import { CreateUserController } from './controllers/create-user.controller';
import { FindUserByIdController } from './controllers/find-user-by-id.controller';
import { DeleteUserController } from './controllers/delete-user.controller';
import { FindAllUsersController } from './controllers/find-all-users.controller';
import { UpdateUserController } from './controllers/update-user.controller';
import { FindUserByEmailController } from './controllers/find-user-by-email.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [
    CreateUserController,
    FindUserByIdController,
    FindAllUsersController,
    FindUserByEmailController,
    UpdateUserController,
    DeleteUserController,
  ],
  providers: [
    RegisterUserUseCase,
    FindUserByIdUseCase,
    FindAllUsersUseCase,
    FindUserByEmailUseCase,
    UpdateUserUseCase,
    DeleteUserUseCase,
  ],
})
export class HttpModule {}
