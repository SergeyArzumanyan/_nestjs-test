import { Module } from '@nestjs/common';
import { AdvancedSearchService } from './advanced-search.service';
import { AdvancedSearchController } from './advanced-search.controller';

@Module({
  controllers: [AdvancedSearchController],
  providers: [AdvancedSearchService],
})
export class AdvancedSearchModule {}
