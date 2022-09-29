import { Customer } from '../../business/domains/Customer.domains';

export interface ICustomerRepository {
  create(custumer: Customer): Promise<Customer>;
}
