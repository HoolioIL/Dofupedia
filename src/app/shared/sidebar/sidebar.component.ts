import { Component, OnInit } from '@angular/core';


interface MenuItem {
  text: string,
  route: string,
  icon: string
}


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  linkList: MenuItem[] =  [
    // {
    //   text: 'Inicio',
    //   route: '/dashboard',
    //   icon: 'mdi mdi-home'
    // },
    {
      text: 'Clases',
      route: '/dashboard/clases',
      icon: 'mdi mdi-account-group'
    },
    {
      text: 'Equipamiento',
      route: '/dashboard/equipamientos',
      icon: 'mdi mdi-hanger'
    },
    {
      text: 'Armas',
      route: '/dashboard/armas',
      icon: 'mdi mdi-sword'
    },
    {
      text: 'Mascotas',
      route: '/dashboard/mascotas',
      icon: 'mdi mdi-paw'
    },


  ];


  constructor() { }

  ngOnInit(): void {
  }




}
