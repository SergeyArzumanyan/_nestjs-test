import { Module } from '@nestjs/common';
import { AdvancedSearchService } from './advanced-search.service';
import { AdvancedSearchController } from './advanced-search.controller';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  controllers: [AdvancedSearchController],
  providers: [AdvancedSearchService],
})
export class AdvancedSearchModule {}
