import {ArgsType, Field} from "@nestjs/graphql";
import {IsNotEmpty, IsOptional, IsString} from "class-validator";

@ArgsType()
export class GetUserArgs{
    @Field()
    @IsString()
    @IsNotEmpty()
    username:string;

    @Field()
    @IsString()
    @IsOptional()
    password?:string;

    @Field()
    @IsString()
    @IsOptional()
    mobileNumber?:string;
}