import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Slab } from '../slab.model';
import { SlabService } from '../slab.service';

@Component({
  selector: 'app-slab-detail',
  templateUrl: './slab-detail.component.html',
  styleUrls: ['./slab-detail.component.css'],
  providers: [SlabService]
})
export class SlabDetailComponent implements OnInit {

  constructor(
  private route: ActivatedRoute,
  private location: Location,
  private slabService: SlabService
) {}

  ngOnInit() {
  }

}
