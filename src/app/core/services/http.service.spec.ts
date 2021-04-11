import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('HttpService', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  let urlApi: string;
  let data: {
    name: string;
    age: number;
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });

    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);

    urlApi = 'http://test-api-url/';
    data = null;
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should return correct url', () => {
    httpClient.get(urlApi).subscribe();
    const req = httpTestingController.expectOne(urlApi);

    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    expect(req.request.url).toEqual(urlApi);
    req.flush(data);
  });

  describe('get', () => {
    it('should return request method equals "GET"', () => {
      const GET_METHOD = 'GET';

      httpClient.get(urlApi).subscribe();
      const req = httpTestingController.expectOne(urlApi);

      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      expect(req.request.method).toEqual(GET_METHOD);
      req.flush(data);
    });

    it('should fetch correct data', () => {
      data = {
        name: 'Marek',
        age: 26,
      };

      httpClient.get(urlApi).subscribe((result) => {
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        expect(result).toEqual(data);
      });
      const req = httpTestingController.expectOne(urlApi);
      req.flush(data);
    });

    it('should return error message for Client Error', () => {
      const errorMessage = '404 - something went wrong';
      const errorCode = 404;

      httpClient.get(urlApi).subscribe(
        () => fail('fail data'),
        (error: HttpErrorResponse) => {
          // eslint-disable-next-line @typescript-eslint/no-floating-promises
          expect(error.error).toEqual(errorMessage, 'message');
        }
      );

      const req = httpTestingController.expectOne(urlApi);
      req.flush(errorMessage, { status: errorCode, statusText: 'Not Found' });
    });

    it('should return 404 code for Client Error', () => {
      const errorCode = 404;

      httpClient.get(urlApi).subscribe(
        () => fail('should have failed with the 404 error'),
        (error: HttpErrorResponse) => {
          // eslint-disable-next-line @typescript-eslint/no-floating-promises
          expect(error.status).toEqual(errorCode, 'statusCode');
        }
      );

      const req = httpTestingController.expectOne(urlApi);
      req.flush(null, { status: errorCode, statusText: 'Not Found' });
    });

    it('should return network error', () => {
      const errorMessage = 'Network error';

      httpClient.get(urlApi).subscribe(
        () => fail('should have failed with the network error'),
        (error: HttpErrorResponse) => {
          // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-floating-promises
          expect(error.error.message).toEqual(errorMessage);
        }
      );

      const req = httpTestingController.expectOne(urlApi);
      const mockError = new ErrorEvent('Network error', {
        message: errorMessage,
      });
      req.error(mockError);
    });
  });

  describe('delete', () => {
    it('should return request method equals "DELETE"', () => {
      const DELETE_METHOD = 'DELETE';

      httpClient.delete(urlApi).subscribe();
      const req = httpTestingController.expectOne(urlApi);

      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      expect(req.request.method).toEqual(DELETE_METHOD);
      req.flush(data);
    });

    it('should remove correct data', () => {
      const itemId = 5;

      httpClient.delete(urlApi).subscribe((result) => {
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        expect(result).toBe(itemId);
      });
      const req = httpTestingController.expectOne(urlApi);

      req.flush(itemId);
    });

    it('should return error message for Client Error', () => {
      const errorMessage = '404 - something went wrong';
      const errorCode = 404;

      httpClient.delete(urlApi).subscribe(
        () => fail('fail data'),
        (error: HttpErrorResponse) => {
          // eslint-disable-next-line @typescript-eslint/no-floating-promises
          expect(error.error).toEqual(errorMessage, 'message');
        }
      );

      const req = httpTestingController.expectOne(urlApi);
      req.flush(errorMessage, { status: errorCode, statusText: 'Not Found' });
    });

    it('should return network error', () => {
      const errorMessage = 'Network error';

      httpClient.delete(urlApi).subscribe(
        () => fail('should have failed with the network error'),
        (error: HttpErrorResponse) => {
          // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-floating-promises
          expect(error.error.message).toEqual(errorMessage);
        }
      );

      const req = httpTestingController.expectOne(urlApi);
      const mockError = new ErrorEvent('Network error', {
        message: errorMessage,
      });
      req.error(mockError);
    });
  });
});
