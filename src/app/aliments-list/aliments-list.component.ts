import {
  Component,
  OnInit
} from '@angular/core';
import {
  AlimentService
} from '../aliment.service';
import {
  FormGroup,
  FormBuilder
} from '@angular/forms';

@Component({
  selector: 'app-aliments-list',
  templateUrl: './aliments-list.component.html',
  styleUrls: ['./aliments-list.component.css']
})
export class AlimentsListComponent implements OnInit {
  sortForm: FormGroup;

  myAlimentsList = this.alimentsService.myAliments.sort(this.tri);
  // myAlimentList;
  constructor(private alimentsService: AlimentService,
    private formBuilder: FormBuilder,
  ) {
    this.sortForm = this.formBuilder.group({
      sortCriteria: ''
    });
  }

  ngOnInit() {
    // this.myAlimentsList= this.alimentsService.getAlimentsList()
  }
  tri(a, b) {
    if (a < b) return -1;
    if (a > b) return 1;
  }

  deleteAliment(ind) {
    this.myAlimentsList.splice(ind, 1);
  }

  sortAliment(criteria) {
    console.log(criteria);
    //this.myAlimentsList.sort(criteria); 
  }

}
