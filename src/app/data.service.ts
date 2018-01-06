import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';


@Injectable()
export class DataService {

  private randomStuff = new BehaviorSubject<any>(['asd', 'dadadasd', 'zxczxzxc'])
  secondRandomStuff = this.randomStuff.asObservable()

  constructor() { }

  setTheArray( stuff ){
    this.randomStuff.next( stuff )
  }

}
