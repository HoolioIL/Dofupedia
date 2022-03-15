import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @ViewChild('refSidebar') sidebar!: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }


  showSidebar(){
    this.sidebar.nativeElement.classList.toggle('active');
    
  }

}
