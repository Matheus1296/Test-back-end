import { Customer } from '../domains/Customer.domains';
import * as uuid from 'uuid';

export class CreateCustomerUseCase {
  static generateNewCustomer({
    document,
    name,
  }: {
    document: number;
    name: string;
  }): Customer {
    const id = uuid.v4();
    return new Customer({
      id,
      name,
      document,
    });
  }
}
