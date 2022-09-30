import { ICustomerRepositoryToken } from '../../_interfaces/ICustomerRepository';
import { CustomerRedisRepository } from './CustomerRedisRepository';

export const CustomerRedisRepositoryProvider = {
  provide: ICustomerRepositoryToken,
  useClass: CustomerRedisRepository,
};
