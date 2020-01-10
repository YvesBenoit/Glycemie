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
import {
  Portion
} from '../portion';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})

export class CalculatorComponent implements OnInit {

  portionDefinitionForm: FormGroup;
  myAlimentsList = this.alimentsService.myAliments;
  globalCharge;
  portionsList: Portion[] = this.alimentsService.Portions;

  constructor(private alimentsService: AlimentService,
    private formBuilder: FormBuilder, ) {
    this.portionDefinitionForm = this.formBuilder.group({
      aliment: '',
      portion: ''
    });

  }

  ngOnInit() {
    this.globalCharge = this.alimentsService.getGlobalCharge();
  }

  onSubmit(formPortion) {
    this.alimentsService.calcul(formPortion,this.portionsList);
    this.globalCharge=this.alimentsService.getGlobalCharge();
  }

  deletePortion(ind) {
    this.globalCharge -= this.portionsList[ind].calculatedCharge;
    this.portionsList.splice(ind, 1);
  }

}
