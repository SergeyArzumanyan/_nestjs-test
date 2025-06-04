import { Test, TestingModule } from '@nestjs/testing';
import { AdvancedSearchController } from './advanced-search.controller';
import { AdvancedSearchService } from './advanced-search.service';

describe('AdvancedSearchController', () => {
  let controller: AdvancedSearchController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AdvancedSearchController],
      providers: [AdvancedSearchService],
    }).compile();

    controller = module.get<AdvancedSearchController>(AdvancedSearchController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
