import { IsNumber, IsString, IsUUID, Length } from 'class-validator';
import { Entity } from './Entity';
import { plainToClass } from 'class-transformer';

export class Customer extends Entity<CustomerProps> {
  constructor(props: CustomerProps) {
    const customeProps = plainToClass(CustomerProps, props);
    super(customeProps);
  }
}

export class CustomerProps {
  @IsUUID()
  id: string;

  @IsNumber()
  document: number;

  @IsString()
  @Length(1)
  name: string;
}
