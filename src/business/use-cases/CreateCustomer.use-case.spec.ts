import { CreateCustomerUseCase } from './CreateCustomer.use-case';
import { Customer } from '../domains/Customer.domains';
import { ICustomerRepository } from '../../infrastructure/_interfaces/ICustomerRepository';
import { mock } from 'jest-mock-extended';
import * as uuid from 'uuid';

const repositorie: {
  customer: ICustomerRepository;
} = {
  customer: mock<ICustomerRepository>(),
};

describe('CreateCustomerUseCase', () => {
  it('should generate a new customer', () => {
    const id = uuid.v4();
    const customer = CreateCustomerUseCase.generateNewCustomer({
      id,
      document: 123456789,
      name: 'teste teste teste',
    });
    expect(customer).toBeInstanceOf(Customer);
  });

  it('should save a customer', async () => {
    const request: { document: number; name: string } = {
      document: 123456789,
      name: 'test test test',
    };
    const id = uuid.v4();
    await CreateCustomerUseCase.execute({ ...request, id });

    expect(repositorie.customer.create).toHaveBeenCalledWith(
      expect.any(Customer),
    );
    expect(repositorie.customer.create).toHaveBeenCalledWith({
      props: {
        document: 123456789,
        name: 'test test test',
        id: id,
      },
    });
  });
});
