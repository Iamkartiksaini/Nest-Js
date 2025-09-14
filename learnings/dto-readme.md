To fix the NestJS code for handling an array of nested objects, you need to ensure that the `@Type` decorator is applied correctly. The `@Type` decorator should not wrap the type in an array. Instead, it should directly reference the class type. Here's the corrected code:

```typescript
import { IsOptional, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { UpdateAddressDetailsDto } from './update-address-details.dto'; // Adjust the import path as necessary

export class YourDto {
  @IsOptional()
  @ValidateNested({ each: true }) // Ensure each item in the array is validated
  @Type(() => UpdateAddressDetailsDto) // Correctly reference the class type
  addressDetails?: UpdateAddressDetailsDto[];
}
```

### Key Changes:
- **`@ValidateNested({ each: true })`**: This option ensures that each item in the array is validated.
- **`@Type(() => UpdateAddressDetailsDto)`**: The type is referenced directly without wrapping it in an array.

This should resolve any issues with validating an array of nested DTOs in your NestJS application. 

### Debugging Tip:
If you encounter validation errors, ensure that the incoming data structure matches the expected format of `UpdateAddressDetailsDto`. You can log the incoming data to verify its structure.