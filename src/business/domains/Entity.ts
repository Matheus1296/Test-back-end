import { validateSync, ValidationError } from 'class-validator';

// eslint-disable-next-line @typescript-eslint/ban-types
export abstract class Entity<P extends Object> {
  protected readonly props: P;

  protected constructor(props: P) {
    const validationErrors = validateSync(props);
    if (validationErrors.length) {
      throw validationErrors;
    }
    this.props = props;
  }

  validate(): ValidationError[] {
    return validateSync(this.props);
  }

  getValue(options?: { skipValidation: boolean }): P {
    const validationErrors: ValidationError[] = options?.skipValidation
      ? []
      : this.validate();
    if (!validationErrors.length) {
      return this.props;
    } else {
      throw validationErrors;
    }
  }

  setField<F extends keyof P>(field: F, newValue: P[F]): void {
    if (!this.props || this.props.hasOwnProperty(field)) {
      this.props[field] = newValue;
      this.validate();
    } else {
      throw new Error(
        `Property ${String(field)} is protected and cannot be changed.`,
      );
    }
  }

  valueOf(): P {
    return this.getValue();
  }
}
