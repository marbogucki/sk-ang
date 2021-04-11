import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ContentTypeInterceptor } from './content-type.interceptor';
import { ErrorInterceptor } from './error.interceptor';

export const appInterceptors = [
  {
    provide: HTTP_INTERCEPTORS,
    useClass: ContentTypeInterceptor,
    multi: true,
  },
  {
    provide: HTTP_INTERCEPTORS,
    useClass: ErrorInterceptor,
    multi: true,
  },
];
