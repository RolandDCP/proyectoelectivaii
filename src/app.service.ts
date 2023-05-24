import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getProducts(limit: number, offset: number): string {
    const until: number = Number(limit)+Number(offset);
    return 'Productos desde el id ' + offset + ' hasta ' + until;
  }
  getHelloAndName(name: string): string {
    return this.getHello() + 'tunombre es' +name;
  
  }
  
  getHello(): String {
    return 'Hello World!';
  }

  getName():String{
    return 'Mi nombre es Roland';

  }
}
