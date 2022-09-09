import { Body, Injectable, Param } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Order_Type } from './order_type.entity';

@Injectable()
export class OrderTypeService {
    constructor( @InjectRepository(Order_Type) private orderTypeRepository: Repository<Order_Type> ) {}

    findAll(): Promise<Order_Type[]> {
        return this.orderTypeRepository.find();
    }

    findOne(@Param('id') id: string): Promise<Order_Type> {
        return this.orderTypeRepository.findOneBy({id: parseInt(id, 10)});
    }

    async create(order_type: Order_Type) {
        return this.orderTypeRepository.save(order_type);
    }

    async update(@Body() order_type: Order_Type) {
        return this.orderTypeRepository.save(order_type);
    }
}
