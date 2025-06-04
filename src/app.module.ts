import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AdvancedSearchModule } from '@api/advanced-search';
import { ConfigModule } from '@nestjs/config';

import configuration from '@config/configuration';
import { validationSchema } from '@config/validation';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
      validationSchema,
      envFilePath: [`.env.${process.env.NODE_ENV}`, '.env'],
    }),
    HttpModule,
    AdvancedSearchModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
