import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReceiverController } from './receiver.controller';
import { Receiver } from './receiver.entity';
import { ReceiverService } from './receiver.service';

@Module({
    imports: [TypeOrmModule.forFeature([Receiver])],
    providers: [ReceiverService],
    controllers: [ReceiverController]
})
export class ReceiverModule {}
