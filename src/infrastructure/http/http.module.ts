import { Module } from '@nestjs/common';
import { UserController } from './controllers/user.controller';
import { RegisterUserUseCase } from '../../application/use-cases/register-user-use-case';
import { DatabaseModule } from '../dataBase/database.module';
import { FindUserByIdUseCase } from '../../application/use-cases/find-user-by-id-use-case';
import { FindAllUsersUseCase } from '../../application/use-cases/find-all-users-use-case';
import { FindUserByEmailUseCase } from '../../application/use-cases/find-user-by-email-use-case';
import { UpdateUserUseCase } from '../../application/use-cases/update-user-use-case';
import { DeleteUserUseCase } from '../../application/use-cases/delete-user-use-case';

@Module({
  imports: [DatabaseModule],
  controllers: [UserController],
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
