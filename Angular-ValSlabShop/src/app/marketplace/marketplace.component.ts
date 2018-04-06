import { Component, OnInit } from '@angular/core';
import { Slab } from '../slab.model';
@Component({
  selector: 'app-marketplace',
  templateUrl: './marketplace.component.html',
  styleUrls: ['./marketplace.component.css'],
  providers: [SlabService]
})
export class MarketplaceComponent implements OnInit {
  slabs: Slab[];
  constructor(private router: Router, private slabService: SlabService){}
  ngOnInit(){
    this.slabs = this.slabService.getSlabs();
  }

  goToDetailPage(clickedSlab: Slab) {
    // this.router.navigate(['slabs', clickedSlab.id]);
  };

}
new Slab("Black Walnut", 4, 4, 12, 490, "/src/fun");
