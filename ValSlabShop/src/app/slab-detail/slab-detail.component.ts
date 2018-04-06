import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { SlabService } from '../slab.service';
import { Location } from '@angular/common';
import { Slab } from '../slab.model';

@Component({
  selector: 'app-slab-detail',
  templateUrl: './slab-detail.component.html',
  styleUrls: ['./slab-detail.component.css'],
  providers: [SlabService]
})
export class SlabDetailComponent implements OnInit {
  slabId: string;
  slabToDisplay;
  constructor(
  private route: ActivatedRoute,
  private location: Location,
  private slabService: SlabService
) {}

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
     this.slabId = urlParameters['id'];
   });
   this.slabToDisplay = this.slabService.getSlabById(this.slabId);
 }
}
