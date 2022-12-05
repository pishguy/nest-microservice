import {CallHandler, ExecutionContext, Logger, NestInterceptor} from "@nestjs/common";
import {Observable, tap} from "rxjs";

export class LoggingInterceptor implements NestInterceptor {
    private logger: Logger = new Logger(LoggingInterceptor.name);

    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
        //this.logger.setContext(context.getClass().name);

        return next.handle().pipe(
            tap(() => {
                    this.logger.log('An event has occurred')
                },
                (error) => this.logger.error(`something bad happened: ${error.message}`),
                () => {
                }
            )
        );
    }


}