import { Body, Controller, Get, Post, Param, Put } from '@nestjs/common';
import { ReturnProcessProcedure } from './return_process_procedure.entity';
import { ReturnProcessProcedureService } from './return_process_procedure.service';

@Controller('return-process-procedure')
export class ReturnProcessProcedureController {
    constructor(private returnProcessProcedureService: ReturnProcessProcedureService) {}

    @Get()
    async findAll(): Promise<ReturnProcessProcedure[]> {
        return this.returnProcessProcedureService.findAll()
    }

    @Get(':id')
    async findOne(@Param('id') id: string): Promise<ReturnProcessProcedure> {
        return this.returnProcessProcedureService.findOne(id);
    }

    @Post()
    create(@Body() order: ReturnProcessProcedure) {
        return this.returnProcessProcedureService.create(order);
    }

    @Put()
    update(@Body() order: ReturnProcessProcedure) {
        return this.returnProcessProcedureService.update(order);
    }
}
