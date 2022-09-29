import { Customer } from '../domains/Customer.domains';
import {
  ICustomerRepository,
  ICustomerRepositoryToken,
} from '../../infrastructure/_interfaces/ICustomerRepository';
import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class CreateCustomerUseCase {
  constructor(
    @Inject(ICustomerRepositoryToken)
    private readonly customerRepository: ICustomerRepository,
  ) {}

  async run(request: {
    document: number;
    name: string;
    id: string;
  }): Promise<Customer> {
    const customer = new Customer({
      id: request.id,
      document: request.document,
      name: request.name,
    });
    return await this.customerRepository.create(customer);
  }

  static generateNewCustomer({
    id,
    document,
    name,
  }: {
    id: string;
    document: number;
    name: string;
  }): Customer {
    return new Customer({
      id,
      name,
      document,
    });
  }
}
