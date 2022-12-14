import { Controller, Get, Post, Req,Param } from '@nestjs/common';
import { Request } from 'express';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Post()
  add(@Req() req:Request){
    return 'hi you are login success full'+" "+req.body.uname;
  }
 

}
