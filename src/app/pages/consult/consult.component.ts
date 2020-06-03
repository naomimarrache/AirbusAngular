import { Component, OnInit } from '@angular/core';
import { Ressource } from './Ressource';
import { ApiService } from 'src/service/api.service';

@Component({
  selector: 'app-consult',
  templateUrl: './consult.component.html',
  styleUrls: ['./consult.component.scss']
})
export class ConsultComponent implements OnInit {
  ressources: Array<Ressource> ;
  selectedRessource: Ressource;


  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
     this.apiService.getRessources().subscribe((res) => {
        // console.log(res);
        this.ressources = res;
      });
  }

  onSelect(ressource: Ressource): void {
    this.selectedRessource = ressource;
  }

  deleteRessource(id: number): void {
    this.apiService.deleteRessource(id).subscribe((res) => {
      // console.log(res);
    });
  }
}
