import { Body, Injectable, Param } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Address } from 'src/address/address.entity';
import { Repository } from 'typeorm';
import { Customer } from './customer.entity';

@Injectable()
export class CustomerService {
    constructor( @InjectRepository(Customer) private customerRepository: Repository<Customer> ) {}

    findAll(): Promise<Customer[]> {
        return this.customerRepository.find();
    }

    findOne(@Param('id') id: string): Promise<any> {
        return this.customerRepository.createQueryBuilder('customer')
        .innerJoinAndMapMany('customer.address', Address, 'address', 'customer.id = address.customer')
        .where('customer.id = :id', { id: id })
        .getMany();
    }

    async create(@Body() customer: Customer) {
        return this.customerRepository.save(customer);
    }

    async update(@Body() customer: Customer) {
        return this.customerRepository.save(customer);
    }
}
