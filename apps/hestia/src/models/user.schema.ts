import {Field, ObjectType} from "@nestjs/graphql";
import {AbstractDocument} from "@app/common";

@ObjectType()
export class UserSchema extends AbstractDocument{
    @Field() username: string;
    @Field() password: string;
    @Field() mobileNumber: string;
}