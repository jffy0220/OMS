import { Body, Controller, Get, Post, Param, Put } from '@nestjs/common';
import { OrderTypeStatus } from './order_type_status.entity';
import { OrderTypeStatusService } from './order_type_status.service';

@Controller('order-type-status')
export class OrderTypeStatusController {
    constructor(private orderTypeStatusService: OrderTypeStatusService) {}

    @Get()
    async findAll(): Promise<OrderTypeStatus[]> {
        return this.orderTypeStatusService.findAll()
    }

    @Get(':id')
    async findOne(@Param('id') id: string): Promise<OrderTypeStatus> {
        return this.orderTypeStatusService.findOne(id);
    }

    @Post()
    create(@Body() order: OrderTypeStatus) {
        return this.orderTypeStatusService.create(order);
    }

    @Put()
    update(@Body() order: OrderTypeStatus) {
        return this.orderTypeStatusService.update(order);
    }
}
