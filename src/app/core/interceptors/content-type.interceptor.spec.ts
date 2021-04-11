import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { ContentTypeInterceptor } from './content-type.interceptor';
import { HttpMockService } from 'src/app/tests/mocks/http-mock.service';

describe('ContentTypeInterceptor', () => {
  let interceptor: ContentTypeInterceptor;
  let httpMock: HttpTestingController;
  let httpService: HttpMockService;

  let httpUrl: string;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        HttpMockService,
        ContentTypeInterceptor,
        {
          provide: HTTP_INTERCEPTORS,
          useClass: ContentTypeInterceptor,
          multi: true,
        },
      ],
    });

    interceptor = TestBed.inject(ContentTypeInterceptor);
    httpMock = TestBed.inject(HttpTestingController);
    httpService = TestBed.inject(HttpMockService);

    httpUrl = 'http://test-url';
  });

  it('should be created', () => {
    // Assert
    expect(interceptor).toBeTruthy();
  });

  it('should add "Content-Type" property', () => {
    // Arrange
    const contentTypeKey = 'Content-Type';

    // Act
    httpService.get(httpUrl).subscribe();
    const httpRequest = httpMock.expectOne(httpUrl);
    const contentType = httpRequest.request.headers.has(contentTypeKey);

    // Assert
    expect(contentType).toBeTrue();
  });

  it('should set Content-Type" property to "application/json"', () => {
    // Arrange
    const contentTypeKey = 'Content-Type';
    const applicationJson = 'application/json';

    // Act
    httpService.get(httpUrl).subscribe();
    const httpRequest = httpMock.expectOne(httpUrl);
    const contentType = httpRequest.request.headers.get(contentTypeKey);

    // Assert
    expect(contentType).toBe(applicationJson);
  });
});
