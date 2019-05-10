import { Component, Input, OnChanges, TrackByFunction } from '@angular/core';
import { ValuesService } from '../../services/values.service';

export interface EditorConfiguration {
  values: ValueConfigItem<any>[];
}

interface ValueConfigItem<V> {
  name: string;
  type: 'string' | 'number';
  initialValue: V;
}

/**
 * Provides a container for a playground page that displays a form to edit values. Those values are then available in the component.
 */
@Component({
  selector: 'pg-value-editor',
  templateUrl: './value-editor.component.html',
  styleUrls: ['./value-editor.component.sass']
})
export class ValueEditorComponent implements OnChanges {
  /**
   * Configuration for the editor.
   */
  @Input() config: EditorConfiguration;

  values: {key: string, value: string}[];

  constructor(private valuesService: ValuesService) {
  }

  /**
   * @ignore
   */
  ngOnChanges() {
    const valuesMap = new Map<string, any>();
    ((this.config || { values: []}).values || []).forEach(c => {
      valuesMap.set(c.name, c.initialValue);
    });
    this.valuesService.set(valuesMap);
    this.values = this.valuesService.getValues();
  }

  /**
   * @ignore
   */
  getType(value: { key: string }) {
    return this.config.values.find(v => v.name === value.key).type;
  }

  /**
   * @ignore
   */
  onSubmit() {
    const valuesMap = new Map<string, any>();
    this.values.forEach(c => {
      valuesMap.set(c.key, c.value);
    });
    this.valuesService.set(valuesMap);
  }

  /**
   * @ignore
   */
  onChange(value: { key: string }, $event: any) {
    this.values = this.values.map(v => v.key === value.key ? { ...v, value: $event} : v);
  }

  trackBy: TrackByFunction<{key: string}> = (_index: number, item) => {
    return item.key;
  }

}
