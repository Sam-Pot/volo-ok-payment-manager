import { IsBoolean } from "class-validator";

export class PaymentResponse {
    @IsBoolean()
    response!: boolean;
}