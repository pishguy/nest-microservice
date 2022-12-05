import {Module} from '@nestjs/common';
import {HestiaController} from './hestia.controller';
import {HestiaService} from './hestia.service';
import {ConfigModule, ConfigService} from "@nestjs/config";
import * as Joi from "joi";
import {DatabaseModule, RmqModule} from "@app/common";
import {LOGIN_SERVICE} from "./constants/services";
import {MongooseModule} from "@nestjs/mongoose";
import {Hestia, HestiaSchema} from "./schema/hestia.schema";
import { GraphQLModule} from "@nestjs/graphql";
import {ApolloDriverConfig, ApolloDriver} from '@nestjs/apollo';
import {BullModule} from "@nestjs/bull";
import {MessageProducerService} from "./queue/message.producer.service";
import {MessageConsumer} from "./queue/message-consumer";
import {HestiaRepository} from "./hestia.repository";
import {UsersResolver} from "./users.resolver";

@Module({
    imports: [
        BullModule.forRoot(
            {
                redis: {
                    host: 'localhost',
                    port: 5003
                }
            }
        ),
        BullModule.registerQueue({
            name: 'message-queue'
        }),
        GraphQLModule.forRoot<ApolloDriverConfig>({
            driver: ApolloDriver,
            path: '/graphql',
            autoSchemaFile: true,
        }),
        ConfigModule.forRoot({
            isGlobal: true,
            validationSchema: Joi.object({
                MONGODB_URI: Joi.string().required(),
                PORT: Joi.string().required(),
            }),
            envFilePath: './apps/hestia/.env'
        }),
        DatabaseModule,
        MongooseModule.forFeature([{name: Hestia.name, schema: HestiaSchema}]),
        RmqModule.register({
            name: LOGIN_SERVICE
        }),
    ],
    controllers: [HestiaController],
    providers: [HestiaService,MessageProducerService,MessageConsumer,HestiaRepository,UsersResolver],
})
export class HestiaModule {
}
