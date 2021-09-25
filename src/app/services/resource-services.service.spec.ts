import { TestBed } from '@angular/core/testing';

import { ResourceServicesService } from './resource-services.service';

describe('ResourceServicesService', () => {
  let service: ResourceServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResourceServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
