import { Injectable } from '@angular/core';
import { Slab } from './slab.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class SlabService {
  slabs: FirebaseListObservable<any[]>;
  constructor(private database: AngularFireDatabase) {
    this.slabs = database.list('slabs');
  }
  addSlab(newSlab: Slab) {
   this.slabs.push(newSlab);
  }
  getSlabs(){
    return this.slabs;
  }


}
