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

  getSlabById(slabId: string){
    return this.database.object('slabs/' + slabId);
  }
  updateSlab(localUpdatedSlab){
    var slabEntryInFirebase = this.getSlabById(localUpdatedSlab.$key);
    slabEntryInFirebase.update({species: localUpdatedSlab.species,
                                length: localUpdatedSlab.length,
                                width: localUpdatedSlab.width, depth: localUpdatedSlab.depth, price: localUpdatedSlab.price, description: localUpdatedSlab.description, imgUrl: localUpdatedSlab.imgUrl});
  }

}
