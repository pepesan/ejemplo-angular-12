import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl, ValidationErrors, FormGroup } from '@angular/forms';

@Directive({
  selector: '[passwordIgualesDirective]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: PasswordIgualesDirective,
    multi: true
  }]
})
export class PasswordIgualesDirective implements Validator {
  @Input('appCompareFields') fieldToCompare: string ="repeatPassword";

  validate(control: AbstractControl): ValidationErrors | null {
    const controlToCompare = control.root.get(this.fieldToCompare);

    if (controlToCompare && controlToCompare.value !== control.value) {
      return { 'fieldsNotMatch': true };
    }

    return null;
  }
}

