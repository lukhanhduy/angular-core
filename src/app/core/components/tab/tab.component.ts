import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tab',
  styles: [`
    .pane{
      padding: 1em;
      background: #ffffff !important;
    }
  `],
  template: `
    <div [hidden]="!active" class="pane">
      <ng-content></ng-content>
      <ng-container *ngIf="template"
        [ngTemplateOutlet]="template"
        [ngTemplateOutletContext]="{ person: dataContext }"
      >
      </ng-container>
    </div>
  `
})
export class TabComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  @Input('tabTitle') title: string;
  @Input() active = false;
  @Input() isCloseAble = false;
  @Input() template;
  @Input() dataContext;
}
