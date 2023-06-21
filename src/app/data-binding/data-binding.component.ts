import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent {
  public nome:string = "Pedro";
  public idade:number = 20;

  public imgSrc: string = "./assets/img1.png"
  public idImg: string = "Oculta";

  public texto: string = "";

  public ocultarImg():void {
    if (this.idImg=="Oculta") {
      this.idImg="Visivel";
    } else {
      this.idImg="Oculta";
    }
    console.log(this.idImg);
  }

  public trocarImg():void {
    if (this.imgSrc=="./assets/img1.png") {
      this.imgSrc="./assets/img2.png";
    } else {
      this.imgSrc="./assets/img1.png";
    }
    console.log(this.imgSrc);
  }

}
