import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/service/api.service';
import { Ressource } from '../consult/Ressource';
import { FormBuilder  } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  ressource: Ressource ;
  submitted = false;
  createForm;

  constructor(private apiService: ApiService,
              private formBuilder: FormBuilder,
              private router : Router) {
                this.createForm = this.formBuilder.group({
                  version: 'A300F',
                  longueur: 22,
                  famille: 'A300'
                });
              }

  ngOnInit(): void {
  }
  
  onSubmit(ressource: Ressource) {
    this.apiService.createRessource(ressource)
          .subscribe(
            //success
            data => {
              this.router.navigate(['/consult']);
            },
            // error
            error => {
              alert('Error' + error.error);
              console.log('Error occured', error);
              //afficher message sur IHM
            }
          );
    }
  
    
  



}

