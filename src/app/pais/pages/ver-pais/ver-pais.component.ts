
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
})
export class VerPaisComponent implements OnInit {

  constructor(private PaisService: PaisService,private activateRoute: ActivatedRoute) { }

  ngOnInit(): void {

    this.activateRoute.params.pipe(
      switchMap(({id}) => this.PaisService.pais(id))
    ).subscribe(resp=>{
      console.log(resp)
    })

    // this.activateRoute.params.subscribe(
    //  ({id}) =>{ console.log(id);
    //  this.PaisService.pais(id).subscribe(
    //   valor => console.log(valor)
    //  );

    //  }
    // )

  }

}
