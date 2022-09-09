import { Body, Controller, Get, Post, Param, Put } from '@nestjs/common';
import { Customer } from './customer.entity';
import { CustomerService } from './customer.service';

@Controller('customer')
export class CustomerController {
    constructor(private customerService: CustomerService) {}

    @Get()
    async findAll(): Promise<Customer[]> {
        return this.customerService.findAll()
    }

    @Get(':id')
    async findOne(@Param('id') id: string): Promise<any> {
        return this.customerService.findOne(id);
    }

    @Post()
    create(@Body() customer: Customer) {
        return this.customerService.create(customer);
    }

    @Put()
    update(@Body() customer: Customer) {
        return this.customerService.update(customer);
    }
}
