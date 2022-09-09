import { Body, Injectable, Param } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { OrderLineItem } from './order_line_item.entity';

@Injectable()
export class OrderLineItemsService {
    constructor( @InjectRepository(OrderLineItem) private orderLineItemService: Repository<OrderLineItem> ) {}

    findAll(): Promise<OrderLineItem[]> {
        return this.orderLineItemService.find();
    }

    findOne(@Param('id') id: string): Promise<OrderLineItem> {
        return this.orderLineItemService.findOneBy({id: parseInt(id, 10)});
    }

    async create(orderLineItem: OrderLineItem) {
        return this.orderLineItemService.save(orderLineItem);
    }

    async update(@Body() orderLineItem: OrderLineItem) {
        return this.orderLineItemService.save(orderLineItem);
    }
}
