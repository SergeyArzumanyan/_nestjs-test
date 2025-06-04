import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello() {
    return {
      message: 'Hello World!',
    };
  }

  saveHello(message: string) {
    return {
      message: `SAVED ${message} Hello World!`,
    };
  }
}
