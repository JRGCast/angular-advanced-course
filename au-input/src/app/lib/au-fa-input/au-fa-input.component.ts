import { AfterContentInit, Component, ContentChild, HostBinding, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { InputRefDirective } from './common/input-ref.directive';

@Component({
  selector: 'au-fa-input',
  // o encapsulation serve para a configuração do DOM e estilos no browser, dando mais ou menos especificidade aos mesmos, o ViewEncapsulation.Emulated é o padrão.
  encapsulation: ViewEncapsulation.Emulated,
  templateUrl: './au-fa-input.component.html',
  styleUrls: ['./au-fa-input.component.scss']
})
export class AuFaInputComponent implements OnInit, AfterContentInit {

  @Input()
  icon: string;

  // é possível obter uma referência do próprio HTML aqui no content, o Angular disponibiliza tal função com o @ContentChild:
  // ** Versão 8 do Angular (que é o caso) o @ContentChild recebe dois parâmetros, que é a diretiva, a tag ou a referência no template + o {static: boolean}, e fará a referência ao conteúdo do ng-content.
  // @ContentChild('referInput', {static: false}) 
  // Porém isso não é escalável! Daí tentamos referenciar HTMLInputELement constantes na página...:
  // @ContentChild(HTMLInputElement, { static: false })
  // só que isso também não funciona, já que apenas aponta para o prototype do htmlinput
  // Por isso, para detectar elementos do template dentro do componente, utilizamos diretivas auxiliares com o ng g directive. Mas perceba que isso aponta apenas para a diretiva, não para o elemento DOM.
  @ContentChild(InputRefDirective, { static: false })
  input: InputRefDirective

  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit(): void {
    console.log('input', this.input) // veja que recebe o ElementRef, com todas as propriedades do input.
  }

  // podemos passar classes css como parâmetros ao HostBinding
  @HostBinding('class.input-focus') 
  get isInputFocused() {
    return this.input ? this.input.isFocused : false;
}

  get classes() {
  return this.icon ? `fa fa-${ this.icon }` : 'fa'
}
}
