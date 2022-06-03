import { Directive, HostListener } from '@angular/core';

@Directive({
  // ao colocar o au-fa-input input, essa diretiva apontará para todos os inputs que estão contidos dentro do au-fa-input, veja lá no componente pai
  selector: 'au-fa-input input'
})
export class InputRefDirective {

  isFocused: boolean = false;

  constructor() { }

  // o HostListener fica escutando eventos 'de css' no componente pai, e com isso conseguimos alterar o CSS do elemento via TS, passando parâmetro para o CSS!
  // Veja o HostBinding no elemento que está utilizando esta diretiva
  @HostListener('focus')
  onFocus() {
    console.log('focus event')
    this.isFocused = true;
  }

  @HostListener('blur')
  onBlur() {
    this.isFocused = false;
    console.log('blur event')
  }

  @HostListener('click')
  onClick() {
    console.log('element clicked')
  }
}
