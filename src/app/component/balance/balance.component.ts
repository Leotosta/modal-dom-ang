import { AfterViewInit, Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { IssuerFactoryService } from '../issuer-data/issuer.factory.service';

@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.css']
})
export class BalanceComponent implements OnInit, AfterViewInit {

  @ViewChild('issuerModal', { read: ViewContainerRef}) issuerModal !: ViewContainerRef

  constructor(private issuerData: IssuerFactoryService) { 

  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.issuerData.showModal(this.issuerModal, 'teste')
  }

  issuer() {
    this.issuerData.showModal(this.issuerModal, 'teste')
  }

}
