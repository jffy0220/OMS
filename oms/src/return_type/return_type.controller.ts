import { Body, Controller, Get, Post, Param, Put } from '@nestjs/common';
import { ReturnType } from './return_type.entity';
import { ReturnTypeService } from './return_type.service';

@Controller('return-type')
export class ReturnTypeController {
    constructor(private returnTypeService: ReturnTypeService) {}

    @Get()
    async findAll(): Promise<ReturnType[]> {
        return this.returnTypeService.findAll()
    }

    @Get()
    async findOne(@Param('id') id: string): Promise<ReturnType> {
        return this.returnTypeService.findOne(id);
    }

    @Post()
    create(@Body() returnType: ReturnType) {
        return this.returnTypeService.create(returnType);
    }

    @Put()
    update(@Body() returnType: ReturnType) {
        return this.returnTypeService.update(returnType);
    }
}
