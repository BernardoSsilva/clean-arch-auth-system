import { Body, Controller, Post } from "@nestjs/common";
import { AuthUserUseCase } from "src/application/use-cases/auth-user.use-case";
import { UserPresenter } from "../../presenters/user.presenter";

@Controller("/user/authenticate")
export class AuthenticateUserController {

    constructor ( private authenticateUserUseCase:AuthUserUseCase){}
    @Post()
    async login(@Body() authBody){
        const user = await this.authenticateUserUseCase.execute(authBody)
        return UserPresenter.toHttp(user)
    }
}