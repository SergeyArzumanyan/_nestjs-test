import { Test, TestingModule } from '@nestjs/testing';
import { AdvancedSearchService } from './advanced-search.service';

describe('AdvancedSearchService', () => {
  let service: AdvancedSearchService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AdvancedSearchService],
    }).compile();

    service = module.get<AdvancedSearchService>(AdvancedSearchService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
