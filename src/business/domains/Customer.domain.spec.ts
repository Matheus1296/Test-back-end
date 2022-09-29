import { Customer, CustomerProps } from './Customer.domains';
import * as uuid from 'uuid';

describe('Disciplina', () => {
  let customer: Customer;
  const props: CustomerProps = {
    document: 123456789,
    name: 'test',
    id: uuid.v4(),
  };
  Object.freeze(props);

  beforeEach(() => {
    customer = new Customer(props);
  });

  it('should validate that a course has all the correct parameters.', () => {
    expect(customer.validate().length).toBe(0);
    expect(customer.getValue()).toEqual(props);
  });
});
