import { Injectable } from "@nestjs/common";
import { BillingInformations } from "../dtos/billing-informations.dto";

@Injectable()
export class PaymentService {

    constructor() { }

    async pay(billingInformations: BillingInformations): Promise<boolean> {
        return true;
    }
}