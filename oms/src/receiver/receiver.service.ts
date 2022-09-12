import { Body, Injectable, Param } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Receiver } from './receiver.entity';

@Injectable()
export class ReceiverService {
    constructor( @InjectRepository(Receiver) private receiverRepository: Repository<Receiver> ) {}

    findAll(): Promise<Receiver[]> {
        return this.receiverRepository.find();
    }

    findOne(@Param('id') id: string): Promise<Receiver> {
        return this.receiverRepository.findOneBy({id: parseInt(id, 10)});
    }

    async create(receiver: Receiver) {
        return this.receiverRepository.save(receiver);
    }

    async update(@Body() receiver: Receiver) {
        return this.receiverRepository.save(receiver);
    }
}
