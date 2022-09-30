import { ICustomerRepository } from '../../_interfaces/ICustomerRepository';
import { Customer } from '../../../business/domains/Customer.domains';
import { InjectRedis, Redis } from '@nestjs-modules/ioredis';

export class CustomerRedisRepository implements ICustomerRepository {
  constructor(@InjectRedis() private readonly redis: Redis) {}

  async create(customer: Customer): Promise<Customer> {
    const customerObject: { name: string; document: number } = {
      name: customer.getValue().name,
      document: customer.getValue().document,
    };
    await this.redis.hmset(`${customer.getValue().id}`, customerObject);

    const customerObjectRedis = await this.redis.hmget(
      `${customer.getValue().id}`,
      'name',
      'document',
    );
    return new Customer({
      id: customer.getValue().id,
      name: customerObjectRedis[0],
      document: parseInt(customerObjectRedis[1]),
    });
  }

  async findOne(id: string): Promise<Customer | null> {
    const customerObjectRedis = await this.redis.hmget(
      `${id}`,
      'name',
      'document',
    );
    if (customerObjectRedis.length > 0) {
      return new Customer({
        id: id,
        name: customerObjectRedis[0],
        document: parseInt(customerObjectRedis[1]),
      });
    }
    return null;
  }

  async updateOne(customer: Customer): Promise<Customer> {
    const customerObject: { name: string; document: number } = {
      name: customer.getValue().name,
      document: customer.getValue().document,
    };
    await this.redis.hmset(`${customer.getValue().id}`, customerObject);

    const customerObjectRedis = await this.redis.hmget(
      `${customer.getValue().id}`,
      'name',
      'document',
    );
    return new Customer({
      id: customer.getValue().id,
      name: customerObjectRedis[0],
      document: parseInt(customerObjectRedis[1]),
    });
  }
}
