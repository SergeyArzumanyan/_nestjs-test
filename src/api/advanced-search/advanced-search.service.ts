import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';

@Injectable()
export class AdvancedSearchService {
  constructor(private readonly httpService: HttpService) {}
}
