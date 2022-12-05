import {Field, InputType} from "@nestjs/graphql";
import {IsNotEmpty, IsOptional, IsString} from "class-validator";

@InputType()

export class UpdateUserInput {
    @Field() @IsNotEmpty() username: string;
    @Field() @IsOptional() @IsString() password?: string;
    @Field() @IsOptional() @IsString() mobileNumber?: string;
}