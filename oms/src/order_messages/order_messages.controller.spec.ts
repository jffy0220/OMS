import { Test, TestingModule } from '@nestjs/testing';
import { OrderMessagesController } from './order_messages.controller';

describe('OrderMessagesController', () => {
  let controller: OrderMessagesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OrderMessagesController],
    }).compile();

    controller = module.get<OrderMessagesController>(OrderMessagesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
