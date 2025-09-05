In **NestJS**, decorators are a core part of the framework and are used extensively to define metadata and behavior for classes, methods, properties, and parameters. NestJS uses **TypeScript decorators** (based on the ES7 proposal) to enhance its modules, controllers, providers, and more.

Here's a comprehensive overview of **all the ways decorators are used in NestJS** (built-in, custom, and advanced):

---

## 🔹 1. **Class Decorators**

Used to define metadata for entire classes.

### ✅ Common Class Decorators:

| Decorator                                | Description                                               |
| ---------------------------------------- | --------------------------------------------------------- |
| `@Module()`                              | Declares a NestJS module.                                 |
| `@Controller()`                          | Marks a class as a controller with optional route prefix. |
| `@Injectable()`                          | Marks a class as a provider that can be injected.         |
| `@Global()`                              | Makes a module globally available.                        |
| `@Catch()`                               | Defines an exception filter.                              |
| `@UseFilters()`                          | Apply filters to controllers.                             |
| `@UseGuards()`                           | Apply guards globally at the controller level.            |
| `@UseInterceptors()`                     | Apply interceptors at the controller level.               |
| `@UsePipes()`                            | Apply pipes at the controller level.                      |
| `@SetMetadata()`                         | Assign custom metadata.                                   |
| `@Cron()` / `@Interval()` / `@Timeout()` | From `@nestjs/schedule` for task scheduling.              |

---

## 🔹 2. **Method Decorators**

Used to define behavior or metadata for individual methods in a class.

### ✅ Common Method Decorators:

| Decorator                                                  | Description                                       |
| ---------------------------------------------------------- | ------------------------------------------------- |
| `@Get()` / `@Post()` / `@Put()` / `@Delete()` / `@Patch()` | Define HTTP route handlers.                       |
| `@All()`                                                   | Handle all HTTP methods.                          |
| `@Head()` / `@Options()`                                   | Specific HTTP verbs.                              |
| `@UseGuards()`                                             | Apply guards at method level.                     |
| `@UseInterceptors()`                                       | Apply interceptors at method level.               |
| `@UseFilters()`                                            | Apply filters at method level.                    |
| `@UsePipes()`                                              | Apply pipes at method level.                      |
| `@SetMetadata()`                                           | Assign custom metadata.                           |
| `@Redirect()`                                              | Redirect response to another route or URL.        |
| `@Render()`                                                | Render a template view (used with view engine).   |
| `@Transaction()`                                           | From `@nestjs/typeorm` or other ORM integrations. |
| `@Cron()` / `@Interval()` / `@Timeout()`                   | Scheduled tasks.                                  |

---

## 🔹 3. **Parameter Decorators**

Used to inject request data into route handlers.

### ✅ Common Parameter Decorators:

| Decorator                              | Description                                                              |
| -------------------------------------- | ------------------------------------------------------------------------ |
| `@Param()`                             | Extract route parameters.                                                |
| `@Query()`                             | Extract query string parameters.                                         |
| `@Body()`                              | Extract request body.                                                    |
| `@Req()` / `@Request()`                | Access the entire request object.                                        |
| `@Res()` / `@Response()`               | Access the response object (discouraged for full platform independence). |
| `@Headers()`                           | Access specific request headers.                                         |
| `@Ip()`                                | Get requester's IP address.                                              |
| `@HostParam()`                         | Access hostname params.                                                  |
| `@Session()`                           | Access session object (when using session middleware).                   |
| `@UploadedFile()` / `@UploadedFiles()` | File upload decorators (with `@nestjs/platform-express`).                |
| `@User()`                              | Custom decorator to extract user info (common with `Passport`).          |

---

## 🔹 4. **Property Decorators**

Used for injecting dependencies or setting metadata on class properties.

### ✅ Common Property Decorators:

| Decorator        | Description                                                                            |
| ---------------- | -------------------------------------------------------------------------------------- |
| `@Inject()`      | Manual dependency injection.                                                           |
| `@Optional()`    | Marks injection as optional.                                                           |
| `@Client()`      | Microservice client proxy (deprecated in favor of `@Inject()`).                        |
| `@Value()`       | Used with config packages to inject config values.                                     |
| `@ConfigService` | Often injected via constructor, but could be used as property injection in rare cases. |

---

## 🔹 5. **Custom Decorators**

You can create your own decorators using `@SetMetadata` or standard TypeScript.

### ✅ Example: Custom Roles Decorator

```ts
// roles.decorator.ts
import { SetMetadata } from '@nestjs/common';

export const Roles = (...roles: string[]) => SetMetadata('roles', roles);
```

Then used in controller:

```ts
@UseGuards(RolesGuard)
@Roles('admin')
@Get()
findAll() { ... }
```

---

## 🔹 6. **Decorator Composition**

NestJS decorators can be **combined** using utility functions like:

```ts
import { applyDecorators, UseGuards, SetMetadata } from '@nestjs/common';

export function Auth(...roles: string[]) {
  return applyDecorators(
    SetMetadata('roles', roles),
    UseGuards(AuthGuard, RolesGuard),
  );
}
```

---

## 🔹 7. **Decorator Utilities & Metadata Reflection**

For advanced use cases:

* `Reflector` class from `@nestjs/core` can retrieve metadata from custom decorators.

Example usage in a guard:

```ts
const roles = this.reflector.get<string[]>('roles', context.getHandler());
```

---

## 🔹 8. **Third-party Decorators**

* `@Roles()` – Role-based access control
* `@Public()` – Custom decorator to skip guards
* `@Auth()` – Custom auth flow
* `@ApiTags()`, `@ApiOperation()` – From `@nestjs/swagger` for OpenAPI docs

---

## ✅ Summary Table

| Type          | Examples                                          |
| ------------- | ------------------------------------------------- |
| **Class**     | `@Controller`, `@Injectable`, `@Module`, `@Catch` |
| **Method**    | `@Get`, `@Post`, `@UseGuards`, `@Cron`            |
| **Parameter** | `@Param`, `@Query`, `@Body`, `@Req`, `@Headers`   |
| **Property**  | `@Inject`, `@Optional`, `@Client`                 |
| **Custom**    | `@Roles`, `@Auth`, `@Public`                      |
| **Utilities** | `@SetMetadata`, `Reflector`, `applyDecorators`    |

---

Would you like code examples for any specific decorator usage, or want help creating a custom decorator?
