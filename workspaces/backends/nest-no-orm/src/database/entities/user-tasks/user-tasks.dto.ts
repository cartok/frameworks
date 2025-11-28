import { PartialType } from "@nestjs/mapped-types";
import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class UserTask {
  id: number;
  text: string;
}

export class CreateUserTaskDto {
  @ApiProperty({
    description: "A user's task to be added",
    example: "Buy groceries",
    required: true,
  })
  @IsString()
  text: string;
}

export class UpdateUserTaskDto extends PartialType(CreateUserTaskDto) {
  @ApiProperty({
    description: "The data of a user's task to be updated",
    example: { text: "Buy pizza" },
    required: false,
    // type: String,
  })
  text?: string;
}
