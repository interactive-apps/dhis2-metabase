import { Component, OnInit } from '@angular/core';
import {MetadataService} from "../../../shared/providers/metadata.service";
import {ActivatedRoute} from "@angular/router";
import {MetadataPackageService} from "../../../shared/providers/metadata-package.service";

@Component({
  selector: 'app-import-package',
  templateUrl: './import-package.component.html',
  styleUrls: ['./import-package.component.css']
})
export class ImportPackageComponent implements OnInit {

  progress: Array<any> = [];
  constructor(
    private metadataService: MetadataService,
    private metadataPackageService: MetadataPackageService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.progress.push({message: 'Loading Metadata files'});
    this.route.parent.params.subscribe(params => {
      this.metadataPackageService.find(params['id']).subscribe(metadataPackage => {
        let metadataId: string = params['id'] + '_' + params['version'];
        this.metadataService.find(metadataId,this.metadataService.getMetadataUrl(metadataPackage.versions,params['version'])).subscribe(metadata => {
          this.progress.push({message: 'Importing metadata'});
          this.metadataService.importMetadata(false,metadata).subscribe(result => {
            this.progress.push({message: 'Metadata Imported'});
            console.log(result)
          })

        })

      })
    })
  }

}
