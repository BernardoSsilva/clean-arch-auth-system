import { Module } from '@nestjs/common';
import { DeleteUserUseCase } from '../../application/use-cases/delete-user.use-case';
import { FindAllUsersUseCase } from '../../application/use-cases/find-all-users.use-case';
import { FindUserByEmailUseCase } from '../../application/use-cases/find-user-by-email.use-case';
import { FindUserByIdUseCase } from '../../application/use-cases/find-user-by-id.use-case';
import { RegisterUserUseCase } from '../../application/use-cases/register-user.use-case';
import { UpdateUserUseCase } from '../../application/use-cases/update-user-use-case';
import { DatabaseModule } from '../dataBase/database.module';
import { CreateUserController } from './controllers/user/create-user.controller';
import { FindUserByIdController } from './controllers/user/find-user-by-id.controller';
import { DeleteUserController } from './controllers/user/delete-user.controller';
import { FindAllUsersController } from './controllers/user/find-all-users.controller';
import { UpdateUserController } from './controllers/user/update-user.controller';
import { FindUserByEmailController } from './controllers/user/find-user-by-email.controller';
import { AuthenticateUserController } from './controllers/auth/authenticate-user.controller';
import { AuthUserUseCase } from 'src/application/use-cases/auth-user.use-case';

@Module({
  imports: [DatabaseModule],
  controllers: [
    CreateUserController,
    FindUserByIdController,
    FindAllUsersController,
    FindUserByEmailController,
    UpdateUserController,
    DeleteUserController,
    AuthenticateUserController
  ],
  providers: [
    RegisterUserUseCase,
    FindUserByIdUseCase,
    FindAllUsersUseCase,
    FindUserByEmailUseCase,
    UpdateUserUseCase,
    DeleteUserUseCase,
    AuthUserUseCase
  ],
})
export class HttpModule {}
