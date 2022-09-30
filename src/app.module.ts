import { Module } from '@nestjs/common';
import { RedisModule } from '@nestjs-modules/ioredis';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { CustomerController } from './infrastructure/REST/customer.controller';
import { UseCasesModule } from './business/use-cases.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '../.env',
      isGlobal: true,
    }),
    RedisModule.forRootAsync({
      inject: [ConfigService],
      useFactory: async (config: ConfigService) => ({
        config: {
          url: config.get<string>('REDIS_URL'),
          password: config.get<string>('REDIS_PASSWORD'),
        },
      }),
    }),
    UseCasesModule,
  ],
  controllers: [CustomerController],
})
export class AppModule {}
