import { IsString, Length, IsInt, Min, Matches } from 'class-validator';

export class CreateProductDto {
    @IsString() @Length(3, 100)
    name: string;
    
    @Matches(/^PROD-\d{3}$/)
    code: string;

    @IsInt() @Min(0)
    price: number;
    
    @IsInt() @Min(0)
    stock: number;

}