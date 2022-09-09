import { Test, TestingModule } from '@nestjs/testing';
import { OrderTypeController } from './order_type.controller';

describe('OrderTypeController', () => {
  let controller: OrderTypeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OrderTypeController],
    }).compile();

    controller = module.get<OrderTypeController>(OrderTypeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
