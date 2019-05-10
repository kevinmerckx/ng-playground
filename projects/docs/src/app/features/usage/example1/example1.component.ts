import { Component } from '@angular/core';
import { EditorConfiguration } from '../../../../../../ng-playground/src/public_api';

@Component({
  selector: 'app-example1',
  templateUrl: './example1.component.html',
  styleUrls: ['./example1.component.sass']
})
export class Example1Component {
  config: EditorConfiguration = {
    values: [
      { type: 'string', initialValue: 'Here is #1', name: 'value1' },
      { type: 'number', initialValue: 667, name: 'value2' }
    ]
  }
}
