import { PartialType } from "@nestjs/mapped-types";
import { CreateUserDto } from "./create-user.DTO";

export class UpdateUserDto extends PartialType(CreateUserDto){}