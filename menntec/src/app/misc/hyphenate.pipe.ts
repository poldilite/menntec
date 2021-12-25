import { Pipe, PipeTransform } from '@angular/core';
import { hyphenate, hyphenateSync } from 'hyphen/de';

@Pipe({
  name: 'hyphenate',
})
export class HyphenatePipe implements PipeTransform {
  transform(value: string): string {
    const hyphenText = hyphenateSync(value);

    return hyphenText;
  }
}
