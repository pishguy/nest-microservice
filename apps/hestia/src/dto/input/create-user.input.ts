import {Field, InputType} from "@nestjs/graphql";
import {IsNotEmpty, IsString} from "class-validator";

@InputType()

export class CreateUserInput {
    @Field() @IsNotEmpty() username: string;
    @Field() @IsString() password: string;
    @Field() @IsString() mobileNumber: string;
}