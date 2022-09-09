import { Test, TestingModule } from '@nestjs/testing';
import { ReturnProcessProcedureController } from './return_process_procedure.controller';

describe('ReturnProcessProcedureController', () => {
  let controller: ReturnProcessProcedureController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ReturnProcessProcedureController],
    }).compile();

    controller = module.get<ReturnProcessProcedureController>(ReturnProcessProcedureController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
