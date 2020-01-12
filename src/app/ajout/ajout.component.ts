import {Component,OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';

import {FormBuilder} from '@angular/forms';

import {AlimentService} from '../aliment.service';
import {Aliment} from '../aliment';

@Component({
  selector: 'app-ajout',
  templateUrl: './ajout.component.html',
  styleUrls: ['./ajout.component.css']
})
export class AjoutComponent implements OnInit {
  addForm: FormGroup;
  aliments: Aliment[];


  constructor(
    private alimentService: AlimentService,
    private formBuilder: FormBuilder,
  ) {
    this.addForm = this.formBuilder.group({
      ig: 0,
      carbs: 0,
      name: ''
    });
  }

  ngOnInit() {
    this.aliments = this.alimentService.aliments;
  }

  onSubmit(newAliment) {
    if (newAliment.name) {  // ne stocke newAliment dans aliments que si un nom a été saisi
      this.aliments.push(newAliment);
      // this.aliments.sort(); 
    }
  }

}
