import {Component,OnInit} from '@angular/core';
import {AlimentService} from '../aliment.service';
import {FormGroup,FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-aliments-list',
  templateUrl: './aliments-list.component.html',
  styleUrls: ['./aliments-list.component.css']
})
export class AlimentsListComponent implements OnInit {
  sortForm: FormGroup;

  aliments = this.alimentsService.aliments.sort(this.alimentsService.tri);
  // aliments = this.alimentsService.aliments);
  // aliments;

  constructor(private alimentsService: AlimentService,
    private formBuilder: FormBuilder,
  ) {
    this.sortForm = this.formBuilder.group({
      sortCriteria: ''
    });
  }

  ngOnInit() {
    // this.aliments= this.alimentsService.getAlimentsList()  
    console.log("critere : "+this.alimentsService.getSortCriteria()) ;  // recupération de la charge calculée

  }


  // tri(a, b) {
  //   console.log("Dans tri");
  //   // console.log("criteria : "+this.sortForm.sortCriteria);
  //   return (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0);
  //   return (a.ig > b.ig) ? 1 : ((b.ig> a.ig) ? -1 : 0);
  //   return (a.carbs > b.carbs) ? 1 : ((b.carbs> a.carbs) ? -1 : 0);
  // }

  deleteAliment(ind) {
    this.aliments.splice(ind, 1);
  }

  sortAliment(criteria) {  //declanché sur onChange sur le select du critere de tri.
    console.log("criteria : "+criteria);
    console.log("this.sortForm : "+this.sortForm);
    // this.aliments.sort(this.alimentsService.tri); 
    this.aliments = this.alimentsService.aliments.sort(this.alimentsService.tri);
  }

}
