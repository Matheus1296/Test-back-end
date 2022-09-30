import { CustomerRedisRepositoryProvider } from './Customer/CustomerRedisRepositoryProvider';
import { Module } from '@nestjs/common';

@Module({
  providers: [CustomerRedisRepositoryProvider],
  exports: [CustomerRedisRepositoryProvider],
})
export class RedisRepositoriesModule {}
