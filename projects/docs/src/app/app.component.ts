import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <docs-app>
    <ng-template docsBrandHeader>
      <h3 class="brand-area">NG Playground</h3>
    </ng-template>
    <li><a href="https://github.com/kevinmerckx/ng-playground"><i class="fa fa-github" aria-hidden="true"></i> Github</a></li>
  </docs-app>
  `,
  styles: []
})
export class AppComponent {
}
