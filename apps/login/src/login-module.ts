import {Module} from '@nestjs/common';
import {LoginController} from './login-controller';
import {LoginService} from './login.service';
import {ConfigModule, ConfigService} from "@nestjs/config";
import * as Joi from "joi";
import {DatabaseModule, RmqModule} from "@app/common";
import {MongooseModule} from "@nestjs/mongoose";
import {LoginRepository} from "./login-repository.service";
import {Login, LoginSchema} from "./schema/login.schema";

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
            validationSchema: Joi.object({
                MONGODB_URI: Joi.string().required(),
                RABBIT_MQ_URI: Joi.string().required(),
                RABBIT_MQ_REGISTER_QUEUE: Joi.string().required(),
            }),
            envFilePath: './apps/login/.env'
        }),
        DatabaseModule,
        MongooseModule.forFeature([{name: Login.name, schema: LoginSchema}]),
        RmqModule
    ],
    controllers: [LoginController],
    providers: [LoginService,LoginRepository],
})
export class LoginModule {
}
