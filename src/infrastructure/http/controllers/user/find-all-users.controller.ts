import { Controller, Get } from "@nestjs/common";
import { FindAllUsersUseCase } from "../../../../application/use-cases/find-all-users.use-case";
import { UserPresenter } from "../../presenters/user.presenter";

@Controller("/users/get/all")
export class FindAllUsersController{
    constructor(
        private findAllUsersUseCase: FindAllUsersUseCase
    ){}
    @Get()
    async findAll() {
      const users = await this.findAllUsersUseCase.execute();
      return users.map((user) => UserPresenter.toHttp(user))
    }
}