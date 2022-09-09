import { Body, Injectable, Param } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ReturnProcessProcedure } from './return_process_procedure.entity';

@Injectable()
export class ReturnProcessProcedureService {
    constructor( @InjectRepository(ReturnProcessProcedure) private returnProcessProcedureService: Repository<ReturnProcessProcedure> ) {}

    findAll(): Promise<ReturnProcessProcedure[]> {
        return this.returnProcessProcedureService.find();
    }

    findOne(@Param('id') id: string): Promise<ReturnProcessProcedure> {
        return this.returnProcessProcedureService.findOneBy({id: parseInt(id, 10)});
    }

    async create(returnProcessProcedure: ReturnProcessProcedure) {
        return this.returnProcessProcedureService.save(returnProcessProcedure);
    }

    async update(@Body() returnProcessProcedure: ReturnProcessProcedure) {
        return this.returnProcessProcedureService.save(returnProcessProcedure);
    }
}
