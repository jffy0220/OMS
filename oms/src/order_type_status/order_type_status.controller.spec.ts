import { Test, TestingModule } from '@nestjs/testing';
import { OrderTypeStatusController } from './order_type_status.controller';

describe('OrderTypeStatusController', () => {
  let controller: OrderTypeStatusController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OrderTypeStatusController],
    }).compile();

    controller = module.get<OrderTypeStatusController>(OrderTypeStatusController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
