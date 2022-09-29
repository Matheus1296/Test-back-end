import { Inject, Injectable } from '@nestjs/common';
import {
  ICustomerRepository,
  ICustomerRepositoryToken,
} from '../../infrastructure/_interfaces/ICustomerRepository';
import { Customer } from '../domains/Customer.domains';

@Injectable()
export class UpdateCustomerUseCase {
  constructor(
    @Inject(ICustomerRepositoryToken)
    private readonly customerRepository: ICustomerRepository,
  ) {}

  async run(request: {
    id: string;
    document?: number;
    name?: string;
  }): Promise<Customer> {
    const customer = await this.customerRepository.findOne(request.id);

    if (request.document && request.document !== customer.getValue().document) {
      customer.setField('document', request.document);
    }

    if (request.name && request.name !== customer.getValue().name) {
      customer.setField('name', request.name);
    }

    return customer;
  }
}
