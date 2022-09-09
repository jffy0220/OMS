import { Test, TestingModule } from '@nestjs/testing';
import { OrderTypeStatusService } from './order_type_status.service';

describe('OrderTypeStatusService', () => {
  let service: OrderTypeStatusService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OrderTypeStatusService],
    }).compile();

    service = module.get<OrderTypeStatusService>(OrderTypeStatusService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
