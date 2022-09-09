import { Test, TestingModule } from '@nestjs/testing';
import { ReturnTypeController } from './return_type.controller';

describe('ReturnTypeController', () => {
  let controller: ReturnTypeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ReturnTypeController],
    }).compile();

    controller = module.get<ReturnTypeController>(ReturnTypeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
