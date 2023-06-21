import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {
  public mudar = true;
  public titulo = "Bem Vindo!!!";
  public destruir: boolean = true;

  public buttonComponent: string = "Destruir componente"
  public buttonTitle: string = "Trocar título"

  public destruirComponent(): void {
    this.destruir = !this.destruir;
    if(this.destruir) {
      this.buttonComponent = "Destruir componente";
    } else {
      this.buttonComponent = "Recriar componente";
    }
  }

  public mudarTitulo(): void {
    this.mudar = !this.mudar;
    if(this.mudar) {
      this.titulo = "Bem Vindo!!!";
    } else {
      this.titulo = "Olá mundo!!!";
    }
  }

}
