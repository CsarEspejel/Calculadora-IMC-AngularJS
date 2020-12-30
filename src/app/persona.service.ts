import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  private nombre:string;
  private edad:number;
  private nss:string;
  private sexo:string;
  private peso:number;
  private altura:number;

  constructor() { 
    console.log("Servicio funcionando")
  }

  calcularIMC(){
    const bajoPeso = -1;
    const pesoIdeal = 0;
    const sobrePeso = 1;
    let imc = this.peso/(this.altura*this.altura);

    if(this.sexo == "M"){
      if(imc < 19 ){
        return bajoPeso;
      }else if(imc >= 19 || imc <= 24){
        return pesoIdeal;
      }else{
        return sobrePeso;
      }
    }else if(this.sexo == "H"){
      if(imc < 20 ){
        return bajoPeso;
      }else if(imc >= 20 || imc <= 25){
        return pesoIdeal;
      }else{
        return sobrePeso;
      }
    }else{
      return "Ingresa un sexo válido";
    }
  }

  esMayorDeEdad(){
    if(this.edad >= 18){
      return true;
    }else{
      return false;
    }
  }

  comprobarSexo(sexo){
    if(sexo == "M"){
      return "Mujer";
    }else if(sexo == "H"){
      return "Hombre"
    }else{
      return "No valido";
    }
  }

  toString(){
    return JSON.stringify({"Nombre":this.nombre, "Edad": this.edad, "NSS": this.nss, "Sexo": this.sexo, "Peso":this.peso, "Altura":this.altura});
  }

  generaNSS(){
    var nss = new Array(5).join().replace(/(.|$)/g, function(){return ((Math.random()*36)|0).toString(36);}) 
    return nss;
  }
}
