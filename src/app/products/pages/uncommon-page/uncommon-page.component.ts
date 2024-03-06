import { Component } from '@angular/core';
import { Observable, interval, tap, timeout } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css'
})
export class UncommonPageComponent {
  // i18nSelect
  public name: string = 'Sergio'
  public gender: 'male' | 'female' = 'male'
  public invitationMap = {
    male: 'invitarlo',
    female: 'invitarla'
  }

  changeClient(): void {
    this.name = 'Melissa';
    this.gender = 'female';
  }

  // i18nPlural
  public clients: string[] = ['Sergio', 'Guille', 'Maria', 'Carmen', 'Charly', 'Verdu', 'Elena']
  public clientsMap = {
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    'other': `tenemos # clientes esperando.`
  }

  deleteClient(): void {
    this.clients.shift()
  }

  // KeyValue
  public person = {
    name: 'Sergio',
    age: 36,
    address: 'Madrid, Spain'
  }

  // Async
  public myObservableTimer: Observable<number> = interval(2000).pipe(
    tap(value => console.log('tap:', value))
  );

  public promiseValue: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('tenemos data en la promesa')
    }, 3500)
  })
}
