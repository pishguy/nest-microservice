import {ArgsType, Field} from "@nestjs/graphql";
import {IsArray, IsNotEmpty, IsString} from "class-validator";

@ArgsType()
export class GetUsersArgs{
    @Field(()=>[String])
    @IsArray()
    usernames:string[];
}