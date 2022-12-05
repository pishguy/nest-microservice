import { NestFactory } from '@nestjs/core';
import { LoginModule } from './login-module';
import {RmqService} from "@app/common";

async function bootstrap() {
  const app = await NestFactory.create(LoginModule);
  const rmqService = app.get<RmqService>(RmqService);
  app.connectMicroservice(rmqService.getOptions('LOGIN'));
  await app.startAllMicroservices();
}
bootstrap().then(r => {});
