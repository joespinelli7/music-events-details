import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'priceRange'
})
export class PriceRangePipe implements PipeTransform {

  // pipe filter used to return string of price range description based off price of event's ticket.
  transform(value: number, ...args: any[]): string {
    if (value > 200) {
      return 'Expensive';
    } else if (value <= 200 && value > 100) {
      return 'Average';
    } else {
      return 'Cheap';
    }
  }

}
