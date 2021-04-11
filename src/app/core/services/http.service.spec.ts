import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('HttpService', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  let urlApi: string;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });

    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);

    urlApi = 'http://test-api-url/';
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should return correct url', () => {
    // Arrange
    const data = null;

    // Act
    httpClient.get(urlApi).subscribe();
    const req = httpTestingController.expectOne(urlApi);

    // Assert
    expect(req.request.url).toEqual(urlApi);
    req.flush(data);
  });

  describe('get', () => {
    it('should return request method equals "GET"', () => {
      // Arrange
      const GET_METHOD = 'GET';
      const data = null;

      // Act
      httpClient.get(urlApi).subscribe();
      const req = httpTestingController.expectOne(urlApi);

      // Assert
      expect(req.request.method).toEqual(GET_METHOD);
      req.flush(data);
    });

    it('should fetch correct data', () => {
      // Arrange
      const data = {
        name: 'Marek',
        age: 26,
      };

      // Act
      httpClient.get(urlApi).subscribe((result) => {
        // Assert
        expect(result).toEqual(data);
      });
      const req = httpTestingController.expectOne(urlApi);
      req.flush(data);
    });

    it('should return error message for Client Error', () => {
      // Arrange
      const errorMessage = '404 - something went wrong';
      const errorCode = 404;

      // Act
      httpClient.get(urlApi).subscribe(
        () => fail('fail data'),
        (error: HttpErrorResponse) => {
          // Assert
          expect(error.error).toEqual(errorMessage, 'message');
        }
      );

      const req = httpTestingController.expectOne(urlApi);
      req.flush(errorMessage, { status: errorCode, statusText: 'Not Found' });
    });

    it('should return 404 code for Client Error', () => {
      // Arrange
      const errorCode = 404;

      // Act
      httpClient.get(urlApi).subscribe(
        () => fail('should have failed with the 404 error'),
        (error: HttpErrorResponse) => {
          // Assert
          expect(error.status).toEqual(errorCode, 'statusCode');
        }
      );

      const req = httpTestingController.expectOne(urlApi);
      req.flush(null, { status: errorCode, statusText: 'Not Found' });
    });

    it('should return network error', () => {
      // Arrange
      const errorMessage = 'Network error';

      // Act
      httpClient.get(urlApi).subscribe(
        () => fail('should have failed with the network error'),
        (error: HttpErrorResponse) => {
          // Assert
          expect((error.error as HttpErrorResponse).message).toEqual(errorMessage);
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
      // Arrange
      const DELETE_METHOD = 'DELETE';
      const data = null;

      // Act
      httpClient.delete(urlApi).subscribe();
      const req = httpTestingController.expectOne(urlApi);

      // Assert
      expect(req.request.method).toEqual(DELETE_METHOD);
      req.flush(data);
    });

    it('should remove correct data', () => {
      // Arrange
      const itemId = 5;

      // Act
      httpClient.delete(urlApi).subscribe((result) => {
        // Assert
        expect(result).toBe(itemId);
      });
      const req = httpTestingController.expectOne(urlApi);

      req.flush(itemId);
    });

    it('should return error message for Client Error', () => {
      // Arrange
      const errorMessage = '404 - something went wrong';
      const errorCode = 404;

      // Act
      httpClient.delete(urlApi).subscribe(
        () => fail('fail data'),
        (error: HttpErrorResponse) => {
          // Assert
          expect(error.error).toEqual(errorMessage, 'message');
        }
      );

      const req = httpTestingController.expectOne(urlApi);
      req.flush(errorMessage, { status: errorCode, statusText: 'Not Found' });
    });

    it('should return network error', () => {
      // Arrange
      const errorMessage = 'Network error';

      // Act
      httpClient.delete(urlApi).subscribe(
        () => fail('should have failed with the network error'),
        (error: HttpErrorResponse) => {
          // Assert
          expect((error.error as HttpErrorResponse).message).toEqual(errorMessage);
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
