import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";
import {AbstractDocument} from "@app/common";

@Schema({versionKey: false})
export class Hestia extends AbstractDocument {
    @Prop()
    username: string;

    @Prop()
    password: string

    @Prop()
    mobileNumber: string;
}

export const HestiaSchema = SchemaFactory.createForClass(Hestia);