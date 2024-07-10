//RENAME THIS FILE WITH THE NAME OF YOUR MODULE
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';
import { PaymentController } from './controllers/payment.controller';
import { PaymentService } from './services/payment.service';

@Module({
    imports: [
        //CONFIG MODULE
        ConfigModule.forRoot({
            //load env parameters
            load: [() => ({

            })],
            validationSchema: Joi.object({

            })
        }),
    ],
    controllers: [PaymentController],
    providers: [PaymentService],
})
export class PaymentManager { }
