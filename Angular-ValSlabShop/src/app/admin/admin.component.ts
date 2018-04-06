import { Component, OnInit } from '@angular/core';
import { Slab } from '../slab.model';
import { SlabService } from '../slab.service';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [SlabService]
})
export class AdminComponent implements OnInit {

  constructor(private slabService: SlabService) { }

  ngOnInit() {
  }
  // submitForm(species: string, length: number, width: number, depth: number, price: number, imgUrl: string, description: string) {
  //   // var newSlab: Slab = new Slab(species, length, width, depth, price, imgUrl, description);
  //   // this.slabService.addSlab(newSlab);
  //   // console.log(newSlab);
  // }

}
