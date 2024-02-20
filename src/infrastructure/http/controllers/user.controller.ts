import { Body, Controller, Post } from "@nestjs/common";
import { CreateUserDto } from "../dtos/create.user.DTO";


@Controller("/user")
export class UserController{
    @Post("/create")
    async createUser(@Body() userBody:CreateUserDto){}
}