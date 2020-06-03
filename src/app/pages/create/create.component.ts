import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/service/api.service';
import { Ressource } from '../consult/Ressource';
import { FormBuilder  } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.sass']
})
export class CreateComponent implements OnInit {
  ressource: Ressource ;
  submitted = false;
  ressourceForm;

  constructor(private apiService: ApiService,
              private formBuilder: FormBuilder) {
                this.ressourceForm = this.formBuilder.group({
                  name: 'Nemo test',
                  age: '1',
                  category: 'Fich'
                });
              }

  ngOnInit(): void {
  }

  onSubmit(ressource: Ressource) {
    this.apiService.createRessource(ressource)
          .subscribe(
            (res) => {
                    console.log(res);
                  });
    this.submitted = true;
    this.ressourceForm.reset();
    }

}
