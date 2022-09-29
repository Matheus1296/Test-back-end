import { Module } from '@nestjs/common';
import { CreateCustomerUseCase } from './use-cases/CreateCustomer.use-case';
import { FindCustomerUseCase } from './use-cases/FindCustomer.use-case';
import { UpdateCustomerUseCase } from './use-cases/UpdateCustomer.use-case';

@Module({
  providers: [
    CreateCustomerUseCase,
    FindCustomerUseCase,
    UpdateCustomerUseCase,
  ],
  exports: [CreateCustomerUseCase, FindCustomerUseCase, UpdateCustomerUseCase],
})
export class UseCasesModule {}
