import {Component, OnInit, Input} from '@angular/core';
import {MetadataService} from "../../../shared/providers/metadata.service";

@Component({
  selector: 'app-metadata-details',
  templateUrl: './metadata-details.component.html',
  styleUrls: ['./metadata-details.component.css']
})
export class MetadataDetailsComponent implements OnInit {

  @Input() metadataId: string;
  @Input() metadataUrl: string;
  metadata: any;
  loading: boolean = true;
  constructor(
    private metadataService: MetadataService
  ) { }

  ngOnInit() {
    this.metadataService.find(this.metadataId,this.metadataUrl).subscribe(meta => {
      this.loading = false;
      this.metadata = this.metadataService.compileMetadata(meta);
    })
  }

}
