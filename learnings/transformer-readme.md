## Advanced Use of `class-transformer`

`class-transformer` provides powerful features for transforming plain objects into class instances and vice versa. Here are some advanced use cases that demonstrate its capabilities, including custom transformation, nested objects, and handling arrays.

### Scenario
We'll create a scenario where we transform a plain object representing a user with nested address information and apply custom transformation logic.

---

### Step 1: Define DTOs with Custom Transformation

We'll define two classes: `AddressDto` and `UserDto`. The `UserDto` will include a custom transformation for the `fullName` property.

```typescript
import { Exclude, Expose, Transform } from 'class-transformer';

export class AddressDto {
  @Expose()
  street: string;

  @Expose()
  city: string;

  @Expose()
  country: string;
}

export class UserDto {
  @Expose()
  firstName: string;

  @Expose()
  lastName: string;

  @Transform(({ obj }) => `${obj.firstName} ${obj.lastName}`, { toClassOnly: true })
  fullName: string;

  @Exclude() // Exclude this property from transformation
  password: string;

  @Expose()
  address: AddressDto;
}
```

### Step 2: Transforming Plain Objects

Now, let's see how to transform a plain object into an instance of `UserDto` and how the custom transformation works.

```typescript
import { plainToClass } from 'class-transformer';

const userData = {
  firstName: 'John',
  lastName: 'Doe',
  password: 'secret',
  address: {
    street: '123 Main St',
    city: 'Anytown',
    country: 'USA',
  },
};

// Transforming the plain object to a class instance
const user = plainToClass(UserDto, userData); 
// use plainToInstance (recommanded) 

console.log(user);
// Output: UserDto { firstName: 'John', lastName: 'Doe', address: AddressDto { ... } }
console.log(user.fullName); // Output: John Doe
```

### Step 3: Transforming Back to Plain Object

You can also transform the class instance back to a plain object while respecting the `@Exclude()` decorator.

```typescript
import { classToPlain } from 'class-transformer';

const plainUser = classToPlain(user);
console.log(plainUser);
// Output: { firstName: 'John', lastName: 'Doe', address: { street: '123 Main St', city: 'Anytown', country: 'USA' } }
// Note: password is excluded
```

### Step 4: Handling Arrays of Objects

`class-transformer` can also handle arrays of objects. Here’s how to transform an array of users.

```typescript
const usersData = [
  {
    firstName: 'Alice',
    lastName: 'Smith',
    password: 'secret1',
    address: {
      street: '456 Elm St',
      city: 'Othertown',
      country: 'USA',
    },
  },
  {
    firstName: 'Bob',
    lastName: 'Johnson',
    password: 'secret2',
    address: {
      street: '789 Oak St',
      city: 'Sometown',
      country: 'USA',
    },
  },
];

// Transforming an array of plain objects to class instances
const users = plainToClass(UserDto, usersData);
console.log(users);
```

### Conclusion

This advanced use of `class-transformer` demonstrates how to implement custom transformations, handle nested objects, and manage arrays of data. By leveraging these features, you can create more complex and flexible data handling in your NestJS applications, ensuring that your data is structured and transformed as needed.


## Difference Between `plainToClass` and `plainToInstance` in `class-transformer`

In `class-transformer`, both `plainToClass` and `plainToInstance` are used to transform plain objects into class instances. However, there are some key differences between the two methods. 

### Comparison Table

| Feature                | `plainToClass`                          | `plainToInstance`                       |
|------------------------|-----------------------------------------|-----------------------------------------|
| **Version**            | Deprecated in favor of `plainToInstance` | Recommended for use in newer versions  |
| **Usage**              | Converts plain objects to class instances | Converts plain objects to class instances |
| **Type Safety**        | Less type-safe, as it may not enforce strict typing | More type-safe, as it enforces strict typing |
| **Return Type**        | Returns an instance of the specified class | Returns an instance of the specified class |
| **Error Handling**     | May not provide detailed error messages | Provides better error handling and messages |
| **Future Support**     | Not recommended for future use          | Actively supported and recommended      |

### Key Differences

1. **Deprecation**: 
   - **`plainToClass`** is deprecated and should not be used in new code. It is recommended to use **`plainToInstance`** instead.

2. **Type Safety**: 
   - **`plainToInstance`** provides better type safety, ensuring that the transformation adheres to the specified class structure.

3. **Error Handling**: 
   - **`plainToInstance`** offers improved error handling, making it easier to debug issues related to the transformation process.

### Example Usage

Here’s how you would use both methods, although it's advisable to use `plainToInstance`:

#### Using `plainToClass` (Deprecated)
```typescript
import { plainToClass } from 'class-transformer';

class User {
  name: string;
  age: number;
}

const userData = { name: 'John', age: 30 };
const user = plainToClass(User, userData);
console.log(user);
```

#### Using `plainToInstance` (Recommended)
```typescript
import { plainToInstance } from 'class-transformer';

class User {
  name: string;
  age: number;
}

const userData = { name: 'John', age: 30 };
const user = plainToInstance(User, userData);
console.log(user);
```

### Conclusion

In summary, **`plainToInstance`** is the preferred method for transforming plain objects into class instances in `class-transformer`. It offers better type safety, improved error handling, and is actively supported, while **`plainToClass`** is deprecated and should be avoided in new code.