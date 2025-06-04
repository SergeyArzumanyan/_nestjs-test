import { Controller } from '@nestjs/common';
import { AdvancedSearchService } from './advanced-search.service';

@Controller('advanced-search')
export class AdvancedSearchController {
  constructor(private readonly advancedSearchService: AdvancedSearchService) {}
}
