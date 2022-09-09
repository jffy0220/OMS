import { Test, TestingModule } from '@nestjs/testing';
import { ReturnTypeService } from './return_type.service';

describe('ReturnTypeService', () => {
  let service: ReturnTypeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ReturnTypeService],
    }).compile();

    service = module.get<ReturnTypeService>(ReturnTypeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
