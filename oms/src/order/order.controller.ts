import { Body, Controller, Get, Post, Param, Put } from '@nestjs/common';
import { CreateOrderDto } from './dto/createOrderDto.dto';
import { Order } from './order.interface';
import { OrderService } from './order.service';

@Controller('order')
export class OrderController {
    constructor(private orderService: OrderService) {}

    @Get()
    async findAll(): Promise<Order[]> {
        return this.orderService.findAll()
    }

    @Get(':id')
    async findOne(@Param('id') id: string): Promise<Order> {
        return this.orderService.findOne(id);
    }

    @Post()
    create(@Body() order: Order) {
        return this.orderService.create(order);
    }

    @Put()
    update(@Body() order: Order) {
        return this.orderService.update(order);
    }
}
