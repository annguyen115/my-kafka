import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller()
export class NotificationController {
    @MessagePattern('order_created')
    handleOrderCreated(@Payload() message: any) {
        console.log(`📧 Sending email to ${message.userEmail} for order ${message.id}`);
    }
}
