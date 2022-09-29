import { Customer } from '../../business/domains/Customer.domains';

export const ICustomerRepositoryToken = Symbol('ICustomerRepositoryToken');

export interface ICustomerRepository {
  create(custumer: Customer): Promise<Customer>;
}
