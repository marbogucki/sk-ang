import { HttpErrorResponse, HttpHandler, HttpRequest, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { throwError } from 'rxjs';
import { ErrorInterceptor } from './error.interceptor';

describe('ErrorInterceptor', () => {
  let interceptor: ErrorInterceptor;
  let requestSpy: jasmine.SpyObj<HttpRequest<unknown>>;
  let nextSpy: jasmine.SpyObj<HttpHandler>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        ErrorInterceptor,
        {
          provide: HTTP_INTERCEPTORS,
          useClass: ErrorInterceptor,
          multi: true,
        },
      ],
    });

    interceptor = TestBed.inject(ErrorInterceptor);
    requestSpy = jasmine.createSpyObj('HttpRequest', ['']) as jasmine.SpyObj<HttpRequest<unknown>>;
    nextSpy = jasmine.createSpyObj('HttpHandler', ['handle']) as jasmine.SpyObj<HttpHandler>;
  });

  it('should be created', () => {
    // Assert
    expect(interceptor).toBeTruthy();
  });

  it('should return error "Something bad happened; please try again later."', () => {
    // Arrange
    const errorMessage = 'Something bad happened; please try again later.';

    // Acct
    nextSpy.handle.and.returnValue(throwError({ status: 404, message: 'Not Found' }));

    interceptor.intercept(requestSpy, nextSpy).subscribe(
      () => fail(''),
      (error: HttpErrorResponse) => {
        // Assert
        expect(error.message).toBe(errorMessage);
      }
    );
  });

  it('should return 404 code when status = 404', () => {
    // Arrange
    const statusCode = 404;

    // Acct
    nextSpy.handle.and.returnValue(throwError({ status: statusCode, message: 'Not Found' }));

    interceptor.intercept(requestSpy, nextSpy).subscribe(
      () => fail(''),
      (error: HttpErrorResponse) => {
        // Assert
        expect(error.status).toBe(statusCode);
      }
    );
  });

  it('should return error "Backend returned code 404\nMessage: Not Found" for status = 404 and message = "Not Found"', () => {
    // Arrange
    const statusCode = 404;
    const message = 'Not Found';
    const errorMessage = 'Backend returned code 404\nMessage: Not Found';

    // Acct
    nextSpy.handle.and.returnValue(throwError({ status: statusCode, message }));

    interceptor.intercept(requestSpy, nextSpy).subscribe(
      () => fail(''),
      (error: HttpErrorResponse & { errorMessage: string }) => {
        // Assert
        expect(error.errorMessage).toBe(errorMessage);
      }
    );
  });
});
