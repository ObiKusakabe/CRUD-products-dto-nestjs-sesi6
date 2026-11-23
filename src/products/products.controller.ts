import {
  Controller,
  Get,
  Post,
  Param,
  ParseIntPipe,
  Body,
  Put,
  Delete,
  Patch,
} from "@nestjs/common";
import { Product } from "./product.interface";
import { CreateProductDto } from "./dto/create-product.dto";
import { ProductsService } from "./products.service";

@Controller("products")
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  findAll(): Product[] {
    return this.productsService.findAll();
  }
  @Get(":id")
  findOne(@Param("id", ParseIntPipe) id: number): Product {
    return this.productsService.findOne(id);
  }
  @Post()
  create(@Body() dto: CreateProductDto) {
    return this.productsService.create(dto);
  }

  @Put(":id")
  update(
    @Param("id", ParseIntPipe) id: number,
    @Body() body: Omit<Product, "id">,
  ) {
    return this.productsService.update(id, body);
  }

  @Patch(":id")
  patch(
    @Param("id", ParseIntPipe) id: number,
    @Body() body: Partial<Omit<Product, "id">>,
  ) {
    return this.productsService.patch(id, body);
  }

  @Delete(":id")
  remove(@Param("id", ParseIntPipe) id: number) {
    return this.productsService.remove(id);
  }
}
