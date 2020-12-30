export class Persona {
    // private nombre:string;
    // private edad:number;
    private nss:string;
    // private sexo:string;
    // private peso:number;
    // private altura:number;
  
    constructor(private nombre:string, private edad:number, private sexo:string, private peso:number, private altura:number) { 
      
    }
  
    calcularIMC(){
      const bajoPeso = -1;
      const pesoIdeal = 0;
      const sobrePeso = 1;
      var data = {};
      var imc = this.peso/Math.pow(this.altura, 2);
      var imcFixed = parseFloat(imc.toFixed(2));
      console.log(imc.toFixed(2));
      if(this.sexo == "M"){
        if(imcFixed < 19 ){
          data = {
            "imc": imcFixed,
            "peso": bajoPeso
          };
          return data;
        }else if(imcFixed >= 19 && imcFixed <= 24){
          data = {
            "imc": imcFixed,
            "peso": pesoIdeal
          };
          return data;
        }else{
          data = {
            "imc": imcFixed,
            "peso": sobrePeso
          };
          return data;
        }
      }else if(this.sexo == "H"){
        if(imcFixed < 20 ){
          data = {
            "imc": imcFixed,
            "peso": bajoPeso
          };
          return data;
        }else if(imcFixed >= 20 && imcFixed <= 25){
          data = {
            "imc": imcFixed,
            "peso": pesoIdeal
          };
          return data;
        }else{
          data = {
            "imc": imcFixed,
            "peso": sobrePeso
          };
          return data;
        }
      }
    }
  
    esMayorDeEdad(){
      if(this.edad >= 18){
        return true;
      }else{
        return false;
      }
    }
  
    comprobarSexo(){
      if(this.sexo == "M"){
        return "Mujer";
      }else if(this.sexo == "H"){
        return "Hombre"
      }else{
        return "No valido";
      }
    }
  
    toString(){
        this.nss = this.generaNSS();
      return {"Nombre":this.nombre, "Edad": this.edad, "NSS": this.nss, "Sexo": this.sexo, "Peso":this.peso, "Altura":this.altura};
    }
  
    generaNSS(){
      var nss = new Array(8).join().replace(/(.|$)/g, function(){return ((Math.random()*36)|0).toString(36);}) 
      return nss;
    }
  }
  