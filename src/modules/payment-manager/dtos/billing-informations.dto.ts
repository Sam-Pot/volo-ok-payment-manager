import { IsNumber, IsPositive, IsString, Length } from "class-validator";

export class BillingInformations {
    @IsString()
    cardHolderName!: string;

    @IsString()
    cardHolderSurname!: string;

    @IsNumber()
    expiryMonth!: number;

    @IsNumber()
    expiryYear!: number;

    @IsNumber()
    cvv!: number;

    @IsString()
    PAN!: string;

    @IsNumber()
    @IsPositive()
    cost!: number;
}