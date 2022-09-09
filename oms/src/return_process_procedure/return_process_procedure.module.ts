import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReturnProcessProcedureController } from './return_process_procedure.controller';
import { ReturnProcessProcedure } from './return_process_procedure.entity';
import { ReturnProcessProcedureService } from './return_process_procedure.service';

@Module({
    imports: [TypeOrmModule.forFeature([ReturnProcessProcedure])],
    providers: [ReturnProcessProcedureService],
    controllers: [ReturnProcessProcedureController]
})
export class ReturnProcessProcedureModule {}
