import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais-interface';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styleUrls: ['./por-region.component.css']
})
export class PorRegionComponent implements OnInit {

  regiones: string[] = [`EU`, `EFTA`, `CARICOM`, `PA`, `AU`, `USAN`, `EEU`, `AL`, `ASEAN`, `CAIS`, `CEFTA`, `NAFTA`, `SAARC`];
  regionActiva: string = ``;
  paises: Country[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  getClaseCSS( region: string): string{
    return (region === this.regionActiva) ? 'btn btn-primary': 'btn btn-outline-primary'
  }

  activarRegion( region: string ) {
    this.regionActiva = region;
  }

}
