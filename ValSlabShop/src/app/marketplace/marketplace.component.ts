import { Component, OnInit } from '@angular/core';
import { Slab } from '../slab.model';
import { Router } from '@angular/router';
import { SlabService } from '../slab.service';
@Component({
  selector: 'app-marketplace',
  templateUrl: './marketplace.component.html',
  styleUrls: ['./marketplace.component.css'],
  providers: [SlabService]
})
export class MarketplaceComponent implements OnInit {
  slabs: Slab[];
  constructor(private router: Router, private slabService: SlabService){}

  ngOnInit() {
    // this.slabs = this.slabService.getSlabs();
  }
//   goToDetailPage(clickedSlab: Slab) {
//   // this.router.navigate(['slabs', clickedSlab.id]);
// };

}
