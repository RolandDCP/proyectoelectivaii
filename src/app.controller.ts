import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  
@Get()
  getHello(): String {
    return this.appService.getHello();
  }
  
  @Get('hello/:name')
  getHelloAndName(@Param('name')name: string): string {
    return this.appService.getHelloAndName(name);
  }

  @Get('products')
  getProducts(@Query('limit') limit = 10, @Query('offset')offset = 0): string{
return this.appService.getProducts(limit, offset);

  }
 
  
}
