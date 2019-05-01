import { Component, OnInit } from '@angular/core';
import { EditorConfiguration } from '../../../../projects/ng-playground/src/public_api';

@Component({
  selector: 'app-case-a',
  templateUrl: './case-a.component.html',
  styleUrls: ['./case-a.component.sass']
})
export class CaseAComponent implements OnInit {
  editorConfig: EditorConfiguration = {
    values: [{
      name: 'value1',
      type: 'string',
      initialValue: 'some'
    }, {
      name: 'value2',
      type: 'string',
      initialValue: 'some'
    }, {
      name: 'value3',
      type: 'string',
      initialValue: 'some'
    }, {
      name: 'value4',
      type: 'string',
      initialValue: 'some'
    }]
  };

  constructor() { }

  ngOnInit() {
  }

}
