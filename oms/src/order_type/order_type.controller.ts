import { Order_Type } from './order_type.entity';
import { OrderTypeService } from './order_type.service';
import { Body, Controller, Get, Post, Param, Put } from '@nestjs/common';

@Controller('order-type')
export class OrderTypeController {
    constructor(private orderTypeService: OrderTypeService) {}

    @Get()
    async findAll(): Promise<Order_Type[]> {
        return this.orderTypeService.findAll()
    }

    @Get(':id')
    async findOne(@Param('id') id: string): Promise<Order_Type> {
        return this.orderTypeService.findOne(id);
    }

    @Post()
    create(@Body() order_type: Order_Type) {
        return this.orderTypeService.create(order_type);
    }

    @Put()
    update(@Body() order_type: Order_Type) {
        return this.orderTypeService.update(order_type);
    }
}
