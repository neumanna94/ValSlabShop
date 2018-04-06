import { Component, OnInit } from '@angular/core';
import { Slab } from '../slab.model';
import { Router } from '@angular/router';
import { SlabService } from '../slab.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-marketplace',
  templateUrl: './marketplace.component.html',
  styleUrls: ['./marketplace.component.css'],
  providers: [SlabService]
})
export class MarketplaceComponent implements OnInit {
  slabs: FirebaseListObservable<any[]>;
  currentRoute: string = this.router.url;
  constructor(private router: Router, private slabService: SlabService) { }
  ngOnInit() {
    this.slabs = this.slabService.getSlabs();
  }
  goToDetailPage(clickedSlab){
    this.router.navigate(['slabs', clickedSlab.$key]);
  }


}
