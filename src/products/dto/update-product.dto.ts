import { IsInt, IsOptional, IsString, Length, Min } from 'class-validator';

export class UpdateProductDto {
    @IsOptional()
    @IsString() @Length(3, 100)
    name: string;
    
    @IsOptional()
    @IsInt() @Min(0)
    price: number;
    
    @IsOptional()
    @IsInt() @Min(0)
    stock: number;
}