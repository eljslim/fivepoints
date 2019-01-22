import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calcul',
  templateUrl: './calcul.component.html',
  styleUrls: ['./calcul.component.css']
})
export class CalculComponent implements OnInit {

  constructor() { }
  
  MontantAPayer = 0;
  MontantDonnee = 0;
  
  nbPiece50 = 0;
  nbPiece20 = 0;
  nbPiece10 = 0;
  nbPiece5 = 0;
  nbPiece1 = 0;
  reste = 0;
  
  btnClick(){
  this.reste =  this.MontantDonnee - this.MontantAPayer;
  this.nbPiece50 =this.calculRest(this.reste, 50).nb;
  this.reste =this.calculRest(this.reste, 50).rest;
  

   this.nbPiece20 =this.calculRest(this.reste, 20).nb;
  this.reste =this.calculRest(this.reste, 20).rest;

   this.nbPiece10 =this.calculRest(this.reste, 10).nb;
  this.reste =this.calculRest(this.reste, 10).rest;

   this.nbPiece5 =this.calculRest(this.reste, 5).nb;
 this.reste =this.calculRest(this.reste, 5).rest;

   this.nbPiece1 =this.calculRest(this.reste, 1).nb;
  this.reste =this.calculRest(this.reste, 1).rest;

  }
  
  calculRest(mnt, piece){
  return { 'nb' :  Math.floor(mnt/piece), 'rest' : mnt % piece }
  }

  ngOnInit() {
  }

}
