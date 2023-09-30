
import { TestBed, inject } from '@angular/core/testing';
import { GenericHttpService } from './generic-http.service';
import { HttpClient } from '@angular/common/http';

describe('Service: GenericHttp', () => {
  let httpClientFake: any;

  beforeEach(() => {
    httpClientFake = jasmine.createSpyObj(HttpClient, ['get', 'patch', 'post', 'put', 'delete']);
    TestBed.configureTestingModule({
      providers: [GenericHttpService, {
        provide: HttpClient,
        useValue: httpClientFake
      }]
    });
  });

  it('should ...', inject([GenericHttpService], (service: GenericHttpService) => {
    expect(service).toBeTruthy();
  }));

  it('should call http get', inject([GenericHttpService], (service: GenericHttpService) => {
    service.get('teste');
    expect(httpClientFake.get).toHaveBeenCalled();
  }));

  it('should call http patch', inject([GenericHttpService], (service: GenericHttpService) => {
    service.patch('teste');
    expect(httpClientFake.patch).toHaveBeenCalled();
  }));

  it('should call http post', inject([GenericHttpService], (service: GenericHttpService) => {
    service.post('teste', {});
    expect(httpClientFake.post).toHaveBeenCalled();
  }));

  it('should call http put', inject([GenericHttpService], (service: GenericHttpService) => {
    service.put('teste');
    expect(httpClientFake.put).toHaveBeenCalled();
  }));

  it('should call http delete', inject([GenericHttpService], (service: GenericHttpService) => {
    service.delete('1');
    expect(httpClientFake.delete).toHaveBeenCalled();
  }));
});
