import { Customer } from '../../business/domains/Customer.domains';

export const ICustomerRepositoryToken = Symbol('ICustomerRepositoryToken');

export interface ICustomerRepository {
  create(custumer: Customer): Promise<Customer>;

  findOne(id: string): Promise<Customer | null>;

  updateOne(customer: Customer): Promise<Customer>;
}
