import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {MetadataPackageService} from "../../../shared/providers/metadata-package.service";
import {MetadataPackage} from "../../../shared/models/metadata-package";
import {MetadataService} from "../../../shared/providers/metadata.service";
import {Metadata} from "../../../shared/models/metadata";
import {mergeAll} from "rxjs/operator/mergeAll";

@Component({
  selector: 'app-view-package',
  templateUrl: './view-package.component.html',
  styleUrls: ['./view-package.component.css']
})
export class ViewPackageComponent implements OnInit {

  public loadingPackage: boolean;
  public packageHasError: boolean;
  public loadingMetadata: boolean;
  public metadataHasError: boolean;
  public metadataPackage: MetadataPackage;
  public metadata: any;
  META: any;
  constructor(
    private route: ActivatedRoute,
    private metadataPackageService: MetadataPackageService,
    private metadataService: MetadataService
  ) {
    this.loadingPackage = this.loadingMetadata = true;
    this.packageHasError = this.metadataHasError = false;
  }

  ngOnInit() {
    this.META = {
      organisationUnits: [
        {
          id: "gOfQFn8TbKN",
          name: "Demoana",
          code: "gOfQFn8TbKN",
          shortName: "Demoana",
          openingDate: "1970-01-01"
        },
        {
          id: "KKFzPM8LoXs",
          name: "Demoland",
          code: "KKFzPM8LoXs",
          shortName: "Demoland",
          openingDate: "1970-01-01",
          parent: {
            id: "gOfQFn8TbKN",
            name: "Demoana",
            code: "gOfQFn8TbKN",
            created: "2015-02-28T12:00:56.527+0000",
            lastUpdated: "2015-02-28T12:00:56.900+0000",
            href: "https://do-training.datim.org/api/organisationUnits/gOfQFn8TbKN"
          }
        },
        {
          id: "L3L1p64KPdC",
          name: "Animal Region",
          code: "L3L1p64KPdC",
          shortName: "Animal Region",
          openingDate: "1970-01-01",
          parent: {
            id: "KKFzPM8LoXs",
            name: "Demoland",
            code: "KKFzPM8LoXs",
            created: "2015-02-28T12:00:56.527+0000",
            lastUpdated: "2015-02-28T12:00:57.260+0000",
            href: "https://do-training.datim.org/api/organisationUnits/KKFzPM8LoXs"
          }
        },
        {
          id: "LnGaK6y98gC",
          name: "Bird District",
          code: "LnGaK6y98gC",
          shortName: "Bird District",
          openingDate: "1970-01-01",
          parent: {
            id: "L3L1p64KPdC",
            name: "Animal Region",
            code: "L3L1p64KPdC",
            created: "2015-02-28T12:00:56.528+0000",
            lastUpdated: "2015-02-28T12:00:57.405+0000",
            href: "https://do-training.datim.org/api/organisationUnits/L3L1p64KPdC"
          }
        },
        {
          id: "HfiOUYEPgLK",
          name: "Cardinal Site",
          code: "HfiOUYEPgLK",
          shortName: "Cardinal Site",
          openingDate: "1970-01-01",
          parent: {
            id: "LnGaK6y98gC",
            name: "Bird District",
            code: "LnGaK6y98gC",
            created: "2015-02-28T12:00:56.528+0000",
            lastUpdated: "2015-03-24T10:51:01.380+0000",
            href: "https://do-training.datim.org/api/organisationUnits/LnGaK6y98gC"
          }
        },
        {
          id: "RQCy4nM3afc",
          name: "Crow Site",
          code: "RQCy4nM3afc",
          shortName: "Crow Site",
          openingDate: "1970-01-01",
          parent: {
            id: "LnGaK6y98gC",
            name: "Bird District",
            code: "LnGaK6y98gC",
            created: "2015-02-28T12:00:56.528+0000",
            lastUpdated: "2015-03-24T10:51:01.380+0000",
            href: "https://do-training.datim.org/api/organisationUnits/LnGaK6y98gC"
          }
        },
        {
          id: "qAjEo5sOF2g",
          name: "Hawk Site",
          code: "qAjEo5sOF2g",
          shortName: "Hawk Site",
          openingDate: "1970-01-01",
          parent: {
            id: "LnGaK6y98gC",
            name: "Bird District",
            code: "LnGaK6y98gC",
            created: "2015-02-28T12:00:56.528+0000",
            lastUpdated: "2015-03-24T10:51:01.380+0000",
            href: "https://do-training.datim.org/api/organisationUnits/LnGaK6y98gC"
          }
        },
        {
          id: "xx9pojqM2Wi",
          name: "Heron Site",
          code: "xx9pojqM2Wi",
          shortName: "Heron Site",
          openingDate: "1970-01-01",
          parent: {
            id: "LnGaK6y98gC",
            name: "Bird District",
            code: "LnGaK6y98gC",
            created: "2015-02-28T12:00:56.528+0000",
            lastUpdated: "2015-03-24T10:51:01.380+0000",
            href: "https://do-training.datim.org/api/organisationUnits/LnGaK6y98gC"
          }
        },
        {
          id: "N4TfJIX2bNK",
          name: "Ostrich Site",
          code: "N4TfJIX2bNK",
          shortName: "Ostrich Site",
          openingDate: "1970-01-01",
          parent: {
            id: "LnGaK6y98gC",
            name: "Bird District",
            code: "LnGaK6y98gC",
            created: "2015-02-28T12:00:56.528+0000",
            lastUpdated: "2015-03-24T10:51:01.380+0000",
            href: "https://do-training.datim.org/api/organisationUnits/LnGaK6y98gC"
          }
        },
        {
          id: "KW50XsixBZG",
          name: "Owl Site",
          code: "KW50XsixBZG",
          shortName: "Owl Site",
          openingDate: "1970-01-01",
          parent: {
            id: "LnGaK6y98gC",
            name: "Bird District",
            code: "LnGaK6y98gC",
            created: "2015-02-28T12:00:56.528+0000",
            lastUpdated: "2015-03-24T10:51:01.380+0000",
            href: "https://do-training.datim.org/api/organisationUnits/LnGaK6y98gC"
          }
        },
        {
          id: "yBhQt9Kr0gn",
          name: "Parrot Site",
          code: "yBhQt9Kr0gn",
          shortName: "Parrot Site",
          openingDate: "1970-01-01",
          parent: {
            id: "LnGaK6y98gC",
            name: "Bird District",
            code: "LnGaK6y98gC",
            created: "2015-02-28T12:00:56.528+0000",
            lastUpdated: "2015-03-24T10:51:01.380+0000",
            href: "https://do-training.datim.org/api/organisationUnits/LnGaK6y98gC"
          }
        },
        {
          id: "nzuw7Ts0XLd",
          name: "Partridge Site",
          code: "nzuw7Ts0XLd",
          shortName: "Partridge Site",
          openingDate: "1970-01-01",
          parent: {
            id: "LnGaK6y98gC",
            name: "Bird District",
            code: "LnGaK6y98gC",
            created: "2015-02-28T12:00:56.528+0000",
            lastUpdated: "2015-03-24T10:51:01.380+0000",
            href: "https://do-training.datim.org/api/organisationUnits/LnGaK6y98gC"
          }
        },
        {
          id: "LyYLDBdtVI8",
          name: "Peacock Site",
          code: "LyYLDBdtVI8",
          shortName: "Peacock Site",
          openingDate: "1970-01-01",
          parent: {
            id: "LnGaK6y98gC",
            name: "Bird District",
            code: "LnGaK6y98gC",
            created: "2015-02-28T12:00:56.528+0000",
            lastUpdated: "2015-03-24T10:51:01.380+0000",
            href: "https://do-training.datim.org/api/organisationUnits/LnGaK6y98gC"
          }
        },
        {
          id: "sXG1I0sazdQ",
          name: "Pheasant Site",
          code: "sXG1I0sazdQ",
          shortName: "Pheasant Site",
          openingDate: "1970-01-01",
          parent: {
            id: "LnGaK6y98gC",
            name: "Bird District",
            code: "LnGaK6y98gC",
            created: "2015-02-28T12:00:56.528+0000",
            lastUpdated: "2015-03-24T10:51:01.380+0000",
            href: "https://do-training.datim.org/api/organisationUnits/LnGaK6y98gC"
          }
        },
        {
          id: "pNzjRKHEpwZ",
          name: "Pigeon Site",
          code: "pNzjRKHEpwZ",
          shortName: "Pigeon Site",
          openingDate: "1970-01-01",
          parent: {
            id: "LnGaK6y98gC",
            name: "Bird District",
            code: "LnGaK6y98gC",
            created: "2015-02-28T12:00:56.528+0000",
            lastUpdated: "2015-03-24T10:51:01.380+0000",
            href: "https://do-training.datim.org/api/organisationUnits/LnGaK6y98gC"
          }
        },
        {
          id: "G6e02IPl9om",
          name: "Robin Site",
          code: "G6e02IPl9om",
          shortName: "Robin Site",
          openingDate: "1970-01-01",
          parent: {
            id: "LnGaK6y98gC",
            name: "Bird District",
            code: "LnGaK6y98gC",
            created: "2015-02-28T12:00:56.528+0000",
            lastUpdated: "2015-03-24T10:51:01.380+0000",
            href: "https://do-training.datim.org/api/organisationUnits/LnGaK6y98gC"
          }
        },
        {
          id: "lNK58EHUj1p",
          name: "Sparrow Site",
          code: "lNK58EHUj1p",
          shortName: "Sparrow Site",
          openingDate: "1970-01-01",
          parent: {
            id: "LnGaK6y98gC",
            name: "Bird District",
            code: "LnGaK6y98gC",
            created: "2015-02-28T12:00:56.528+0000",
            lastUpdated: "2015-03-24T10:51:01.380+0000",
            href: "https://do-training.datim.org/api/organisationUnits/LnGaK6y98gC"
          }
        },
        {
          id: "HHwBVnPURNE",
          name: "Stork Site",
          code: "HHwBVnPURNE",
          shortName: "Stork Site",
          openingDate: "1970-01-01",
          parent: {
            id: "LnGaK6y98gC",
            name: "Bird District",
            code: "LnGaK6y98gC",
            created: "2015-02-28T12:00:56.528+0000",
            lastUpdated: "2015-03-24T10:51:01.380+0000",
            href: "https://do-training.datim.org/api/organisationUnits/LnGaK6y98gC"
          }
        },
        {
          id: "cmbkvwQCrxN",
          name: "Woodpecker Site",
          code: "cmbkvwQCrxN",
          shortName: "Woodpecker Site",
          openingDate: "1970-01-01",
          parent: {
            id: "LnGaK6y98gC",
            name: "Bird District",
            code: "LnGaK6y98gC",
            created: "2015-02-28T12:00:56.528+0000",
            lastUpdated: "2015-03-24T10:51:01.380+0000",
            href: "https://do-training.datim.org/api/organisationUnits/LnGaK6y98gC"
          }
        },
        {
          id: "Wey6YcOnwa7",
          name: "Dog District",
          code: "Wey6YcOnwa7",
          shortName: "Dog District",
          openingDate: "1970-01-01",
          parent: {
            id: "L3L1p64KPdC",
            name: "Animal Region",
            code: "L3L1p64KPdC",
            created: "2015-02-28T12:00:56.528+0000",
            lastUpdated: "2015-02-28T12:00:57.405+0000",
            href: "https://do-training.datim.org/api/organisationUnits/L3L1p64KPdC"
          }
        },
        {
          id: "hkefSw1EVi0",
          name: "Beagle Site",
          code: "hkefSw1EVi0",
          shortName: "Beagle Site",
          openingDate: "1970-01-01",
          parent: {
            id: "Wey6YcOnwa7",
            name: "Dog District",
            code: "Wey6YcOnwa7",
            created: "2015-02-28T12:00:56.529+0000",
            lastUpdated: "2015-03-24T10:51:01.381+0000",
            href: "https://do-training.datim.org/api/organisationUnits/Wey6YcOnwa7"
          }
        },
        {
          id: "qjNl4VWICph",
          name: "Bulldog Site",
          code: "qjNl4VWICph",
          shortName: "Bulldog Site",
          openingDate: "1970-01-01",
          parent: {
            id: "Wey6YcOnwa7",
            name: "Dog District",
            code: "Wey6YcOnwa7",
            created: "2015-02-28T12:00:56.529+0000",
            lastUpdated: "2015-03-24T10:51:01.381+0000",
            href: "https://do-training.datim.org/api/organisationUnits/Wey6YcOnwa7"
          }
        },
        {
          id: "oUdX2BkI0ur",
          name: "Dalmatian Site",
          code: "oUdX2BkI0ur",
          shortName: "Dalmatian Site",
          openingDate: "1970-01-01",
          parent: {
            id: "Wey6YcOnwa7",
            name: "Dog District",
            code: "Wey6YcOnwa7",
            created: "2015-02-28T12:00:56.529+0000",
            lastUpdated: "2015-03-24T10:51:01.381+0000",
            href: "https://do-training.datim.org/api/organisationUnits/Wey6YcOnwa7"
          }
        },
        {
          id: "AB2a1UwbzC8",
          name: "Doberman Pinscher Site",
          code: "AB2a1UwbzC8",
          shortName: "Doberman Pinscher Site",
          openingDate: "1970-01-01",
          parent: {
            id: "Wey6YcOnwa7",
            name: "Dog District",
            code: "Wey6YcOnwa7",
            created: "2015-02-28T12:00:56.529+0000",
            lastUpdated: "2015-03-24T10:51:01.381+0000",
            href: "https://do-training.datim.org/api/organisationUnits/Wey6YcOnwa7"
          }
        },
        {
          id: "b28ZwHkKGJr",
          name: "Golden Retriever Site",
          code: "b28ZwHkKGJr",
          shortName: "Golden Retriever Site",
          openingDate: "1970-01-01",
          parent: {
            id: "Wey6YcOnwa7",
            name: "Dog District",
            code: "Wey6YcOnwa7",
            created: "2015-02-28T12:00:56.529+0000",
            lastUpdated: "2015-03-24T10:51:01.381+0000",
            href: "https://do-training.datim.org/api/organisationUnits/Wey6YcOnwa7"
          }
        },
        {
          id: "P9OBdevqPGo",
          name: "Great Dane Site",
          code: "P9OBdevqPGo",
          shortName: "Great Dane Site",
          openingDate: "1970-01-01",
          parent: {
            id: "Wey6YcOnwa7",
            name: "Dog District",
            code: "Wey6YcOnwa7",
            created: "2015-02-28T12:00:56.529+0000",
            lastUpdated: "2015-03-24T10:51:01.381+0000",
            href: "https://do-training.datim.org/api/organisationUnits/Wey6YcOnwa7"
          }
        },
        {
          id: "kMz9p20mBWl",
          name: "Greyhound Site",
          code: "kMz9p20mBWl",
          shortName: "Greyhound Site",
          openingDate: "1970-01-01",
          parent: {
            id: "Wey6YcOnwa7",
            name: "Dog District",
            code: "Wey6YcOnwa7",
            created: "2015-02-28T12:00:56.529+0000",
            lastUpdated: "2015-03-24T10:51:01.381+0000",
            href: "https://do-training.datim.org/api/organisationUnits/Wey6YcOnwa7"
          }
        },
        {
          id: "dhPa1AUBRKs",
          name: "Hound Site",
          code: "dhPa1AUBRKs",
          shortName: "Hound Site",
          openingDate: "1970-01-01",
          parent: {
            id: "Wey6YcOnwa7",
            name: "Dog District",
            code: "Wey6YcOnwa7",
            created: "2015-02-28T12:00:56.529+0000",
            lastUpdated: "2015-03-24T10:51:01.381+0000",
            href: "https://do-training.datim.org/api/organisationUnits/Wey6YcOnwa7"
          }
        },
        {
          id: "fTD1Y3F4MwB",
          name: "Husky Site",
          code: "fTD1Y3F4MwB",
          shortName: "Husky Site",
          openingDate: "1970-01-01",
          parent: {
            id: "Wey6YcOnwa7",
            name: "Dog District",
            code: "Wey6YcOnwa7",
            created: "2015-02-28T12:00:56.529+0000",
            lastUpdated: "2015-03-24T10:51:01.381+0000",
            href: "https://do-training.datim.org/api/organisationUnits/Wey6YcOnwa7"
          }
        },
        {
          id: "tGm3U4Ablfh",
          name: "Labrador Retriever Site",
          code: "tGm3U4Ablfh",
          shortName: "Labrador Retriever Site",
          openingDate: "1970-01-01",
          parent: {
            id: "Wey6YcOnwa7",
            name: "Dog District",
            code: "Wey6YcOnwa7",
            created: "2015-02-28T12:00:56.529+0000",
            lastUpdated: "2015-03-24T10:51:01.381+0000",
            href: "https://do-training.datim.org/api/organisationUnits/Wey6YcOnwa7"
          }
        },
        {
          id: "RMc2FehgumR",
          name: "Poodle Site",
          code: "RMc2FehgumR",
          shortName: "Poodle Site",
          openingDate: "1970-01-01",
          parent: {
            id: "Wey6YcOnwa7",
            name: "Dog District",
            code: "Wey6YcOnwa7",
            created: "2015-02-28T12:00:56.529+0000",
            lastUpdated: "2015-03-24T10:51:01.381+0000",
            href: "https://do-training.datim.org/api/organisationUnits/Wey6YcOnwa7"
          }
        },
        {
          id: "teEkqlLCxYa",
          name: "Pug Site",
          code: "teEkqlLCxYa",
          shortName: "Pug Site",
          openingDate: "1970-01-01",
          parent: {
            id: "Wey6YcOnwa7",
            name: "Dog District",
            code: "Wey6YcOnwa7",
            created: "2015-02-28T12:00:56.529+0000",
            lastUpdated: "2015-03-24T10:51:01.381+0000",
            href: "https://do-training.datim.org/api/organisationUnits/Wey6YcOnwa7"
          }
        },
        {
          id: "ezf9VwkYI3b",
          name: "Rottweiler Site",
          code: "ezf9VwkYI3b",
          shortName: "Rottweiler Site",
          openingDate: "1970-01-01",
          parent: {
            id: "Wey6YcOnwa7",
            name: "Dog District",
            code: "Wey6YcOnwa7",
            created: "2015-02-28T12:00:56.529+0000",
            lastUpdated: "2015-03-24T10:51:01.381+0000",
            href: "https://do-training.datim.org/api/organisationUnits/Wey6YcOnwa7"
          }
        },
        {
          id: "pNcQW9q1Gmz",
          name: "Shih-Tzu Site",
          code: "pNcQW9q1Gmz",
          shortName: "Shih-Tzu Site",
          openingDate: "1970-01-01",
          parent: {
            id: "Wey6YcOnwa7",
            name: "Dog District",
            code: "Wey6YcOnwa7",
            created: "2015-02-28T12:00:56.529+0000",
            lastUpdated: "2015-03-24T10:51:01.381+0000",
            href: "https://do-training.datim.org/api/organisationUnits/Wey6YcOnwa7"
          }
        },
        {
          id: "spOvV05GdUT",
          name: "Weimaraner Site",
          code: "spOvV05GdUT",
          shortName: "Weimaraner Site",
          openingDate: "1970-01-01",
          parent: {
            id: "Wey6YcOnwa7",
            name: "Dog District",
            code: "Wey6YcOnwa7",
            created: "2015-02-28T12:00:56.529+0000",
            lastUpdated: "2015-03-24T10:51:01.381+0000",
            href: "https://do-training.datim.org/api/organisationUnits/Wey6YcOnwa7"
          }
        },
        {
          id: "B5iyf6DXdIJ",
          name: "Fish District",
          code: "B5iyf6DXdIJ",
          shortName: "Fish District",
          openingDate: "1970-01-01",
          parent: {
            id: "L3L1p64KPdC",
            name: "Animal Region",
            code: "L3L1p64KPdC",
            created: "2015-02-28T12:00:56.528+0000",
            lastUpdated: "2015-02-28T12:00:57.405+0000",
            href: "https://do-training.datim.org/api/organisationUnits/L3L1p64KPdC"
          }
        },
        {
          id: "zPtGoJ4Wc2F",
          name: "Angelfish Site",
          code: "zPtGoJ4Wc2F",
          shortName: "Angelfish Site",
          openingDate: "1970-01-01",
          parent: {
            id: "B5iyf6DXdIJ",
            name: "Fish District",
            code: "B5iyf6DXdIJ",
            created: "2015-02-28T12:00:56.528+0000",
            lastUpdated: "2015-03-24T10:51:01.383+0000",
            href: "https://do-training.datim.org/api/organisationUnits/B5iyf6DXdIJ"
          }
        },
        {
          id: "tok86TwlizA",
          name: "Bass Site",
          code: "tok86TwlizA",
          shortName: "Bass Site",
          openingDate: "1970-01-01",
          parent: {
            id: "B5iyf6DXdIJ",
            name: "Fish District",
            code: "B5iyf6DXdIJ",
            created: "2015-02-28T12:00:56.528+0000",
            lastUpdated: "2015-03-24T10:51:01.383+0000",
            href: "https://do-training.datim.org/api/organisationUnits/B5iyf6DXdIJ"
          }
        },
        {
          id: "SLu9JjrZNVb",
          name: "Carp Site",
          code: "SLu9JjrZNVb",
          shortName: "Carp Site",
          openingDate: "1970-01-01",
          parent: {
            id: "B5iyf6DXdIJ",
            name: "Fish District",
            code: "B5iyf6DXdIJ",
            created: "2015-02-28T12:00:56.528+0000",
            lastUpdated: "2015-03-24T10:51:01.383+0000",
            href: "https://do-training.datim.org/api/organisationUnits/B5iyf6DXdIJ"
          }
        },
        {
          id: "Ipv34isCbRZ",
          name: "Catfish Site",
          code: "Ipv34isCbRZ",
          shortName: "Catfish Site",
          openingDate: "1970-01-01",
          parent: {
            id: "B5iyf6DXdIJ",
            name: "Fish District",
            code: "B5iyf6DXdIJ",
            created: "2015-02-28T12:00:56.528+0000",
            lastUpdated: "2015-03-24T10:51:01.383+0000",
            href: "https://do-training.datim.org/api/organisationUnits/B5iyf6DXdIJ"
          }
        },
        {
          id: "yUrdnoLSMVE",
          name: "Dory Site",
          code: "yUrdnoLSMVE",
          shortName: "Dory Site",
          openingDate: "1970-01-01",
          parent: {
            id: "B5iyf6DXdIJ",
            name: "Fish District",
            code: "B5iyf6DXdIJ",
            created: "2015-02-28T12:00:56.528+0000",
            lastUpdated: "2015-03-24T10:51:01.383+0000",
            href: "https://do-training.datim.org/api/organisationUnits/B5iyf6DXdIJ"
          }
        },
        {
          id: "S6ZmN5kMt0a",
          name: "Eel Site",
          code: "S6ZmN5kMt0a",
          shortName: "Eel Site",
          openingDate: "1970-01-01",
          parent: {
            id: "B5iyf6DXdIJ",
            name: "Fish District",
            code: "B5iyf6DXdIJ",
            created: "2015-02-28T12:00:56.528+0000",
            lastUpdated: "2015-03-24T10:51:01.383+0000",
            href: "https://do-training.datim.org/api/organisationUnits/B5iyf6DXdIJ"
          }
        },
        {
          id: "pVItuOSegQb",
          name: "Goldfish Site",
          code: "pVItuOSegQb",
          shortName: "Goldfish Site",
          openingDate: "1970-01-01",
          parent: {
            id: "B5iyf6DXdIJ",
            name: "Fish District",
            code: "B5iyf6DXdIJ",
            created: "2015-02-28T12:00:56.528+0000",
            lastUpdated: "2015-03-24T10:51:01.383+0000",
            href: "https://do-training.datim.org/api/organisationUnits/B5iyf6DXdIJ"
          }
        },
        {
          id: "tNHKvyuLzar",
          name: "Guppy Site",
          code: "tNHKvyuLzar",
          shortName: "Guppy Site",
          openingDate: "1970-01-01",
          parent: {
            id: "B5iyf6DXdIJ",
            name: "Fish District",
            code: "B5iyf6DXdIJ",
            created: "2015-02-28T12:00:56.528+0000",
            lastUpdated: "2015-03-24T10:51:01.383+0000",
            href: "https://do-training.datim.org/api/organisationUnits/B5iyf6DXdIJ"
          }
        },
        {
          id: "U9CgqkymMSN",
          name: "Minnow Site",
          code: "U9CgqkymMSN",
          shortName: "Minnow Site",
          openingDate: "1970-01-01",
          parent: {
            id: "B5iyf6DXdIJ",
            name: "Fish District",
            code: "B5iyf6DXdIJ",
            created: "2015-02-28T12:00:56.528+0000",
            lastUpdated: "2015-03-24T10:51:01.383+0000",
            href: "https://do-training.datim.org/api/organisationUnits/B5iyf6DXdIJ"
          }
        },
        {
          id: "wrxoB0sWF7n",
          name: "Perch Site",
          code: "wrxoB0sWF7n",
          shortName: "Perch Site",
          openingDate: "1970-01-01",
          parent: {
            id: "B5iyf6DXdIJ",
            name: "Fish District",
            code: "B5iyf6DXdIJ",
            created: "2015-02-28T12:00:56.528+0000",
            lastUpdated: "2015-03-24T10:51:01.383+0000",
            href: "https://do-training.datim.org/api/organisationUnits/B5iyf6DXdIJ"
          }
        },
        {
          id: "qrTKsIyJ3kU",
          name: "Piranha Site",
          code: "qrTKsIyJ3kU",
          shortName: "Piranha Site",
          openingDate: "1970-01-01",
          parent: {
            id: "B5iyf6DXdIJ",
            name: "Fish District",
            code: "B5iyf6DXdIJ",
            created: "2015-02-28T12:00:56.528+0000",
            lastUpdated: "2015-03-24T10:51:01.383+0000",
            href: "https://do-training.datim.org/api/organisationUnits/B5iyf6DXdIJ"
          }
        },
        {
          id: "wLmZ8aXyS3q",
          name: "Rainbowfish Site",
          code: "wLmZ8aXyS3q",
          shortName: "Rainbowfish Site",
          openingDate: "1970-01-01",
          parent: {
            id: "B5iyf6DXdIJ",
            name: "Fish District",
            code: "B5iyf6DXdIJ",
            created: "2015-02-28T12:00:56.528+0000",
            lastUpdated: "2015-03-24T10:51:01.383+0000",
            href: "https://do-training.datim.org/api/organisationUnits/B5iyf6DXdIJ"
          }
        },
        {
          id: "MdHwNQcp0I9",
          name: "Salmon Site",
          code: "MdHwNQcp0I9",
          shortName: "Salmon Site",
          openingDate: "1970-01-01",
          parent: {
            id: "B5iyf6DXdIJ",
            name: "Fish District",
            code: "B5iyf6DXdIJ",
            created: "2015-02-28T12:00:56.528+0000",
            lastUpdated: "2015-03-24T10:51:01.383+0000",
            href: "https://do-training.datim.org/api/organisationUnits/B5iyf6DXdIJ"
          }
        },
        {
          id: "xV7zFfsR803",
          name: "Shark Site",
          code: "xV7zFfsR803",
          shortName: "Shark Site",
          openingDate: "1970-01-01",
          parent: {
            id: "B5iyf6DXdIJ",
            name: "Fish District",
            code: "B5iyf6DXdIJ",
            created: "2015-02-28T12:00:56.528+0000",
            lastUpdated: "2015-03-24T10:51:01.383+0000",
            href: "https://do-training.datim.org/api/organisationUnits/B5iyf6DXdIJ"
          }
        },
        {
          id: "N6WsaNl7zqu",
          name: "Trout Site",
          code: "N6WsaNl7zqu",
          shortName: "Trout Site",
          openingDate: "1970-01-01",
          parent: {
            id: "B5iyf6DXdIJ",
            name: "Fish District",
            code: "B5iyf6DXdIJ",
            created: "2015-02-28T12:00:56.528+0000",
            lastUpdated: "2015-03-24T10:51:01.383+0000",
            href: "https://do-training.datim.org/api/organisationUnits/B5iyf6DXdIJ"
          }
        },
        {
          id: "hhUz4sucpId",
          name: "Insect District",
          code: "hhUz4sucpId",
          shortName: "Insect District",
          openingDate: "1970-01-01",
          parent: {
            id: "L3L1p64KPdC",
            name: "Animal Region",
            code: "L3L1p64KPdC",
            created: "2015-02-28T12:00:56.528+0000",
            lastUpdated: "2015-02-28T12:00:57.405+0000",
            href: "https://do-training.datim.org/api/organisationUnits/L3L1p64KPdC"
          }
        },
        {
          id: "akGxlFjV2Un",
          name: "Beetle Site",
          code: "akGxlFjV2Un",
          shortName: "Beetle Site",
          openingDate: "1970-01-01",
          parent: {
            id: "hhUz4sucpId",
            name: "Insect District",
            code: "hhUz4sucpId",
            created: "2015-02-28T12:00:56.529+0000",
            lastUpdated: "2015-03-24T10:51:01.382+0000",
            href: "https://do-training.datim.org/api/organisationUnits/hhUz4sucpId"
          }
        },
        {
          id: "FuaEoIZqlUk",
          name: "Butterfly Site",
          code: "FuaEoIZqlUk",
          shortName: "Butterfly Site",
          openingDate: "1970-01-01",
          parent: {
            id: "hhUz4sucpId",
            name: "Insect District",
            code: "hhUz4sucpId",
            created: "2015-02-28T12:00:56.529+0000",
            lastUpdated: "2015-03-24T10:51:01.382+0000",
            href: "https://do-training.datim.org/api/organisationUnits/hhUz4sucpId"
          }
        },
        {
          id: "HG3NDfXAKys",
          name: "Cicada Site",
          code: "HG3NDfXAKys",
          shortName: "Cicada Site",
          openingDate: "1970-01-01",
          parent: {
            id: "hhUz4sucpId",
            name: "Insect District",
            code: "hhUz4sucpId",
            created: "2015-02-28T12:00:56.529+0000",
            lastUpdated: "2015-03-24T10:51:01.382+0000",
            href: "https://do-training.datim.org/api/organisationUnits/hhUz4sucpId"
          }
        },
        {
          id: "IMXHsUVFd2i",
          name: "Cockroach Site",
          code: "IMXHsUVFd2i",
          shortName: "Cockroach Site",
          openingDate: "1970-01-01",
          parent: {
            id: "hhUz4sucpId",
            name: "Insect District",
            code: "hhUz4sucpId",
            created: "2015-02-28T12:00:56.529+0000",
            lastUpdated: "2015-03-24T10:51:01.382+0000",
            href: "https://do-training.datim.org/api/organisationUnits/hhUz4sucpId"
          }
        },
        {
          id: "YKxIGUdWz8L",
          name: "Cricket Site",
          code: "YKxIGUdWz8L",
          shortName: "Cricket Site",
          openingDate: "1970-01-01",
          parent: {
            id: "hhUz4sucpId",
            name: "Insect District",
            code: "hhUz4sucpId",
            created: "2015-02-28T12:00:56.529+0000",
            lastUpdated: "2015-03-24T10:51:01.382+0000",
            href: "https://do-training.datim.org/api/organisationUnits/hhUz4sucpId"
          }
        },
        {
          id: "SdJkUF0tsnC",
          name: "Fly Site",
          code: "SdJkUF0tsnC",
          shortName: "Fly Site",
          openingDate: "1970-01-01",
          parent: {
            id: "hhUz4sucpId",
            name: "Insect District",
            code: "hhUz4sucpId",
            created: "2015-02-28T12:00:56.529+0000",
            lastUpdated: "2015-03-24T10:51:01.382+0000",
            href: "https://do-training.datim.org/api/organisationUnits/hhUz4sucpId"
          }
        },
        {
          id: "hwoOfjaY9sT",
          name: "Grasshopper Site",
          code: "hwoOfjaY9sT",
          shortName: "Grasshopper Site",
          openingDate: "1970-01-01",
          parent: {
            id: "hhUz4sucpId",
            name: "Insect District",
            code: "hhUz4sucpId",
            created: "2015-02-28T12:00:56.529+0000",
            lastUpdated: "2015-03-24T10:51:01.382+0000",
            href: "https://do-training.datim.org/api/organisationUnits/hhUz4sucpId"
          }
        },
        {
          id: "CfvFbOVPUCB",
          name: "Honeybee Site",
          code: "CfvFbOVPUCB",
          shortName: "Honeybee Site",
          openingDate: "1970-01-01",
          parent: {
            id: "hhUz4sucpId",
            name: "Insect District",
            code: "hhUz4sucpId",
            created: "2015-02-28T12:00:56.529+0000",
            lastUpdated: "2015-03-24T10:51:01.382+0000",
            href: "https://do-training.datim.org/api/organisationUnits/hhUz4sucpId"
          }
        },
        {
          id: "l8nDzBV3SqN",
          name: "Mosquito Site",
          code: "l8nDzBV3SqN",
          shortName: "Mosquito Site",
          openingDate: "1970-01-01",
          parent: {
            id: "hhUz4sucpId",
            name: "Insect District",
            code: "hhUz4sucpId",
            created: "2015-02-28T12:00:56.529+0000",
            lastUpdated: "2015-03-24T10:51:01.382+0000",
            href: "https://do-training.datim.org/api/organisationUnits/hhUz4sucpId"
          }
        },
        {
          id: "z2xqhTu6nEc",
          name: "Moth Site",
          code: "z2xqhTu6nEc",
          shortName: "Moth Site",
          openingDate: "1970-01-01",
          parent: {
            id: "hhUz4sucpId",
            name: "Insect District",
            code: "hhUz4sucpId",
            created: "2015-02-28T12:00:56.529+0000",
            lastUpdated: "2015-03-24T10:51:01.382+0000",
            href: "https://do-training.datim.org/api/organisationUnits/hhUz4sucpId"
          }
        },
        {
          id: "M1zETnXjMHr",
          name: "Spider Site",
          code: "M1zETnXjMHr",
          shortName: "Spider Site",
          openingDate: "1970-01-01",
          parent: {
            id: "hhUz4sucpId",
            name: "Insect District",
            code: "hhUz4sucpId",
            created: "2015-02-28T12:00:56.529+0000",
            lastUpdated: "2015-03-24T10:51:01.382+0000",
            href: "https://do-training.datim.org/api/organisationUnits/hhUz4sucpId"
          }
        },
        {
          id: "TqH8UcafVOd",
          name: "Termite Site",
          code: "TqH8UcafVOd",
          shortName: "Termite Site",
          openingDate: "1970-01-01",
          parent: {
            id: "hhUz4sucpId",
            name: "Insect District",
            code: "hhUz4sucpId",
            created: "2015-02-28T12:00:56.529+0000",
            lastUpdated: "2015-03-24T10:51:01.382+0000",
            href: "https://do-training.datim.org/api/organisationUnits/hhUz4sucpId"
          }
        },
        {
          id: "EvYmiR4hrO1",
          name: "Wasp Site",
          code: "EvYmiR4hrO1",
          shortName: "Wasp Site",
          openingDate: "1970-01-01",
          parent: {
            id: "hhUz4sucpId",
            name: "Insect District",
            code: "hhUz4sucpId",
            created: "2015-02-28T12:00:56.529+0000",
            lastUpdated: "2015-03-24T10:51:01.382+0000",
            href: "https://do-training.datim.org/api/organisationUnits/hhUz4sucpId"
          }
        },
        {
          id: "BSL4emyr5Bj",
          name: "Weevil Site",
          code: "BSL4emyr5Bj",
          shortName: "Weevil Site",
          openingDate: "1970-01-01",
          parent: {
            id: "hhUz4sucpId",
            name: "Insect District",
            code: "hhUz4sucpId",
            created: "2015-02-28T12:00:56.529+0000",
            lastUpdated: "2015-03-24T10:51:01.382+0000",
            href: "https://do-training.datim.org/api/organisationUnits/hhUz4sucpId"
          }
        },
        {
          id: "ixwjYOMeIZ4",
          name: "Worm Site",
          code: "ixwjYOMeIZ4",
          shortName: "Worm Site",
          openingDate: "1970-01-01",
          parent: {
            id: "hhUz4sucpId",
            name: "Insect District",
            code: "hhUz4sucpId",
            created: "2015-02-28T12:00:56.529+0000",
            lastUpdated: "2015-03-24T10:51:01.382+0000",
            href: "https://do-training.datim.org/api/organisationUnits/hhUz4sucpId"
          }
        },
        {
          id: "PsDCZEFQUzt",
          name: "Food Region",
          code: "PsDCZEFQUzt",
          shortName: "Food Region",
          openingDate: "1970-01-01",
          parent: {
            id: "KKFzPM8LoXs",
            name: "Demoland",
            code: "KKFzPM8LoXs",
            created: "2015-02-28T12:00:56.527+0000",
            lastUpdated: "2015-02-28T12:00:57.260+0000",
            href: "https://do-training.datim.org/api/organisationUnits/KKFzPM8LoXs"
          }
        },
        {
          id: "nmC7t2qokj3",
          name: "Dessert District",
          code: "nmC7t2qokj3",
          shortName: "Dessert District",
          openingDate: "1970-01-01",
          parent: {
            id: "PsDCZEFQUzt",
            name: "Food Region",
            code: "PsDCZEFQUzt",
            created: "2015-02-28T12:00:56.528+0000",
            lastUpdated: "2015-02-28T12:00:57.468+0000",
            href: "https://do-training.datim.org/api/organisationUnits/PsDCZEFQUzt"
          }
        },
        {
          id: "D1c5XAu6vOl",
          name: "Apfelstrudel Site",
          code: "D1c5XAu6vOl",
          shortName: "Apfelstrudel Site",
          openingDate: "1970-01-01",
          parent: {
            id: "nmC7t2qokj3",
            name: "Dessert District",
            code: "nmC7t2qokj3",
            created: "2015-02-28T12:00:56.530+0000",
            lastUpdated: "2015-03-24T10:51:01.384+0000",
            href: "https://do-training.datim.org/api/organisationUnits/nmC7t2qokj3"
          }
        },
        {
          id: "vPWBhTp6NIq",
          name: "Brownie Site",
          code: "vPWBhTp6NIq",
          shortName: "Brownie Site",
          openingDate: "1970-01-01",
          parent: {
            id: "nmC7t2qokj3",
            name: "Dessert District",
            code: "nmC7t2qokj3",
            created: "2015-02-28T12:00:56.530+0000",
            lastUpdated: "2015-03-24T10:51:01.384+0000",
            href: "https://do-training.datim.org/api/organisationUnits/nmC7t2qokj3"
          }
        },
        {
          id: "FNHaUpROXvs",
          name: "Cake Site",
          code: "FNHaUpROXvs",
          shortName: "Cake Site",
          openingDate: "1970-01-01",
          parent: {
            id: "nmC7t2qokj3",
            name: "Dessert District",
            code: "nmC7t2qokj3",
            created: "2015-02-28T12:00:56.530+0000",
            lastUpdated: "2015-03-24T10:51:01.384+0000",
            href: "https://do-training.datim.org/api/organisationUnits/nmC7t2qokj3"
          }
        },
        {
          id: "X4CTRik9gJZ",
          name: "Cheesecake Site",
          code: "X4CTRik9gJZ",
          shortName: "Cheesecake Site",
          openingDate: "1970-01-01",
          parent: {
            id: "nmC7t2qokj3",
            name: "Dessert District",
            code: "nmC7t2qokj3",
            created: "2015-02-28T12:00:56.530+0000",
            lastUpdated: "2015-03-24T10:51:01.384+0000",
            href: "https://do-training.datim.org/api/organisationUnits/nmC7t2qokj3"
          }
        },
        {
          id: "iOmXP7dheil",
          name: "Cookie Site",
          code: "iOmXP7dheil",
          shortName: "Cookie Site",
          openingDate: "1970-01-01",
          parent: {
            id: "nmC7t2qokj3",
            name: "Dessert District",
            code: "nmC7t2qokj3",
            created: "2015-02-28T12:00:56.530+0000",
            lastUpdated: "2015-03-24T10:51:01.384+0000",
            href: "https://do-training.datim.org/api/organisationUnits/nmC7t2qokj3"
          }
        },
        {
          id: "oHsjg17Ke3m",
          name: "Cupcake Site",
          code: "oHsjg17Ke3m",
          shortName: "Cupcake Site",
          openingDate: "1970-01-01",
          parent: {
            id: "nmC7t2qokj3",
            name: "Dessert District",
            code: "nmC7t2qokj3",
            created: "2015-02-28T12:00:56.530+0000",
            lastUpdated: "2015-03-24T10:51:01.384+0000",
            href: "https://do-training.datim.org/api/organisationUnits/nmC7t2qokj3"
          }
        },
        {
          id: "JXA1jDmSuh4",
          name: "Custard Site",
          code: "JXA1jDmSuh4",
          shortName: "Custard Site",
          openingDate: "1970-01-01",
          parent: {
            id: "nmC7t2qokj3",
            name: "Dessert District",
            code: "nmC7t2qokj3",
            created: "2015-02-28T12:00:56.530+0000",
            lastUpdated: "2015-03-24T10:51:01.384+0000",
            href: "https://do-training.datim.org/api/organisationUnits/nmC7t2qokj3"
          }
        },
        {
          id: "fidfPnk7ZQy",
          name: "Gelato Site",
          code: "fidfPnk7ZQy",
          shortName: "Gelato Site",
          openingDate: "1970-01-01",
          parent: {
            id: "nmC7t2qokj3",
            name: "Dessert District",
            code: "nmC7t2qokj3",
            created: "2015-02-28T12:00:56.530+0000",
            lastUpdated: "2015-03-24T10:51:01.384+0000",
            href: "https://do-training.datim.org/api/organisationUnits/nmC7t2qokj3"
          }
        },
        {
          id: "SaS86DeoFcB",
          name: "Gulab Jamun Site",
          code: "SaS86DeoFcB",
          shortName: "Gulab Jamun Site",
          openingDate: "1970-01-01",
          parent: {
            id: "nmC7t2qokj3",
            name: "Dessert District",
            code: "nmC7t2qokj3",
            created: "2015-02-28T12:00:56.530+0000",
            lastUpdated: "2015-03-24T10:51:01.384+0000",
            href: "https://do-training.datim.org/api/organisationUnits/nmC7t2qokj3"
          }
        },
        {
          id: "riSGfdYVb5L",
          name: "Ice Cream Site",
          code: "riSGfdYVb5L",
          shortName: "Ice Cream Site",
          openingDate: "1970-01-01",
          parent: {
            id: "nmC7t2qokj3",
            name: "Dessert District",
            code: "nmC7t2qokj3",
            created: "2015-02-28T12:00:56.530+0000",
            lastUpdated: "2015-03-24T10:51:01.384+0000",
            href: "https://do-training.datim.org/api/organisationUnits/nmC7t2qokj3"
          }
        },
        {
          id: "WD5XthjPdiu",
          name: "Pie Site",
          code: "WD5XthjPdiu",
          shortName: "Pie Site",
          openingDate: "1970-01-01",
          parent: {
            id: "nmC7t2qokj3",
            name: "Dessert District",
            code: "nmC7t2qokj3",
            created: "2015-02-28T12:00:56.530+0000",
            lastUpdated: "2015-03-24T10:51:01.384+0000",
            href: "https://do-training.datim.org/api/organisationUnits/nmC7t2qokj3"
          }
        },
        {
          id: "TUpd5Rm73LG",
          name: "Pudding Site",
          code: "TUpd5Rm73LG",
          shortName: "Pudding Site",
          openingDate: "1970-01-01",
          parent: {
            id: "nmC7t2qokj3",
            name: "Dessert District",
            code: "nmC7t2qokj3",
            created: "2015-02-28T12:00:56.530+0000",
            lastUpdated: "2015-03-24T10:51:01.384+0000",
            href: "https://do-training.datim.org/api/organisationUnits/nmC7t2qokj3"
          }
        },
        {
          id: "fMJC0awDFd8",
          name: "Sorbet Site",
          code: "fMJC0awDFd8",
          shortName: "Sorbet Site",
          openingDate: "1970-01-01",
          parent: {
            id: "nmC7t2qokj3",
            name: "Dessert District",
            code: "nmC7t2qokj3",
            created: "2015-02-28T12:00:56.530+0000",
            lastUpdated: "2015-03-24T10:51:01.384+0000",
            href: "https://do-training.datim.org/api/organisationUnits/nmC7t2qokj3"
          }
        },
        {
          id: "QvFltyYohwj",
          name: "Taffy Site",
          code: "QvFltyYohwj",
          shortName: "Taffy Site",
          openingDate: "1970-01-01",
          parent: {
            id: "nmC7t2qokj3",
            name: "Dessert District",
            code: "nmC7t2qokj3",
            created: "2015-02-28T12:00:56.530+0000",
            lastUpdated: "2015-03-24T10:51:01.384+0000",
            href: "https://do-training.datim.org/api/organisationUnits/nmC7t2qokj3"
          }
        },
        {
          id: "TM2kRYjPZ5t",
          name: "Waffle Site",
          code: "TM2kRYjPZ5t",
          shortName: "Waffle Site",
          openingDate: "1970-01-01",
          parent: {
            id: "nmC7t2qokj3",
            name: "Dessert District",
            code: "nmC7t2qokj3",
            created: "2015-02-28T12:00:56.530+0000",
            lastUpdated: "2015-03-24T10:51:01.384+0000",
            href: "https://do-training.datim.org/api/organisationUnits/nmC7t2qokj3"
          }
        },
        {
          id: "RboS01gz3tB",
          name: "Dinner District",
          code: "RboS01gz3tB",
          shortName: "Dinner District",
          openingDate: "1970-01-01",
          parent: {
            id: "PsDCZEFQUzt",
            name: "Food Region",
            code: "PsDCZEFQUzt",
            created: "2015-02-28T12:00:56.528+0000",
            lastUpdated: "2015-02-28T12:00:57.468+0000",
            href: "https://do-training.datim.org/api/organisationUnits/PsDCZEFQUzt"
          }
        },
        {
          id: "rUHszgAtVax",
          name: "Boerwors Site",
          code: "rUHszgAtVax",
          shortName: "Boerwors Site",
          openingDate: "1970-01-01",
          parent: {
            id: "RboS01gz3tB",
            name: "Dinner District",
            code: "RboS01gz3tB",
            created: "2015-02-28T12:00:56.530+0000",
            lastUpdated: "2015-03-24T10:51:01.384+0000",
            href: "https://do-training.datim.org/api/organisationUnits/RboS01gz3tB"
          }
        },
        {
          id: "ikpdaGyxK5O",
          name: "Burrito Site",
          code: "ikpdaGyxK5O",
          shortName: "Burrito Site",
          openingDate: "1970-01-01",
          parent: {
            id: "RboS01gz3tB",
            name: "Dinner District",
            code: "RboS01gz3tB",
            created: "2015-02-28T12:00:56.530+0000",
            lastUpdated: "2015-03-24T10:51:01.384+0000",
            href: "https://do-training.datim.org/api/organisationUnits/RboS01gz3tB"
          }
        },
        {
          id: "AVsdNGhuPDE",
          name: "Casserole Site",
          code: "AVsdNGhuPDE",
          shortName: "Casserole Site",
          openingDate: "1970-01-01",
          parent: {
            id: "RboS01gz3tB",
            name: "Dinner District",
            code: "RboS01gz3tB",
            created: "2015-02-28T12:00:56.530+0000",
            lastUpdated: "2015-03-24T10:51:01.384+0000",
            href: "https://do-training.datim.org/api/organisationUnits/RboS01gz3tB"
          }
        },
        {
          id: "mPnRjzgFd8m",
          name: "Chili Site",
          code: "mPnRjzgFd8m",
          shortName: "Chili Site",
          openingDate: "1970-01-01",
          parent: {
            id: "RboS01gz3tB",
            name: "Dinner District",
            code: "RboS01gz3tB",
            created: "2015-02-28T12:00:56.530+0000",
            lastUpdated: "2015-03-24T10:51:01.384+0000",
            href: "https://do-training.datim.org/api/organisationUnits/RboS01gz3tB"
          }
        },
        {
          id: "LVc0rtNbwjR",
          name: "Curry Site",
          code: "LVc0rtNbwjR",
          shortName: "Curry Site",
          openingDate: "1970-01-01",
          parent: {
            id: "RboS01gz3tB",
            name: "Dinner District",
            code: "RboS01gz3tB",
            created: "2015-02-28T12:00:56.530+0000",
            lastUpdated: "2015-03-24T10:51:01.384+0000",
            href: "https://do-training.datim.org/api/organisationUnits/RboS01gz3tB"
          }
        },
        {
          id: "Ni8sW4XwaOU",
          name: "Hamburger Site",
          code: "Ni8sW4XwaOU",
          shortName: "Hamburger Site",
          openingDate: "1970-01-01",
          parent: {
            id: "RboS01gz3tB",
            name: "Dinner District",
            code: "RboS01gz3tB",
            created: "2015-02-28T12:00:56.530+0000",
            lastUpdated: "2015-03-24T10:51:01.384+0000",
            href: "https://do-training.datim.org/api/organisationUnits/RboS01gz3tB"
          }
        },
        {
          id: "vkgqWK3cb9s",
          name: "Lasagna Site",
          code: "vkgqWK3cb9s",
          shortName: "Lasagna Site",
          openingDate: "1970-01-01",
          parent: {
            id: "RboS01gz3tB",
            name: "Dinner District",
            code: "RboS01gz3tB",
            created: "2015-02-28T12:00:56.530+0000",
            lastUpdated: "2015-03-24T10:51:01.384+0000",
            href: "https://do-training.datim.org/api/organisationUnits/RboS01gz3tB"
          }
        },
        {
          id: "VFV8xZqphUB",
          name: "Noodle Site",
          code: "VFV8xZqphUB",
          shortName: "Noodle Site",
          openingDate: "1970-01-01",
          parent: {
            id: "RboS01gz3tB",
            name: "Dinner District",
            code: "RboS01gz3tB",
            created: "2015-02-28T12:00:56.530+0000",
            lastUpdated: "2015-03-24T10:51:01.384+0000",
            href: "https://do-training.datim.org/api/organisationUnits/RboS01gz3tB"
          }
        },
        {
          id: "dkJATn0tp7Q",
          name: "Pad Thai Site",
          code: "dkJATn0tp7Q",
          shortName: "Pad Thai Site",
          openingDate: "1970-01-01",
          parent: {
            id: "RboS01gz3tB",
            name: "Dinner District",
            code: "RboS01gz3tB",
            created: "2015-02-28T12:00:56.530+0000",
            lastUpdated: "2015-03-24T10:51:01.384+0000",
            href: "https://do-training.datim.org/api/organisationUnits/RboS01gz3tB"
          }
        },
        {
          id: "X1eKR65V7Qw",
          name: "Pizza Site",
          code: "X1eKR65V7Qw",
          shortName: "Pizza Site",
          openingDate: "1970-01-01",
          parent: {
            id: "RboS01gz3tB",
            name: "Dinner District",
            code: "RboS01gz3tB",
            created: "2015-02-28T12:00:56.530+0000",
            lastUpdated: "2015-03-24T10:51:01.384+0000",
            href: "https://do-training.datim.org/api/organisationUnits/RboS01gz3tB"
          }
        },
        {
          id: "KaUW7qkKE3Y",
          name: "Ravioli Site",
          code: "KaUW7qkKE3Y",
          shortName: "Ravioli Site",
          openingDate: "1970-01-01",
          parent: {
            id: "RboS01gz3tB",
            name: "Dinner District",
            code: "RboS01gz3tB",
            created: "2015-02-28T12:00:56.530+0000",
            lastUpdated: "2015-03-24T10:51:01.384+0000",
            href: "https://do-training.datim.org/api/organisationUnits/RboS01gz3tB"
          }
        },
        {
          id: "TwRfCKkilpD",
          name: "Spaghetti Site",
          code: "TwRfCKkilpD",
          shortName: "Spaghetti Site",
          openingDate: "1970-01-01",
          parent: {
            id: "RboS01gz3tB",
            name: "Dinner District",
            code: "RboS01gz3tB",
            created: "2015-02-28T12:00:56.530+0000",
            lastUpdated: "2015-03-24T10:51:01.384+0000",
            href: "https://do-training.datim.org/api/organisationUnits/RboS01gz3tB"
          }
        },
        {
          id: "YPzTheiHjlV",
          name: "Steak Site",
          code: "YPzTheiHjlV",
          shortName: "Steak Site",
          openingDate: "1970-01-01",
          parent: {
            id: "RboS01gz3tB",
            name: "Dinner District",
            code: "RboS01gz3tB",
            created: "2015-02-28T12:00:56.530+0000",
            lastUpdated: "2015-03-24T10:51:01.384+0000",
            href: "https://do-training.datim.org/api/organisationUnits/RboS01gz3tB"
          }
        },
        {
          id: "aQ4q2DYbwKB",
          name: "Sushi Site",
          code: "aQ4q2DYbwKB",
          shortName: "Sushi Site",
          openingDate: "1970-01-01",
          parent: {
            id: "RboS01gz3tB",
            name: "Dinner District",
            code: "RboS01gz3tB",
            created: "2015-02-28T12:00:56.530+0000",
            lastUpdated: "2015-03-24T10:51:01.384+0000",
            href: "https://do-training.datim.org/api/organisationUnits/RboS01gz3tB"
          }
        },
        {
          id: "fzHdCOmKi8V",
          name: "Taco Site",
          code: "fzHdCOmKi8V",
          shortName: "Taco Site",
          openingDate: "1970-01-01",
          parent: {
            id: "RboS01gz3tB",
            name: "Dinner District",
            code: "RboS01gz3tB",
            created: "2015-02-28T12:00:56.530+0000",
            lastUpdated: "2015-03-24T10:51:01.384+0000",
            href: "https://do-training.datim.org/api/organisationUnits/RboS01gz3tB"
          }
        },
        {
          id: "gWsYFbojcAE",
          name: "Fruit District",
          code: "gWsYFbojcAE",
          shortName: "Fruit District",
          openingDate: "1970-01-01",
          parent: {
            id: "PsDCZEFQUzt",
            name: "Food Region",
            code: "PsDCZEFQUzt",
            created: "2015-02-28T12:00:56.528+0000",
            lastUpdated: "2015-02-28T12:00:57.468+0000",
            href: "https://do-training.datim.org/api/organisationUnits/PsDCZEFQUzt"
          }
        },
        {
          id: "v6Glbt3RPzk",
          name: "Apple Site",
          code: "v6Glbt3RPzk",
          shortName: "Apple Site",
          openingDate: "1970-01-01",
          parent: {
            id: "gWsYFbojcAE",
            name: "Fruit District",
            code: "gWsYFbojcAE",
            created: "2015-02-28T12:00:56.530+0000",
            lastUpdated: "2015-03-24T10:51:01.381+0000",
            href: "https://do-training.datim.org/api/organisationUnits/gWsYFbojcAE"
          }
        },
        {
          id: "yE6vGjYb3Mq",
          name: "Banana Site",
          code: "yE6vGjYb3Mq",
          shortName: "Banana Site",
          openingDate: "1970-01-01",
          parent: {
            id: "gWsYFbojcAE",
            name: "Fruit District",
            code: "gWsYFbojcAE",
            created: "2015-02-28T12:00:56.530+0000",
            lastUpdated: "2015-03-24T10:51:01.381+0000",
            href: "https://do-training.datim.org/api/organisationUnits/gWsYFbojcAE"
          }
        },
        {
          id: "zmDHEI2iY68",
          name: "Blackberry Site",
          code: "zmDHEI2iY68",
          shortName: "Blackberry Site",
          openingDate: "1970-01-01",
          parent: {
            id: "gWsYFbojcAE",
            name: "Fruit District",
            code: "gWsYFbojcAE",
            created: "2015-02-28T12:00:56.530+0000",
            lastUpdated: "2015-03-24T10:51:01.381+0000",
            href: "https://do-training.datim.org/api/organisationUnits/gWsYFbojcAE"
          }
        },
        {
          id: "cbgwquf5YV3",
          name: "Blueberry Site",
          code: "cbgwquf5YV3",
          shortName: "Blueberry Site",
          openingDate: "1970-01-01",
          parent: {
            id: "gWsYFbojcAE",
            name: "Fruit District",
            code: "gWsYFbojcAE",
            created: "2015-02-28T12:00:56.530+0000",
            lastUpdated: "2015-03-24T10:51:01.381+0000",
            href: "https://do-training.datim.org/api/organisationUnits/gWsYFbojcAE"
          }
        },
        {
          id: "QajFozmikDA",
          name: "Cherry Site",
          code: "QajFozmikDA",
          shortName: "Cherry Site",
          openingDate: "1970-01-01",
          parent: {
            id: "gWsYFbojcAE",
            name: "Fruit District",
            code: "gWsYFbojcAE",
            created: "2015-02-28T12:00:56.530+0000",
            lastUpdated: "2015-03-24T10:51:01.381+0000",
            href: "https://do-training.datim.org/api/organisationUnits/gWsYFbojcAE"
          }
        },
        {
          id: "D6u72JvXVMn",
          name: "Cloudberry Site",
          code: "D6u72JvXVMn",
          shortName: "Cloudberry Site",
          openingDate: "1970-01-01",
          parent: {
            id: "gWsYFbojcAE",
            name: "Fruit District",
            code: "gWsYFbojcAE",
            created: "2015-02-28T12:00:56.530+0000",
            lastUpdated: "2015-03-24T10:51:01.381+0000",
            href: "https://do-training.datim.org/api/organisationUnits/gWsYFbojcAE"
          }
        },
        {
          id: "MkXxtblPm8G",
          name: "Durian Site",
          code: "MkXxtblPm8G",
          shortName: "Durian Site",
          openingDate: "1970-01-01",
          parent: {
            id: "gWsYFbojcAE",
            name: "Fruit District",
            code: "gWsYFbojcAE",
            created: "2015-02-28T12:00:56.530+0000",
            lastUpdated: "2015-03-24T10:51:01.381+0000",
            href: "https://do-training.datim.org/api/organisationUnits/gWsYFbojcAE"
          }
        },
        {
          id: "vKauOlzoDAV",
          name: "Lemon Site",
          code: "vKauOlzoDAV",
          shortName: "Lemon Site",
          openingDate: "1970-01-01",
          parent: {
            id: "gWsYFbojcAE",
            name: "Fruit District",
            code: "gWsYFbojcAE",
            created: "2015-02-28T12:00:56.530+0000",
            lastUpdated: "2015-03-24T10:51:01.381+0000",
            href: "https://do-training.datim.org/api/organisationUnits/gWsYFbojcAE"
          }
        },
        {
          id: "tCJp6eMhq5Z",
          name: "Lingonberry Site",
          code: "tCJp6eMhq5Z",
          shortName: "Lingonberry Site",
          openingDate: "1970-01-01",
          parent: {
            id: "gWsYFbojcAE",
            name: "Fruit District",
            code: "gWsYFbojcAE",
            created: "2015-02-28T12:00:56.530+0000",
            lastUpdated: "2015-03-24T10:51:01.381+0000",
            href: "https://do-training.datim.org/api/organisationUnits/gWsYFbojcAE"
          }
        },
        {
          id: "fGi0TXadw5F",
          name: "Orange Site",
          code: "fGi0TXadw5F",
          shortName: "Orange Site",
          openingDate: "1970-01-01",
          parent: {
            id: "gWsYFbojcAE",
            name: "Fruit District",
            code: "gWsYFbojcAE",
            created: "2015-02-28T12:00:56.530+0000",
            lastUpdated: "2015-03-24T10:51:01.381+0000",
            href: "https://do-training.datim.org/api/organisationUnits/gWsYFbojcAE"
          }
        },
        {
          id: "Wkwfq4CHVFJ",
          name: "Peach Site",
          code: "Wkwfq4CHVFJ",
          shortName: "Peach Site",
          openingDate: "1970-01-01",
          parent: {
            id: "gWsYFbojcAE",
            name: "Fruit District",
            code: "gWsYFbojcAE",
            created: "2015-02-28T12:00:56.530+0000",
            lastUpdated: "2015-03-24T10:51:01.381+0000",
            href: "https://do-training.datim.org/api/organisationUnits/gWsYFbojcAE"
          }
        },
        {
          id: "o5UDG4hBJmt",
          name: "Pear Site",
          code: "o5UDG4hBJmt",
          shortName: "Pear Site",
          openingDate: "1970-01-01",
          parent: {
            id: "gWsYFbojcAE",
            name: "Fruit District",
            code: "gWsYFbojcAE",
            created: "2015-02-28T12:00:56.530+0000",
            lastUpdated: "2015-03-24T10:51:01.381+0000",
            href: "https://do-training.datim.org/api/organisationUnits/gWsYFbojcAE"
          }
        },
        {
          id: "VuBgU5Dji4H",
          name: "Pineapple Site",
          code: "VuBgU5Dji4H",
          shortName: "Pineapple Site",
          openingDate: "1970-01-01",
          parent: {
            id: "gWsYFbojcAE",
            name: "Fruit District",
            code: "gWsYFbojcAE",
            created: "2015-02-28T12:00:56.530+0000",
            lastUpdated: "2015-03-24T10:51:01.381+0000",
            href: "https://do-training.datim.org/api/organisationUnits/gWsYFbojcAE"
          }
        },
        {
          id: "KXcp1JrG0lt",
          name: "Raspberry Site",
          code: "KXcp1JrG0lt",
          shortName: "Raspberry Site",
          openingDate: "1970-01-01",
          parent: {
            id: "gWsYFbojcAE",
            name: "Fruit District",
            code: "gWsYFbojcAE",
            created: "2015-02-28T12:00:56.530+0000",
            lastUpdated: "2015-03-24T10:51:01.381+0000",
            href: "https://do-training.datim.org/api/organisationUnits/gWsYFbojcAE"
          }
        },
        {
          id: "m5qVRNk0mSx",
          name: "Strawberry Site",
          code: "m5qVRNk0mSx",
          shortName: "Strawberry Site",
          openingDate: "1970-01-01",
          parent: {
            id: "gWsYFbojcAE",
            name: "Fruit District",
            code: "gWsYFbojcAE",
            created: "2015-02-28T12:00:56.530+0000",
            lastUpdated: "2015-03-24T10:51:01.381+0000",
            href: "https://do-training.datim.org/api/organisationUnits/gWsYFbojcAE"
          }
        },
        {
          id: "cvAbcjPUmuW",
          name: "Vegetable District",
          code: "cvAbcjPUmuW",
          shortName: "Vegetable District",
          openingDate: "1970-01-01",
          parent: {
            id: "PsDCZEFQUzt",
            name: "Food Region",
            code: "PsDCZEFQUzt",
            created: "2015-02-28T12:00:56.528+0000",
            lastUpdated: "2015-02-28T12:00:57.468+0000",
            href: "https://do-training.datim.org/api/organisationUnits/PsDCZEFQUzt"
          }
        },
        {
          id: "ZcnVTq9HmAj",
          name: "Asparagus Site",
          code: "ZcnVTq9HmAj",
          shortName: "Asparagus Site",
          openingDate: "1970-01-01",
          parent: {
            id: "cvAbcjPUmuW",
            name: "Vegetable District",
            code: "cvAbcjPUmuW",
            created: "2015-02-28T12:00:56.529+0000",
            lastUpdated: "2015-03-24T10:51:01.382+0000",
            href: "https://do-training.datim.org/api/organisationUnits/cvAbcjPUmuW"
          }
        },
        {
          id: "fEQ8PRCdAzr",
          name: "Beet Site",
          code: "fEQ8PRCdAzr",
          shortName: "Beet Site",
          openingDate: "1970-01-01",
          parent: {
            id: "cvAbcjPUmuW",
            name: "Vegetable District",
            code: "cvAbcjPUmuW",
            created: "2015-02-28T12:00:56.529+0000",
            lastUpdated: "2015-03-24T10:51:01.382+0000",
            href: "https://do-training.datim.org/api/organisationUnits/cvAbcjPUmuW"
          }
        },
        {
          id: "qm10AxqZnGN",
          name: "Broccoli Site",
          code: "qm10AxqZnGN",
          shortName: "Broccoli Site",
          openingDate: "1970-01-01",
          parent: {
            id: "cvAbcjPUmuW",
            name: "Vegetable District",
            code: "cvAbcjPUmuW",
            created: "2015-02-28T12:00:56.529+0000",
            lastUpdated: "2015-03-24T10:51:01.382+0000",
            href: "https://do-training.datim.org/api/organisationUnits/cvAbcjPUmuW"
          }
        },
        {
          id: "gozEda5V7qR",
          name: "Carrot Site",
          code: "gozEda5V7qR",
          shortName: "Carrot Site",
          openingDate: "1970-01-01",
          parent: {
            id: "cvAbcjPUmuW",
            name: "Vegetable District",
            code: "cvAbcjPUmuW",
            created: "2015-02-28T12:00:56.529+0000",
            lastUpdated: "2015-03-24T10:51:01.382+0000",
            href: "https://do-training.datim.org/api/organisationUnits/cvAbcjPUmuW"
          }
        },
        {
          id: "JO7vk5ZJc4f",
          name: "Cauliflower Site",
          code: "JO7vk5ZJc4f",
          shortName: "Cauliflower Site",
          openingDate: "1970-01-01",
          parent: {
            id: "cvAbcjPUmuW",
            name: "Vegetable District",
            code: "cvAbcjPUmuW",
            created: "2015-02-28T12:00:56.529+0000",
            lastUpdated: "2015-03-24T10:51:01.382+0000",
            href: "https://do-training.datim.org/api/organisationUnits/cvAbcjPUmuW"
          }
        },
        {
          id: "Qa3Tl9b2FHh",
          name: "Celery Site",
          code: "Qa3Tl9b2FHh",
          shortName: "Celery Site",
          openingDate: "1970-01-01",
          parent: {
            id: "cvAbcjPUmuW",
            name: "Vegetable District",
            code: "cvAbcjPUmuW",
            created: "2015-02-28T12:00:56.529+0000",
            lastUpdated: "2015-03-24T10:51:01.382+0000",
            href: "https://do-training.datim.org/api/organisationUnits/cvAbcjPUmuW"
          }
        },
        {
          id: "LkrCc8VY5WJ",
          name: "Cucumber Site",
          code: "LkrCc8VY5WJ",
          shortName: "Cucumber Site",
          openingDate: "1970-01-01",
          parent: {
            id: "cvAbcjPUmuW",
            name: "Vegetable District",
            code: "cvAbcjPUmuW",
            created: "2015-02-28T12:00:56.529+0000",
            lastUpdated: "2015-03-24T10:51:01.382+0000",
            href: "https://do-training.datim.org/api/organisationUnits/cvAbcjPUmuW"
          }
        },
        {
          id: "Pfdnuj1SrOV",
          name: "Eggplant Site",
          code: "Pfdnuj1SrOV",
          shortName: "Eggplant Site",
          openingDate: "1970-01-01",
          parent: {
            id: "cvAbcjPUmuW",
            name: "Vegetable District",
            code: "cvAbcjPUmuW",
            created: "2015-02-28T12:00:56.529+0000",
            lastUpdated: "2015-03-24T10:51:01.382+0000",
            href: "https://do-training.datim.org/api/organisationUnits/cvAbcjPUmuW"
          }
        },
        {
          id: "XJvPjCTpUsO",
          name: "Lettuce Site",
          code: "XJvPjCTpUsO",
          shortName: "Lettuce Site",
          openingDate: "1970-01-01",
          parent: {
            id: "cvAbcjPUmuW",
            name: "Vegetable District",
            code: "cvAbcjPUmuW",
            created: "2015-02-28T12:00:56.529+0000",
            lastUpdated: "2015-03-24T10:51:01.382+0000",
            href: "https://do-training.datim.org/api/organisationUnits/cvAbcjPUmuW"
          }
        },
        {
          id: "B6iAVNxaEr8",
          name: "Olive Site",
          code: "B6iAVNxaEr8",
          shortName: "Olive Site",
          openingDate: "1970-01-01",
          parent: {
            id: "cvAbcjPUmuW",
            name: "Vegetable District",
            code: "cvAbcjPUmuW",
            created: "2015-02-28T12:00:56.529+0000",
            lastUpdated: "2015-03-24T10:51:01.382+0000",
            href: "https://do-training.datim.org/api/organisationUnits/cvAbcjPUmuW"
          }
        },
        {
          id: "VBPoy9EFe15",
          name: "Onion Site",
          code: "VBPoy9EFe15",
          shortName: "Onion Site",
          openingDate: "1970-01-01",
          parent: {
            id: "cvAbcjPUmuW",
            name: "Vegetable District",
            code: "cvAbcjPUmuW",
            created: "2015-02-28T12:00:56.529+0000",
            lastUpdated: "2015-03-24T10:51:01.382+0000",
            href: "https://do-training.datim.org/api/organisationUnits/cvAbcjPUmuW"
          }
        },
        {
          id: "HDVTS8sQRN5",
          name: "Peas Site",
          code: "HDVTS8sQRN5",
          shortName: "Peas Site",
          openingDate: "1970-01-01",
          parent: {
            id: "cvAbcjPUmuW",
            name: "Vegetable District",
            code: "cvAbcjPUmuW",
            created: "2015-02-28T12:00:56.529+0000",
            lastUpdated: "2015-03-24T10:51:01.382+0000",
            href: "https://do-training.datim.org/api/organisationUnits/cvAbcjPUmuW"
          }
        },
        {
          id: "oQd1fMt7xnl",
          name: "Potato Site",
          code: "oQd1fMt7xnl",
          shortName: "Potato Site",
          openingDate: "1970-01-01",
          parent: {
            id: "cvAbcjPUmuW",
            name: "Vegetable District",
            code: "cvAbcjPUmuW",
            created: "2015-02-28T12:00:56.529+0000",
            lastUpdated: "2015-03-24T10:51:01.382+0000",
            href: "https://do-training.datim.org/api/organisationUnits/cvAbcjPUmuW"
          }
        },
        {
          id: "opViE6zUrjd",
          name: "Pumpkin Site",
          code: "opViE6zUrjd",
          shortName: "Pumpkin Site",
          openingDate: "1970-01-01",
          parent: {
            id: "cvAbcjPUmuW",
            name: "Vegetable District",
            code: "cvAbcjPUmuW",
            created: "2015-02-28T12:00:56.529+0000",
            lastUpdated: "2015-03-24T10:51:01.382+0000",
            href: "https://do-training.datim.org/api/organisationUnits/cvAbcjPUmuW"
          }
        },
        {
          id: "SfymR04eMLY",
          name: "Radish Site",
          code: "SfymR04eMLY",
          shortName: "Radish Site",
          openingDate: "1970-01-01",
          parent: {
            id: "cvAbcjPUmuW",
            name: "Vegetable District",
            code: "cvAbcjPUmuW",
            created: "2015-02-28T12:00:56.529+0000",
            lastUpdated: "2015-03-24T10:51:01.382+0000",
            href: "https://do-training.datim.org/api/organisationUnits/cvAbcjPUmuW"
          }
        }
      ]
    }
    this.route.params.subscribe(params => {
      let packageId = params['id'];
      this.metadataPackageService.find(packageId).subscribe(metadataPackage => {
        this.metadataPackage = metadataPackage;
        this.loadingPackage = false;
        //load metadata
        this.metadataService.findByPackage(metadataPackage, this.metadataPackageService.findLatestVersion(metadataPackage)).subscribe(metadata => {
          this.metadata = metadata;
          console.log(metadata)
          this.loadingMetadata = false;
        }, error => {
          this.loadingMetadata = false;
          this.metadataHasError = true;
        })
      }, error => {
        this.loadingPackage = false;
        this.packageHasError = true;
      })
    })
  }

  importMetadata(dryRun, metadata) {
    this.metadataService.importMetadata(dryRun, metadata);
  }

}
