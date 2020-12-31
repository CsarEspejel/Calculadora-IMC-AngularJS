import { Component, OnInit } from '@angular/core';
import { Persona } from '../persona';

@Component({
  selector: 'app-root',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {
  header = 'Formulario';
  imcData:any;
  imcMessage:object;
  mayorEdad:boolean;
  edadMessage:string;
  comprobarSexo:string;
  datos:object;
  show:boolean = false;

  constructor() { 

  }

  obtenerInformacion(nombre, edad, sexo, peso, altura){
    // console.log(nombre.value, edad.value, sexo.value, peso.value, altura.value)
    const persona = new Persona(nombre.value, edad.value, sexo.value, peso.value, altura.value);
    this.imcData = persona.calcularIMC();
    this.imcMessage = this.imcConvert();

    this.mayorEdad = persona.esMayorDeEdad();
    this.edadMessage = this.edadConvert();

    this.comprobarSexo = persona.comprobarSexo();
    
    this.datos = persona.toString();
    console.log(this.datos);
    return false;
  }

  imcConvert(){
    this.show = true;
    let data:object = {};
    if(this.imcData.peso == -1){
      data = {
        "message": "Estás bajo de peso :( hay que estar al tanto de eso.",
        "imc": this.imcData.imc
      }
      return data;
    }else if(this.imcData.peso == 0){
      data = {
        "message": "Genial!! te encuentras en tu peso ideal :)",
        "imc": this.imcData.imc
      }
      return data;
    }else if(this.imcData.peso == 1){
      data = {
        "message": "Cuidado ahí, tienes sobrepeso!!",
        "imc": this.imcData.imc
      }
      return data;
    }else{
      return {"message": "Esperando tus datos para saber tu IMC..."};
    }
  }

  edadConvert(){
    if(this.mayorEdad == true){
      return "Vaya vaya, que tenemos aquí, a un mayor de edad!!"
    }else{
      return "Aún eres menor de edad por lo que se ve :o"
    }
  }

  ngOnInit(): void {
  }

}
