import { Test, TestingModule } from '@nestjs/testing';
import { OrderMessagesService } from './order_messages.service';

describe('OrderMessagesService', () => {
  let service: OrderMessagesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OrderMessagesService],
    }).compile();

    service = module.get<OrderMessagesService>(OrderMessagesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
