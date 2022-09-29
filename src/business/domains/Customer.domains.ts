import { IsNumber, IsString, IsUUID } from 'class-validator';
import { Entity } from './Entity';

export class Customer extends Entity<CustomerProps> {}

export class CustomerProps {
  @IsUUID()
  id: string;

  @IsNumber()
  document: number;

  @IsString()
  name: string;
}
