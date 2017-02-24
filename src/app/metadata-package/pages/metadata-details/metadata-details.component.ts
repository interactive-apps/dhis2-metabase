import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {MetadataPackageService} from "../../../shared/providers/metadata-package.service";
import {MetadataService} from "../../../shared/providers/metadata.service";

@Component({
  selector: 'app-metadata-details',
  templateUrl: './metadata-details.component.html',
  styleUrls: ['./metadata-details.component.css']
})
export class MetadataDetailsComponent implements OnInit {

  public loadingMetadata: boolean;
  public metadataHasError: boolean;
  public metadata: any;
  constructor(
    private route: ActivatedRoute,
    private metadataPackageService: MetadataPackageService,
    private metadataService: MetadataService
  ) {
    this.loadingMetadata = true;
    this.metadataHasError = false;
  }

  ngOnInit() {
    //load metadata
    this.route.params.subscribe(params => {
      this.metadataPackageService.findLatestVersion(params['id']).subscribe(
        latestVersion => {
          this.metadataService.findByPackage(params['id'],latestVersion).subscribe(metadata => {
            console.log(metadata);
            this.metadata = metadata;
            this.loadingMetadata = false;
          }, error => {
            console.log(error)
            this.loadingMetadata = false;
            this.metadataHasError = true;
          })
        }, error => {console.log(error)})
    });
  }

}
