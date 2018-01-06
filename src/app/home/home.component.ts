import { Component, OnInit } from '@angular/core';
import { trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations'
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [

    trigger('contentTabs', [
          transition('* => *', [
              query(':enter', style({opacity: 0}), {optional: true}),

              query(':enter', stagger('300ms', [
                  animate('.6s ease-in', keyframes([
                      style({opacity: 0, transform: 'translateY(75%)', offset: 0}),
                      style({opacity: .5, transform: 'translateY(35px)', offset: .3}),
                      style({opacity: 1, transform: 'translateY(0)', offset: 1})
                  ]))
              ]), {optional: true}),

              query(':leave', stagger('300ms', [
                animate('.6s ease-out', keyframes([
                    style({opacity: 1, transform: 'translateY(0)', offset: 0}),
                    style({opacity: .5, transform: 'translateY(35px)', offset: .3}),
                    style({opacity: 0, transform: 'translateY(-75%)', offset: 1})
                ]))
            ]), {optional: true})
          ])
    ])

  ]
})
export class HomeComponent implements OnInit {

  randomText :string = "this is just random text"
  buttonText :string = "Add THE STUFF"
  moreRandomStuff :string = "MUHAHAHAHA"
  twoWayBindingString :string 
  randomArray = []
  started: boolean

  constructor(private _dataService :DataService) { }

  ngOnInit() {
    this.started = true;
    this._dataService.secondRandomStuff.subscribe( res => this.randomArray = res)
    this._dataService.setTheArray(this.randomArray)
  }

  doStuff() {
      this.randomArray.push(this.twoWayBindingString)
      this._dataService.setTheArray(this.randomArray)
  }

  removeItem( i :number){
    this.randomArray.splice(i, 1);
    this._dataService.setTheArray(this.randomArray)
  }
}
