import { Module } from '@nestjs/common';
import {KafkaModule} from "../kafka/kafka.module";
import {OrderController} from "./order.controller";

@Module({
    imports: [KafkaModule],
    controllers: [OrderController],
    providers: [],
})
export class OrderModule {}
