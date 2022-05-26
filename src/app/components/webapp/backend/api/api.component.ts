import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css']
})
export class ApiComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  node(){
    this.router.navigate(['node']);
  }
  python(){
    this.router.navigate(['python']);
  }
}
