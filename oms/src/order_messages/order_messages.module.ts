import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderMessagesController } from './order_messages.controller';
import { OrderMessages } from './order_messages.entity';
import { OrderMessagesService } from './order_messages.service';

@Module({
    imports: [TypeOrmModule.forFeature([OrderMessages])],
    providers: [OrderMessagesService],
    controllers: [OrderMessagesController]
})
export class OrderMessagesModule {}
