import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-issuer-data',
  templateUrl: './issuer-data.component.html',
  styleUrls: ['./issuer-data.component.css']
})
export class IssuerDataComponent implements OnInit {

  @Output() closeModal = new EventEmitter<void>()
  /* public onClose$: Subject<boolean> = new Subject(); */
  data = ''

  constructor() { }

  ngOnInit(): void {
  }

  onCloseClick() {
    this.closeModal.emit()
  }

}
