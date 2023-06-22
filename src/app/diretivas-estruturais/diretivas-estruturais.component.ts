import { Component } from '@angular/core';

@Component({
  selector: 'app-diretivas-estruturais',
  templateUrl: './diretivas-estruturais.component.html',
  styleUrls: ['./diretivas-estruturais.component.scss']
})
export class DiretivasEstruturaisComponent {
  public imgSrc: string = "./assets/img1.png"
  public mostrar: boolean = true;

  public novoItem: string = ""
  public list: Array<{nome: string}> = [
    {nome: "Teclado"},
    {nome: "Mouse"},
    {nome: "Monitor"},
    {nome: "Webcam"},
    {nome: "Pendrive"}
  ]

  public imagemSelecionada: string = "carro";

  public ocultarImg():void {
    if (this.mostrar==true) {
      this.mostrar=false;
    } else {
      this.mostrar=true;
    }
  }

  public onClickEventList(index: number): void {
    this.list.splice(index, 1);
  }

  public AdicionarItem(): void {
    this.list.push({nome: this.novoItem});
  }


}
