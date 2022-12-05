import {IsNumber, IsString} from "class-validator";

export class RequestCreateNewUser {
    @IsString()
    username: string;

    @IsString()
    password:string;

    @IsString()
    mobileNumber: string;
}