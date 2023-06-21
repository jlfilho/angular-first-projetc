import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnChanges {

  @Input() public title: string = "Bem vindo!!!";

  ngOnChanges(changes: SimpleChanges): void {
    console.log("ngOnChanges foi executado!");
  }

}
