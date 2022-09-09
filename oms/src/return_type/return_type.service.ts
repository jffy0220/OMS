import { Body, Injectable, Param } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ReturnType } from './return_type.entity';

@Injectable()
export class ReturnTypeService {
    constructor( @InjectRepository(ReturnType) private returnTypeRepository: Repository<ReturnType> ) {}

    findAll(): Promise<ReturnType[]> {
        return this.returnTypeRepository.find();
    }

    findOne(@Param('id') id: string): Promise<ReturnType> {
        return this.returnTypeRepository.findOneBy({id: parseInt(id, 10)});
    }

    async create(returnType: ReturnType) {
        return this.returnTypeRepository.save(returnType);
    }

    async update(@Body() returnType: ReturnType) {
        return this.returnTypeRepository.save(returnType);
    }
}
