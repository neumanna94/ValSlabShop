import { Component, Input, OnInit } from '@angular/core';
import { Slab } from '../slab.model';
import { SlabService } from '../slab.service';
@Component({
  selector: 'app-edit-slab',
  templateUrl: './edit-slab.component.html',
  styleUrls: ['./edit-slab.component.css']
})


export class EditSlabComponent implements OnInit {
  @Input() selectedSlab;

  constructor(private slabService: SlabService) { }

  ngOnInit() {
  }

  beginUpdatingSlab(slabToUpdate){
    this.slabService.updateSlab(slabToUpdate);
  }
}
