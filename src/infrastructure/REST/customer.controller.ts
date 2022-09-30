import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { CreateCustomerUseCase } from '../../business/use-cases/CreateCustomer.use-case';
import { FindCustomerUseCase } from '../../business/use-cases/FindCustomer.use-case';
import { UpdateCustomerUseCase } from '../../business/use-cases/UpdateCustomer.use-case';
import * as uuid from 'uuid';
import { Customer } from '../../business/domains/Customer.domains';

@Controller('customers')
export class CustomerController {
  constructor(
    private readonly createCustomerUseCase: CreateCustomerUseCase,
    private readonly findCustomerUseCase: FindCustomerUseCase,
    private readonly updateCustomerUseCase: UpdateCustomerUseCase,
  ) {}

  @Post()
  async index(
    @Body() { document, name }: { document: number; name: string },
  ): Promise<Customer> {
    const id = uuid.v4();

    return await this.createCustomerUseCase.run({
      id,
      document,
      name,
    });
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Customer> {
    return this.findCustomerUseCase.run({ id });
  }

  @Put(':id')
  async updateOne(
    @Body() { document, name }: { document: number; name: string },
    @Param('id') id: string,
  ): Promise<Customer> {
    return await this.updateCustomerUseCase.run({
      id,
      document,
      name,
    });
  }
}
