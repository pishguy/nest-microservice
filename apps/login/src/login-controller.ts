import {Body, Controller, Get, Logger, Post} from '@nestjs/common';
import { LoginService } from './login.service';
import {RequestCreateNewUser} from "./dto/request-new-user.request";
import {RmqService} from "@app/common";
import {Ctx, EventPattern, Payload, RmqContext} from "@nestjs/microservices";

@Controller()
export class LoginController {
  private logger = new Logger(LoginController.name);
  constructor(private readonly loginService: LoginService,private readonly rmqService:RmqService) {}

  @EventPattern('register_request')
  async handleRegisterRequest(@Payload() request:RequestCreateNewUser,@Ctx() context:RmqContext){
    await this.loginService.register(request);
    this.rmqService.ack(context);
  }
/*  constructor(private readonly hestiaService: LoginService) {}

  @Get()
  getAll() {
    return this.hestiaService.getAll();
  }

  @Post()
  async createUser(@Body() request: RequestCreateNewUser){
    return this.hestiaService.createNewUser(request);
  }*/
}
