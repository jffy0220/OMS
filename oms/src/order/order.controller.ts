import { Body, Controller, Get, Post, Param, Put } from '@nestjs/common';
import { CreateOrderDto } from './dto/createOrderDto.dto';
import { Order } from './order.interface';
import { OrderService } from './order.service';

@Controller('order')
export class OrderController {
    constructor(private orderService: OrderService) {}

    @Get()
    async findAll(): Promise<any[]> {
        return this.orderService.findAll()
    }

    @Get(':id')
    async findOne(@Param('id') id: string): Promise<any> {
        return this.orderService.findOne(id);
    }

    @Post()
    create(@Body() order: any) {
        return this.orderService.create(order);
    }

    @Put()
    update(@Body() order: any) {
        return this.orderService.update(order);
    }
}
