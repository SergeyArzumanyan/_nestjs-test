import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { HttpService } from '@nestjs/axios';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly httpService: HttpService,
  ) {}

  @Get()
  getHello() {
    return this.appService.getHello();
  }

  @Post()
  saveHello(@Body() body: { message: string }) {
    return this.appService.saveHello(body.message);
  }
}
