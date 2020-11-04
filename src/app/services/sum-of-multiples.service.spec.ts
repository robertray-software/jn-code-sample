import { TestBed } from '@angular/core/testing';

import { SumOfMultiplesService } from './sum-of-multiples.service';

describe('SumOfMultiplesService', () => {
  let service: SumOfMultiplesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SumOfMultiplesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });


  it('Sum of multiples of 3 and 5 below 10 should be 23', () => {
    expect(service.sumOfMultiplesOf3And5(10)).toBe(23);
  });

  it('Sum of multiples of 3 and 5 below 20 should be 78', () => {
    expect(service.sumOfMultiplesOf3And5(20)).toBe(78);
  });

  it('Sum of multiples of 3 and 5 below 30 should be 195', () => {
    expect(service.sumOfMultiplesOf3And5(30)).toBe(195);
  });

  it('Sum of multiples of 3 and 5 below 40 should be 368', () => {
    expect(service.sumOfMultiplesOf3And5(40)).toBe(368);
  });

  it('Sum of multiples of 3 and 5 below 50 should be 543', () => {
    expect(service.sumOfMultiplesOf3And5(50)).toBe(543);
  });

  it(`sumOfMultiplesOf3And5Below1000 should be 233168`, () => {
    expect(service.sumOfMultiplesOf3And5Below1000()).toBe(233168);
  });

});
