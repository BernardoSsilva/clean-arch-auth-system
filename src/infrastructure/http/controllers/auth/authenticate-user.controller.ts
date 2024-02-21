import { Body, Controller, Post } from "@nestjs/common";
import { AuthUserUseCase } from "src/application/use-cases/auth-user.use-case";

@Controller("/user/authenticate")
export class AuthenticateUserController {

    constructor ( private authenticateUserUseCase:AuthUserUseCase){}
    @Post()
    async login(@Body() authBody){
        const token = await this.authenticateUserUseCase.execute(authBody)
        return token
    }
}