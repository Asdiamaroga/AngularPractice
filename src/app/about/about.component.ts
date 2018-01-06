import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  randomArray

  buttonText: string = " Routing using the router "

  constructor(private activatedRouter :ActivatedRoute, private router: Router, private _dataService :DataService) { 
      this.activatedRouter.params.subscribe( res => {
          console.log( res )
          console.log( res.id )
        }
      )
      this._dataService.secondRandomStuff.subscribe( res => this.randomArray = res)
  }

  ngOnInit() {
  }

  goToTheHomePage() {
    this.router.navigate([''])
  }

}
