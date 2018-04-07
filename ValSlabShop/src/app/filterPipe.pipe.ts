import {Pipe, PipeTransform} from '@angular/core';
import {Slab} from './slab.model';

@Pipe({
  name: "filter",
  pure: false
})

export class FilterPipe implements PipeTransform {
  transform(input: Slab, filterVariable, filterAmount) {
    var output: Slab[];
}
}
