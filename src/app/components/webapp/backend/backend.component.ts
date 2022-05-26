import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-backend',
  templateUrl: './backend.component.html',
  styleUrls: ['./backend.component.css']
})
export class BackendComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  api(){
    this.router.navigate(['api']);
  }
  db(){
    this.router.navigate(['db']);
  }
}
