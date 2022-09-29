import { ICustomerRepository } from '../../infrastructure/_interfaces/ICustomerRepository';
import * as uuid from 'uuid';
import { Customer } from '../domains/Customer.domains';
import { FindCustomerUseCase } from './FindCustomer.use-case';

describe('FindCustomerUseCase', () => {
  it('should search for a customer ', async () => {
    const id = uuid.v4();
    const customerMock = new Customer({
      id,
      document: 123456789,
      name: 'test test test',
    });

    const customerRepository: ICustomerRepository = {
      create: jest.fn(),
      findOne: jest.fn().mockImplementation(() => customerMock),
      updateOne: jest.fn(),
    };

    const request: { id: string } = {
      id,
    };
    const findCustomerUseCase = new FindCustomerUseCase(customerRepository);
    const customer = await findCustomerUseCase.run(request);

    expect(customer).toEqual(customerMock);
    expect(customerRepository.findOne).toHaveBeenCalledWith(id);
  });
});
