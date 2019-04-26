import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ValuesService {
  private valuesSubject = new BehaviorSubject<Map<string, any>>(new Map());

  get values$() {
    return this.valuesSubject.pipe(map(values => {
      const result: { key: string, value: any }[] = [];
      values.forEach((value, key) => {
        result.push({
          value, key
        });
      });
      return result;
    }));
  }

  getValues() {
    const result: { key: string, value: any }[] = [];
    this.valuesSubject.value.forEach((value, key) => {
      result.push({
        value, key
      });
    });
    return result;
  }

  set(value: Map<string, any>) {
    this.valuesSubject.next(value);
  }

  setValue(key: string, value: any) {
    const newMap = new Map(this.valuesSubject.value);
    newMap.set(key, value);
    this.valuesSubject.next(newMap);
  }

  getValue(key: string) {
    return this.valuesSubject.value.get(key);
  }

  getValueAsObservable(key: string): Observable<any> {
    return this.valuesSubject.pipe(map(s => s.get(key)));
  }
}
