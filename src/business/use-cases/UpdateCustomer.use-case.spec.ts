import * as uuid from 'uuid';
import { Customer } from '../domains/Customer.domains';
import { UpdateCustomerUseCase } from './UpdateCustomer.use-case';
import { ICustomerRepository } from '../../infrastructure/_interfaces/ICustomerRepository';

describe('UpdateCustomerUseCase', () => {
  it('should update a customer', async () => {
    const id = uuid.v4();
    const request: { id: string; document?: number; name?: string } = {
      document: 123456789,
      name: 'test test test',
      id,
    };

    const customerMock = new Customer({
      id,
      document: 987654321,
      name: 'test',
    });

    const customerMockUpdate = new Customer({
      document: 123456789,
      name: 'test test test',
      id,
    });

    const customerRepository: ICustomerRepository = {
      create: jest.fn(),
      findOne: jest.fn().mockImplementation(() => customerMock),
      updateOne: jest.fn().mockImplementation(() => customerMockUpdate),
    };

    const updateCustomerUseCase = new UpdateCustomerUseCase(customerRepository);
    const customer = await updateCustomerUseCase.run(request);

    expect(customer).toEqual(customerMockUpdate);
    expect(customerRepository.findOne).toHaveBeenCalledWith(id);
  });
});
