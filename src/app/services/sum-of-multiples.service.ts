import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SumOfMultiplesService {

  constructor() { }

  sumOfMultiplesOf3And5(belowNumber: number): number {
    let sum = 0;
    for (let nextMultiple = 0; nextMultiple < belowNumber; nextMultiple += 3) {
      sum += nextMultiple;
    }
    for (let nextMultiple = 5; nextMultiple < belowNumber; nextMultiple += 5) {
      // We want to skip multiples of 5 that are also multiples of 3
      if (nextMultiple % 3 !== 0) {
        sum += nextMultiple;
      }
    }
    return sum;
  }

  sumOfMultiplesOf3And5Below1000(): number {
    return this.sumOfMultiplesOf3And5(1000);
  }

  sumOfMultiplesOf3And5Slower(belowNumber: number): number {
    let sum = 0;
    for (let n = 0; n < belowNumber; n++) {
      if (n % 3 === 0 || n % 5 === 0) {
        sum += n;
      }
    }
    return sum;
  }
}
