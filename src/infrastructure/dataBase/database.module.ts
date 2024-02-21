import { Module } from '@nestjs/common';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { UserRepository } from '../../application/repositories/user.repository';
import { PrismaService } from './prisma/prisma.service';
import { PrismaUserRepository } from './prisma/repositories/prisma-user.repository';

@Module({
  imports: [
    JwtModule.register({
      global: true,
      secret: 'authSystem',
      signOptions: { expiresIn: '2h' },
    }),
  ],
  providers: [
    JwtService,
    PrismaService,
    {
      provide: UserRepository,
      useClass: PrismaUserRepository,
    },
  ],

  exports: [UserRepository, DatabaseModule],
})
export class DatabaseModule {}
