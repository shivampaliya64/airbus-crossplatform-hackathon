import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-db',
  templateUrl: './db.component.html',
  styleUrls: ['./db.component.css']
})
export class DbComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  mysql(){
    this.router.navigate(['mysql']);
  }
  mongodb(){
    this.router.navigate(['mongodb']);
  }

}
