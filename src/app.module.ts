import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AdvancedSearchModule } from '@api/advanced-search';

import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule, AdvancedSearchModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
