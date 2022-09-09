import { Body, Injectable, Param } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Address } from './address.entity';

@Injectable()
export class AddressService {
    constructor( @InjectRepository(Address) private addressRepository: Repository<Address> ) {}

    findAll(): Promise<Address[]> {
        return this.addressRepository.find();
    }

    findOne(@Param('id') id: string): Promise<Address> {
        return this.addressRepository.findOneBy({id: parseInt(id, 10)});
    }

    async create(address: Address) {
        return this.addressRepository.save(address);
    }

    async update(@Body() address: Address) {
        return this.addressRepository.save(address);
    }
}
