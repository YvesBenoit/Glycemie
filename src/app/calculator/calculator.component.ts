import {Component,OnInit} from '@angular/core';
import {AlimentService} from '../aliment.service';
import {FormGroup,FormBuilder} from '@angular/forms';
import {Portion} from '../portion';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})

export class CalculatorComponent implements OnInit {

  portionDefinitionForm: FormGroup;
  aliments = this.alimentsService.aliments;
  globalCharge;
  portions: Portion[] = this.alimentsService.portions;

  constructor(private alimentsService: AlimentService,
    private formBuilder: FormBuilder, ) {
    this.portionDefinitionForm = this.formBuilder.group({
      aliment: '',
      quantity: ''
    });

  }

  ngOnInit() {
    this.globalCharge = this.alimentsService.getGlobalCharge();  // recupération de la charge calculée
  }

  onSubmit(formPortion) {
    this.alimentsService.calcul(formPortion,this.portions);  //arg1 la nouvelle portion, Arg2 : les portions
    this.globalCharge=this.alimentsService.getGlobalCharge();  // recuperation de la nouvelle charge calculée
  }

  deletePortion(ind) {
    this.globalCharge -= this.portions[ind].calculatedCharge;  //décrement de la charge totale
    this.portions.splice(ind, 1);   // suppression de la portion dans les portions
  }

}
