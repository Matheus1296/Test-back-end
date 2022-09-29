import { CreateCustomerUseCase } from './CreateCustomer.use-case';
import { Customer } from '../domains/Customer.domains';

describe('CreateCustomerUseCase', () => {
  it('should generate a new customer', () => {
    const customer = CreateCustomerUseCase.generateNewCustomer({
      document: 123456789,
      name: 'teste teste teste',
    });
    expect(customer).toBeInstanceOf(Customer);
  });
});
