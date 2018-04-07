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
  species: string[] = ["Black Walnut", "Walnut Burl", "Maple", "Maple Burl", "Oak", "Sequoia", "Redwood", "Fir", "Myrtlewood", "Madrone", "Juniper", "Speciality Speices"];
  lengths: string[] = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12+"];
  widths: string[] = ["1", "2", "3", "4+"];
  depths: string[] = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12+"];
  currentRoute: string = this.router.url;
  filterVariable: string;
  filterAmount: string;
  constructor(private router: Router, private slabService: SlabService) { }
  ngOnInit() {
    this.slabs = this.slabService.getSlabs();
  }
  goToDetailPage(clickedSlab){
    this.router.navigate(['slabs', clickedSlab.$key]);
  }

  onClick(filterAmount){

    this.filterAmount = filterAmount;
    console.log(this.filterAmount);
  }


}
