import { Body, Injectable, Param } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { OrderTypeStatus } from './order_type_status.entity';

@Injectable()
export class OrderTypeStatusService {
    constructor( @InjectRepository(OrderTypeStatus) private orderTypeStatusRepository: Repository<OrderTypeStatus> ) {}

    findAll(): Promise<OrderTypeStatus[]> {
        return this.orderTypeStatusRepository.find();
    }

    findOne(@Param('id') id: string): Promise<OrderTypeStatus> {
        return this.orderTypeStatusRepository.findOneBy({id: parseInt(id, 10)});
    }

    async create(orderTypeStatus: OrderTypeStatus) {
        return this.orderTypeStatusRepository.save(orderTypeStatus);
    }

    async update(@Body() orderTypeStatus: OrderTypeStatus) {
        return this.orderTypeStatusRepository.save(orderTypeStatus);
    }
}
