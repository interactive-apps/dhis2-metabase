import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {MetadataPackageService} from "../../../shared/providers/metadata-package.service";
import {MetadataPackage} from "../../../shared/models/metadata-package";

@Component({
  selector: 'app-view-package',
  templateUrl: './view-package.component.html',
  styleUrls: ['./view-package.component.css']
})
export class ViewPackageComponent implements OnInit {

  public loading: boolean;
  public hasError: boolean;
  public metadataPackage: MetadataPackage;
  constructor(
    private route: ActivatedRoute,
    private metadataPackageService: MetadataPackageService
  ) {
    this.loading = true;
    this.hasError = false;
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      let packageId = params['id'];
      this.metadataPackageService.find(packageId).subscribe(metadataPackage => {
        this.metadataPackage = metadataPackage;
        this.loading = false;
      }, error => {
        this.loading = false;
        this.hasError = true;
      })
    })
  }

}
