import {Field, InputType} from "@nestjs/graphql";
import {IsNotEmpty, IsOptional, IsString} from "class-validator";

@InputType()

export class DeleteUserInput {
    @Field() @IsNotEmpty() username: string;
}