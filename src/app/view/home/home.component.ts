import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public titulo!: string;
  public texto!: string;
  public tituloDestaque!: string;
  public textoDestaque!: string;

  constructor() { }

  ngOnInit(): void {
    this.titulo! = 'venha conhecer nosso diferencial';
this.texto! = 'Lorem Ipsum';
this.tituloDestaque! = 'que tal conhecer nosso';
this.textoDestaque! = 'lorem ipsum é simplesmente'
  }
  
}
