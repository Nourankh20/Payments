import { Controller, Get, Post, Body,Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('/pay/:amount')
  payment(@Param("amount") amount:number){
    return this.appService.payment(amount);
  }
}
