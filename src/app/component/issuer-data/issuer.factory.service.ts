import { ComponentFactoryResolver, ComponentRef, Injectable, ViewContainerRef } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { IssuerDataComponent } from './issuer-data.component';

@Injectable({
  providedIn: 'root'
})
export class IssuerFactoryService {

  public componentRef: ComponentRef<IssuerDataComponent>;
  onClose$: Subscription

  constructor(private componentFactory: ComponentFactoryResolver) { }

   showModal(elementViewRef: ViewContainerRef, message: string) {
    const resolveFactory = this.componentFactory.resolveComponentFactory(IssuerDataComponent)
    elementViewRef.clear()
    this.componentRef = elementViewRef.createComponent(resolveFactory)
    this.componentRef.instance.data = message
    this.onClose$ = this.componentRef.instance.closeModal.subscribe(() => {
      this.onClose$.unsubscribe()
      elementViewRef.clear()
    })
  }


}
