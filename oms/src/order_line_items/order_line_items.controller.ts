import { Body, Controller, Get, Post, Param, Put } from '@nestjs/common';
import { OrderLineItem } from './order_line_item.entity';
import { OrderLineItemsService } from './order_line_items.service';

@Controller('order-line-items')
export class OrderLineItemsController {
    constructor(private orderLineItemService: OrderLineItemsService) {}

    @Get()
    async findAll(): Promise<OrderLineItem[]> {
        return this.orderLineItemService.findAll()
    }

    @Get(':id')
    async findOne(@Param('id') id: string): Promise<OrderLineItem> {
        return this.orderLineItemService.findOne(id);
    }

    @Post()
    create(@Body() orderLineItem: OrderLineItem) {
        return this.orderLineItemService.create(orderLineItem);
    }

    @Put()
    update(@Body() orderLineItem: OrderLineItem) {
        return this.orderLineItemService.update(orderLineItem);
    }
}
