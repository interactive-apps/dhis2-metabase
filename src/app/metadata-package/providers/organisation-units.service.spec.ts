/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { OrganisationUnitsService } from './organisation-units.service';

describe('Service: OrganisationUnits', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OrganisationUnitsService]
    });
  });

  it('should ...', inject([OrganisationUnitsService], (service: OrganisationUnitsService) => {
    expect(service).toBeTruthy();
  }));
});
