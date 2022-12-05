import {Body, Controller, Get, Logger, Post} from '@nestjs/common';
import { HestiaService } from './hestia.service';
import {RequestCreateNewUser} from "./dto/request-new-user.request";

@Controller()
export class HestiaController {
  private readonly logger = new Logger(HestiaController.name);
  constructor(private readonly hestiaService: HestiaService) {}

  @Get()
  getAll() {
    return this.hestiaService.getAll();
  }

  @Post()
  async createUser(@Body() request: RequestCreateNewUser){
    return this.hestiaService.createNewUser(request);
  }
}
