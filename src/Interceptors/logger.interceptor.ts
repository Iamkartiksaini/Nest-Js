import { CallHandler, ExecutionContext, Injectable, NestInterceptor, Res } from "@nestjs/common";
import { map, Observable, tap } from "rxjs";

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
        const ctx = context.switchToHttp();         // Switch to HTTP context (like Express)
        const { getRequest, getResponse } = ctx
        
        const requestId = Date.now().toString();

        return next.handle().pipe(
            map((data) => {
                // Optionally add it to the response body
                return {
                    requestId,
                    data,
                };
            }),
        );
    }
}
