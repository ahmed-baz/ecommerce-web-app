import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

import { CommonService } from 'src/app/services/common.service';
import { Country } from '../model/country';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  constructor(private commonService: CommonService<Country>) {}

  findCountryList() {
    return this.commonService.findList(
      `${environment.lookups_api_url}/findCountryList`
    );
  }
}
