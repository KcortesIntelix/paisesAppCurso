import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
})
export class PorCapitalComponent implements OnInit {


  termino: string = '';
  isError: boolean= false;
  paises : Country[]=[];
  constructor(private paisService: PaisService) { }

  ngOnInit(): void {
  }

  buscar(termino: string){
    this.isError = false;
    console.log(termino);
    this.paisService.buscarCapital(termino).subscribe( resp =>{
      console.log(resp)
      this.paises = resp;
    },
    err =>{
      this.isError=true;
      this.termino = termino;
      this.paises =[];
    });
  }
  sugerencias(termino: string){
    this.isError=false   ;
  }


}
