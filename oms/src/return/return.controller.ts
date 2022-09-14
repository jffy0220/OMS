import { Body, Controller, Get, Post, Param, Put } from '@nestjs/common';
import { Return } from './return.entity';
import { ReturnService } from './return.service';

@Controller('return')
export class ReturnController {
    constructor(private returnService: ReturnService) {}

    @Get()
    async findAll(): Promise<Return[]> {
        return this.returnService.findAll()
    }

    @Get(':id')
    async findOne(@Param('id') id: string): Promise<Return> {
        return this.returnService.findOne(id);
    }

    @Post()
    create(@Body() returns: Return) {
        return this.returnService.create(returns);
    }

    @Put()
    update(@Body() returns: Return) {
        return this.returnService.update(returns);
    }
}
