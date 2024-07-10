import { Metadata, ServerUnaryCall } from "@grpc/grpc-js";
import { Controller } from "@nestjs/common";
import { GrpcMethod } from "@nestjs/microservices";
import { PaymentService } from "../services/payment.service";
import { BillingInformations } from "../dtos/billing-informations.dto";
import { PaymentResponse } from "../dtos/payment-response.dto";

@Controller()
export class PaymentController {

    constructor(private readonly paymentService: PaymentService) { }

    @GrpcMethod('PaymentService', 'pay')
    async pay(billingInformations: BillingInformations, metadata: Metadata, call: ServerUnaryCall<BillingInformations, PaymentResponse>): Promise<PaymentResponse> {
        let paymentSuccessfull: boolean = await this.paymentService.pay(billingInformations);
        let response: PaymentResponse = {
            response: paymentSuccessfull
        };
        return response;
    }
}