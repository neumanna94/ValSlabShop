import { Component, OnInit } from '@angular/core';
import { SlabService } from '../slab.service';
import { Slab } from '../slab.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [SlabService]
})
export class AdminComponent implements OnInit {

  ngOnInit(){
    
  }
  constructor(private slabService: SlabService) { }

  submitForm(species: string, length: number, width: number, depth: number, price: number, description: string, imgUrl: string) {
    var newSlab: Slab = new Slab(species, length, width, depth, price, description, imgUrl);
    this.slabService.addSlab(newSlab);
  }


}
