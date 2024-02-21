import { Controller, Get } from "@nestjs/common";
import { FindAllUsersUseCase } from "@application/use-cases/find-all-users.use-case";

@Controller("/users/get/all")
export class FindAllUsersController{
    constructor(
        private findAllUsersUseCase: FindAllUsersUseCase
    ){}
    @Get()
    async findAll() {
      return await this.findAllUsersUseCase.execute();
    }
}