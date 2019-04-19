import { Pipe, PipeTransform, ChangeDetectorRef } from '@angular/core';
import { ValuesService } from '../services/values.service';
import { Subscription } from 'rxjs';

@Pipe({
  name: 'pgValue',
  pure: false
})
export class ValuePipe implements PipeTransform {
  private key: string;
  private currentValue: any;
  private subscription: Subscription;

  constructor(
    private values: ValuesService,
    private changeDetector: ChangeDetectorRef
  ) {

  }

  transform(key: any): any {
    if (this.key === key) {
      return this.currentValue;
    }
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
    this.subscription = this.values.getValueAsObservable(key).subscribe(value => {
      this.currentValue = value;
      this.changeDetector.markForCheck();
    });
    return this.currentValue;
  }

}
