import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [`.small-flag{
    width: 50px;
}`]
})
export class PorPaisComponent implements OnInit {


  termino: string = '';
  isError: boolean= false;
  paises : Country[]=[];
  constructor(private paisService: PaisService) { }

  ngOnInit(): void {
  }

  buscar(){
    this.isError = false;
    console.log(this.termino);
    this.paisService.buscarPais(this.termino).subscribe( resp =>{
      console.log(resp)
      this.paises = resp;
    },
    err =>{
      this.isError=true;
      this.paises =[];
    });
  }

}
