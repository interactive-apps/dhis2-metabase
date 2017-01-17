import { Component, OnInit } from '@angular/core';
import {MetadataPackage} from "../shared/models/metadata-package";
import {MetadataPackageService} from "../shared/providers/metadata-package.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public metadataPackages: MetadataPackage[];
  public loading: boolean;
  public hasError: boolean;
  constructor(
    private metadataPackageService:  MetadataPackageService
  ) {
    this.loading = true;
    this.hasError = false;
  }

  ngOnInit() {
    this.metadataPackageService.loadAll().subscribe(metadataPackages => {
      this.metadataPackages = metadataPackages;
      this.loading = false;
    }, error => {
      this.loading = false;
      this.hasError = true;
    })
  }

}
