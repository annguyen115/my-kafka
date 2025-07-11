import { Controller, Post, Body } from '@nestjs/common';
import {KafkaProducerService} from "../kafka/kafka.service";

@Controller('orders')
export class OrderController {
    constructor(private readonly kafka: KafkaProducerService) {}

    @Post()
    async createOrder(@Body() body: any) {
        const order = {
            id: Date.now().toString(),
            product: body.product,
            userEmail: body.userEmail,
        };

        // Gửi event tới Kafka
        await this.kafka.send('order_created', order);

        return { message: 'Order created', order };
    }
}
