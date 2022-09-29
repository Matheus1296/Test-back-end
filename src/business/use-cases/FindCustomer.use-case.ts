import { Inject, Injectable } from '@nestjs/common';
import {
  ICustomerRepository,
  ICustomerRepositoryToken,
} from '../../infrastructure/_interfaces/ICustomerRepository';
import { Customer } from '../domains/Customer.domains';

@Injectable()
export class FindCustomerUseCase {
  constructor(
    @Inject(ICustomerRepositoryToken)
    private readonly customerRepository: ICustomerRepository,
  ) {}

  async run(request: { id: string }): Promise<Customer> {
    return await this.customerRepository.findOne(request.id);
  }
}
