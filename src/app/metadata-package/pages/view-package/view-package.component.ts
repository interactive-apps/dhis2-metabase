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
  constructor(
    private route: ActivatedRoute,
    private metadataPackageService: MetadataPackageService,
    private metadataService: MetadataService
  ) {
    this.loadingPackage = this.loadingMetadata = true;
    this.packageHasError = this.metadataHasError = false;
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      let packageId = params['id'];
      this.metadataPackageService.find(packageId).subscribe(metadataPackage => {
        this.metadataPackage = metadataPackage;
        this.loadingPackage = false;
        //load metadata
        this.metadataService.findByPackage(metadataPackage, this.metadataPackageService.findLatestVersion(metadataPackage)).subscribe(metadata => {
          this.metadata = metadata;
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
