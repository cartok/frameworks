import { PartialType } from "@nestjs/mapped-types";
import { IsString } from "class-validator";

export class UserTask {
  id: number;
  text: string;
}

export class CreateUserTaskDto {
  @IsString()
  text: string;
}

export class UpdateUserTaskDto extends PartialType(CreateUserTaskDto) {}
