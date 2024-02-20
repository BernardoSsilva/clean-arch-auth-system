import { Module } from "@nestjs/common";
import { UserController } from "./controllers/user.controller";
import { RegisterUserUseCase } from "src/application/use-cases/register-user-use-case";
import { DatabaseModule } from "../dataBase/database.module";
import { FindUserByIdUseCase } from "src/application/use-cases/find-user-by-id-use-case";
import { FindAllUsersUseCase } from "src/application/use-cases/find-all-users-use-case";

@Module({
    imports:[
        DatabaseModule
    ],
    controllers:[UserController],
    providers:[RegisterUserUseCase, FindUserByIdUseCase,FindAllUsersUseCase]
})

export class HttpModule{}