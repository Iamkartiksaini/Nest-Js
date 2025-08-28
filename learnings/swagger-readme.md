In **NestJS**, decorators are a powerful feature that allows you to add metadata to classes and methods, making it easier to define routes, middleware, and other functionalities. When it comes to integrating **Swagger** with **NestJS**, several decorators are specifically designed to enhance API documentation. Here’s a breakdown of the key decorators used in this context:

## Key Swagger Decorators in NestJS

| **Decorator**                | **Purpose**                                                                                     |
|------------------------------|-------------------------------------------------------------------------------------------------|
| **@ApiTags()**               | Groups endpoints under a specific tag in the Swagger UI, making it easier to navigate.       |
| **@ApiOperation()**          | Describes a single operation (endpoint) in the API, including its summary and description.   |
| **@ApiResponse()**           | Specifies the possible responses for an endpoint, including status codes and response types.  |
| **@ApiParam()**              | Documents a route parameter, detailing its name, type, and whether it is required.            |
| **@ApiQuery()**              | Documents query parameters for a route, including their types and descriptions.               |
| **@ApiBody()**               | Describes the body of the request, including the expected schema and validation rules.        |
| **@ApiBearerAuth()**         | Indicates that the endpoint requires bearer token authentication.                              |
| **@ApiExcludeEndpoint()**    | Excludes a specific endpoint from the Swagger documentation.                                   |

## Examples of Using Decorators

### 1. Using @ApiTags
```typescript
import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('users')
@Controller('users')
export class UsersController {
  @Get()
  findAll() {
    // Logic to return all users
  }
}
```

### 2. Using @ApiOperation and @ApiResponse
```typescript
import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';

@Controller('users')
export class UsersController {
  @Get()
  @ApiOperation({ summary: 'Get all users' })
  @ApiResponse({ status: 200, description: 'Successful response' })
  @ApiResponse({ status: 404, description: 'Users not found' })
  findAll() {
    // Logic to return all users
  }
}
```

### 3. Using @ApiBody
```typescript
import { Controller, Post, Body } from '@nestjs/common';
import { ApiBody } from '@nestjs/swagger';

@Controller('users')
export class UsersController {
  @Post()
  @ApiBody({ type: CreateUserDto })
  create(@Body() createUserDto: CreateUserDto) {
    // Logic to create a new user
  }
}
```

These decorators help you create a well-documented API that is easy to understand and use. If you have any specific questions about how to implement these decorators or need further examples, let me know!