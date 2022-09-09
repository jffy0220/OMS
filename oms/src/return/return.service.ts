import { Body, Injectable, Param } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Return } from './return.entity';

@Injectable()
export class ReturnService {
    constructor( @InjectRepository(Return) private returnRepository: Repository<Return> ) {}

    findAll(): Promise<Return[]> {
        return this.returnRepository.find();
    }

    findOne(@Param('id') id: string): Promise<Return> {
        return this.returnRepository.findOneBy({id: parseInt(id, 10)});
    }

    async create(returns: Return) {
        return this.returnRepository.save(returns);
    }

    async update(@Body() returns: Return) {
        return this.returnRepository.save(returns);
    }
}
