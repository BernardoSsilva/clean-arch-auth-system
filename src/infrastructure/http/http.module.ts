import { Module } from '@nestjs/common';
import { DeleteUserUseCase } from '../../application/use-cases/user/delete-user.use-case';
import { FindAllUsersUseCase } from '../../application/use-cases/user/find-all-users.use-case';
import { FindUserByEmailUseCase } from '../../application/use-cases/user/find-user-by-email.use-case';
import { FindUserByIdUseCase } from '../../application/use-cases/user/find-user-by-id.use-case';
import { RegisterUserUseCase } from '../../application/use-cases/user/register-user.use-case';
import { UpdateUserUseCase } from '../../application/use-cases/user/update-user-use-case';
import { DatabaseModule } from '../dataBase/database.module';
import { CreateUserController } from './controllers/user/create-user.controller';
import { FindUserByIdController } from './controllers/user/find-user-by-id.controller';
import { DeleteUserController } from './controllers/user/delete-user.controller';
import { FindAllUsersController } from './controllers/user/find-all-users.controller';
import { UpdateUserController } from './controllers/user/update-user.controller';
import { FindUserByEmailController } from './controllers/user/find-user-by-email.controller';
import { AuthenticateUserController } from './controllers/auth/authenticate-user.controller';
import { AuthUserUseCase } from 'src/application/use-cases/user/auth-user.use-case';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { CreateImageController } from './controllers/image/create-image.controller';
import { RegisterImageUseCase } from 'src/application/use-cases/images/register-image.use-case';

@Module({
  imports: [
    DatabaseModule,
    JwtModule.register({
      global: true,
      secret: 'authSystem',
      signOptions: { expiresIn: '2h' },
    }),
  ],
  controllers: [
    CreateUserController,
    FindUserByIdController,
    FindAllUsersController,
    FindUserByEmailController,
    UpdateUserController,
    DeleteUserController,
    AuthenticateUserController,
    CreateImageController,
  ],
  providers: [
    RegisterUserUseCase,
    FindUserByIdUseCase,
    FindAllUsersUseCase,
    FindUserByEmailUseCase,
    UpdateUserUseCase,
    DeleteUserUseCase,
    AuthUserUseCase,
    JwtService,
    RegisterImageUseCase,
  ],
  exports: [HttpModule],
})
export class HttpModule {}
