import { Aliment } from './aliment';

export interface Portion {
    aliment: Aliment;
    quantity: number;
    calculatedGlucideProportion: number;
    calculatedCharge: number;
}

