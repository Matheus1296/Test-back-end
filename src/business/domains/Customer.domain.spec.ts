import { Customer, CustomerProps } from './Customer.domains';
import * as uuid from 'uuid';

describe('Customer', () => {
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

  describe('.name', () => {
    it('should give an error if it has no name.', () => {
      customer.setField('name', undefined as unknown as string);

      const validationErrors = customer.validate();
      expect(validationErrors).toEqual(
        expect.arrayContaining([
          expect.objectContaining({
            property: 'name',
          }),
        ]),
      );
      expect(() => customer.getValue()).toThrow();
    });

    it('should give an error if it is an empty string', () => {
      customer.setField('name', '');

      const validationErrors = customer.validate();
      expect(validationErrors).toEqual(
        expect.arrayContaining([
          expect.objectContaining({
            property: 'name',
          }),
        ]),
      );
      expect(() => customer.getValue()).toThrow();
    });
  });
});
