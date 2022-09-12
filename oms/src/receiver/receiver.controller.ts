import { Body, Controller, Get, Post, Param, Put } from '@nestjs/common';
import { Receiver } from './receiver.entity';
import { ReceiverService } from './receiver.service';

@Controller('receiver')
export class ReceiverController {
    constructor(private receiverService: ReceiverService) {}

    @Get()
    async findAll(): Promise<Receiver[]> {
        return this.receiverService.findAll()
    }

    @Get(':id')
    async findOne(@Param('id') id: string): Promise<Receiver> {
        return this.receiverService.findOne(id);
    }

    @Post()
    create(@Body() receiver: Receiver) {
        return this.receiverService.create(receiver);
    }

    @Put()
    update(@Body() receiver: Receiver) {
        return this.receiverService.update(receiver);
    }
}
