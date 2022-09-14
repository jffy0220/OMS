import { Body, Injectable, Param } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { OrderMessages } from './order_messages.entity';

@Injectable()
export class OrderMessagesService {
    constructor( @InjectRepository(OrderMessages) private orderMessagesService: Repository<OrderMessages> ) {}

    findAll(): Promise<OrderMessages[]> {
        return this.orderMessagesService.find();
    }

    findOne(@Param('id') id: string): Promise<OrderMessages> {
        return this.orderMessagesService.findOneBy({id: parseInt(id, 10)});
    }

    async create(orderMessages: OrderMessages) {
        return this.orderMessagesService.save(orderMessages);
    }

    async update(@Body() orderMessages: OrderMessages) {
        return this.orderMessagesService.save(orderMessages);
    }
}
