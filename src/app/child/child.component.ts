import { Component, EventEmitter, Output } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent {
  @Input() boxcolor: any;
  @Input() placeholder: any;

  @Output() inputEvent = new EventEmitter();

  count: number = 0;

  createTask(box: any) {
    if (box.value.length > 0) {
      this.count = this.count + 1;
      //alert(box.value);
      this.inputEvent.emit(box.value);
    }
  }
}
