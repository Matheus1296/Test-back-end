import { Customer } from '../domains/Customer.domains';

export class CreateCustomerUseCase {
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
