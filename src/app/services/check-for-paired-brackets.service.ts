import { Injectable } from '@angular/core';
import {Stack} from '../classes/stack';

@Injectable({
  providedIn: 'root'
})
export class CheckForPairedBracketsService {

  constructor() { }

  allBracketsArePaired(theString: string): boolean {
    const closeBracket = '}';
    const openBracket = '{';
    const stack = new Stack(theString.length);
    try {
      for (const nextChar of theString) {
        if (nextChar === openBracket) {
          stack.push(nextChar);
        } else if (nextChar === closeBracket) {
          if (stack.pop() !== openBracket) {
            return false;
          }
        }
      }
    } catch (e) {
      return false;
    }
    return stack.isEmpty();
  }
}
