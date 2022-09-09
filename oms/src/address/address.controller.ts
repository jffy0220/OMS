import { Body, Controller, Get, Post, Param, Put } from '@nestjs/common';
import { Address } from './address.entity';
import { AddressService } from './address.service';

@Controller('address')
export class AddressController {
    constructor(private addressService: AddressService) {}

    @Get()
    async findAll(): Promise<Address[]> {
        return this.addressService.findAll()
    }

    @Get()
    async findOne(@Param('id') id: string): Promise<Address> {
        return this.addressService.findOne(id);
    }

    @Post()
    create(@Body() address: Address) {
        return this.addressService.create(address);
    }

    @Put()
    update(@Body() address: Address) {
        return this.addressService.update(address);
    }
}
