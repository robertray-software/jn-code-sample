import { TestBed } from '@angular/core/testing';

import { CheckForPairedBracketsService } from './check-for-paired-brackets.service';

describe('CheckForPairedBracketsService', () => {
  let service: CheckForPairedBracketsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CheckForPairedBracketsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('allBracketsArePaired should return true for string "{}"', () => {
    expect(service.allBracketsArePaired('{}')).toBeTrue();
  });

  it('allBracketsArePaired should return false for string "}{"', () => {
    expect(service.allBracketsArePaired('}{')).toBeFalse();
  });

  it('allBracketsArePaired should return false for string "{{}"', () => {
    expect(service.allBracketsArePaired('{{}')).toBeFalse();
  });

  it('allBracketsArePaired should return true for string ""', () => {
    expect(service.allBracketsArePaired('')).toBeTrue();
  });

  it('allBracketsArePaired should return true for string "{{}}"', () => {
    expect(service.allBracketsArePaired('{{}}')).toBeTrue();
  });

  it('allBracketsArePaired should return false for string "{"', () => {
    expect(service.allBracketsArePaired('{')).toBeFalse();
  });

  it('allBracketsArePaired should return false for string "}"', () => {
    expect(service.allBracketsArePaired('}')).toBeFalse();
  });

  it('allBracketsArePaired should return true for string "foo"', () => {
    expect(service.allBracketsArePaired('foo')).toBeTrue();
  });

  it('allBracketsArePaired should return false for string "{a"', () => {
    expect(service.allBracketsArePaired('{a')).toBeFalse();
  });

  it('allBracketsArePaired should return false for string "}a"', () => {
    expect(service.allBracketsArePaired('}a')).toBeFalse();
  });

  it('allBracketsArePaired should return false for string "{}}"', () => {
    expect(service.allBracketsArePaired('{}}')).toBeFalse();
  });

  it('allBracketsArePaired should return false for string "{{}"', () => {
    expect(service.allBracketsArePaired('{{}')).toBeFalse();
  });
});
