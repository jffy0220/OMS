import { Test, TestingModule } from '@nestjs/testing';
import { ReturnProcessProcedureService } from './return_process_procedure.service';

describe('ReturnProcessProcedureService', () => {
  let service: ReturnProcessProcedureService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ReturnProcessProcedureService],
    }).compile();

    service = module.get<ReturnProcessProcedureService>(ReturnProcessProcedureService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
