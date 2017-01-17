/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MetadataPackageService } from './metadata-package.service';

describe('Service: MetadataPackage', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MetadataPackageService]
    });
  });

  it('should ...', inject([MetadataPackageService], (service: MetadataPackageService) => {
    expect(service).toBeTruthy();
  }));
});
