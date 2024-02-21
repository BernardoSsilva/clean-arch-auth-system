import { Module } from '@nestjs/common';
import { DeleteUserUseCase } from '../../application/use-cases/delete-user-use-case';
import { FindAllUsersUseCase } from '../../application/use-cases/find-all-users-use-case';
import { FindUserByEmailUseCase } from '../../application/use-cases/find-user-by-email-use-case';
import { FindUserByIdUseCase } from '../../application/use-cases/find-user-by-id-use-case';
import { RegisterUserUseCase } from '../../application/use-cases/register-user-use-case';
import { UpdateUserUseCase } from '../../application/use-cases/update-user-use-case';
import { DatabaseModule } from '../dataBase/database.module';
import { CreateUserController } from './controllers/create.user.controller';
import { FindUserByIdController } from './controllers/find.user.by.id.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [CreateUserController, FindUserByIdController],
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
