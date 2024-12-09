import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): number {
    return this.appService.getHello();
  }

  @Post('sum')
  incrementCount(): number {
    return this.appService.sum();
  }

  @Post('res')
  resetCount(): number {
    return this.appService.res();
  }
}
