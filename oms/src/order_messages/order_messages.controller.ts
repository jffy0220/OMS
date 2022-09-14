import { Body, Controller, Get, Post, Param, Put } from '@nestjs/common';
import { OrderMessages } from './order_messages.entity';
import { OrderMessagesService } from './order_messages.service';

@Controller('order-messages')
export class OrderMessagesController {
    constructor(private orderMessageService: OrderMessagesService) {}

    @Get()
    async findAll(): Promise<OrderMessages[]> {
        return this.orderMessageService.findAll()
    }

    @Get(':id')
    async findOne(@Param('id') id: string): Promise<OrderMessages> {
        return this.orderMessageService.findOne(id);
    }

    @Post()
    create(@Body() orderMessage: OrderMessages) {
        return this.orderMessageService.create(orderMessage);
    }

    @Put()
    update(@Body() orderMessage: OrderMessages) {
        return this.orderMessageService.update(orderMessage);
    }
}
