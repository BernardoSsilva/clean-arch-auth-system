import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { FindAllImagesUseCase } from '../../application/use-cases/images/find-all-images.use-case';
import { FindImageByIdUseCase } from '../../application/use-cases/images/find-image-by-id.use-case';
import { FindImageByUserIdUseCase } from '../../application/use-cases/images/find-image-by-user-id.use-case';
import { RegisterImageUseCase } from '../../application/use-cases/images/register-image.use-case';
import { AuthUserUseCase } from '../../application/use-cases/user/auth-user.use-case';
import { DeleteUserUseCase } from '../../application/use-cases/user/delete-user.use-case';
import { FindAllUsersUseCase } from '../../application/use-cases/user/find-all-users.use-case';
import { FindUserByEmailUseCase } from '../../application/use-cases/user/find-user-by-email.use-case';
import { FindUserByIdUseCase } from '../../application/use-cases/user/find-user-by-id.use-case';
import { RegisterUserUseCase } from '../../application/use-cases/user/register-user.use-case';
import { UpdateUserUseCase } from '../../application/use-cases/user/update-user-use-case';
import { DatabaseModule } from '../dataBase/database.module';
import { AuthenticateUserController } from './controllers/auth/authenticate-user.controller';
import { CreateImageController } from './controllers/image/create-image.controller';
import { FindAllImagesController } from './controllers/image/find-all-images.controller';
import { FindImageByIdController } from './controllers/image/find-image-by-id.controller';
import { CreateUserController } from './controllers/user/create-user.controller';
import { DeleteUserController } from './controllers/user/delete-user.controller';
import { FindAllUsersController } from './controllers/user/find-all-users.controller';
import { FindUserByEmailController } from './controllers/user/find-user-by-email.controller';
import { FindUserByIdController } from './controllers/user/find-user-by-id.controller';
import { UpdateUserController } from './controllers/user/update-user.controller';
import { FindImageByUserIdController } from './controllers/image/find-image-by-user-id.controller';
import { DeleteImageUseCase } from '../../application/use-cases/images/delete-image-use-case';
import { DeleteImageController } from './controllers/image/delete-image.controller';

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
    FindImageByIdController,
    FindAllImagesController,
    FindImageByUserIdController,
    DeleteImageController,
  ],
  providers: [
    DeleteImageUseCase,
    RegisterUserUseCase,
    FindUserByIdUseCase,
    FindAllUsersUseCase,
    FindUserByEmailUseCase,
    UpdateUserUseCase,
    DeleteUserUseCase,
    AuthUserUseCase,
    RegisterImageUseCase,
    FindImageByIdUseCase,
    FindAllImagesUseCase,
    FindImageByUserIdUseCase,
  ],
  exports: [HttpModule],
})
export class HttpModule {}
