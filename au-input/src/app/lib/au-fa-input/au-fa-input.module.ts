import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputRefDirective } from './common/input-ref.directive';
import { AuFaInputComponent } from './au-fa-input.component';



@NgModule({
  declarations: [AuFaInputComponent, InputRefDirective],
  imports: [
    CommonModule
  ],
  exports: [AuFaInputComponent, InputRefDirective]
})
export class AuFaInputModule { }
