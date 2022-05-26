import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-webapp',
  templateUrl: './webapp.component.html',
  styleUrls: ['./webapp.component.css']
})
export class WebappComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  frontend(){
    this.router.navigate(['frontend']);
  }
  backend(){
    this.router.navigate(['backend']);
  }
}
