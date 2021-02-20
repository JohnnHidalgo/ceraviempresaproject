import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goCooperativa(){
    this.router.navigate(["listcooperativa"])
  }

  goTipoTransporte(){
    this.router.navigate(["listtipotransporte"])
  }

  goTransporte(){
    this.router.navigate(["listtransporte"])
  }

  goLadrillo(){
    this.router.navigate(["listladrillo"])
  }

  goHorno(){
    this.router.navigate(["listhorno"])
  }

  goArcilla(){
    this.router.navigate(["listarcilla"])
  }

  goCliente(){
    this.router.navigate(["listcliente"])
  }

  goUbicacion(){
    this.router.navigate(["listubicacion"])
  }

  goTrabajador(){
    this.router.navigate(["listtrabajador"])
  }

  goAreaTrabajo(){
    this.router.navigate(["listareatrabajo"])
  }

  goGrupoTrabajo(){
    this.router.navigate(["listgrupotrabajo"])
  }

  goTrabajadorGrupoTrabajo(){
    this.router.navigate(["addtrabajadorgrupotrabajo"])
  }


}
