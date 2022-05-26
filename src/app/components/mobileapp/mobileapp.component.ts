import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mobileapp',
  templateUrl: './mobileapp.component.html',
  styleUrls: ['./mobileapp.component.css']
})
export class MobileappComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  flutter(){
    this.router.navigate(['flutter']);
  }
  reactnative(){
    this.router.navigate(['react-native']);
  }

}
