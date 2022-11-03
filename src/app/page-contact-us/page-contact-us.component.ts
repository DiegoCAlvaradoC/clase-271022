import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators} from '@angular/forms';
@Component({
  selector: 'app-page-contact-us',
  templateUrl: './page-contact-us.component.html',
  styleUrls: ['./page-contact-us.component.css']
})
export class PageContactUsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  formularioUno = new FormGroup({
    nombre : new FormControl(''),
    correo : new FormControl(''),
    numero : new FormControl('')
}); 

  sent(): void {
    alert('Su Mensaje Fue enviado '+this.formularioUno.value.nombre);
  }

}
