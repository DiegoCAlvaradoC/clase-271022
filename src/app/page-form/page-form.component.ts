import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators} from '@angular/forms';
@Component({
  selector: 'app-page-form',
  templateUrl: './page-form.component.html',
  styleUrls: ['./page-form.component.css']
})
export class PageFormComponent implements OnInit {

  constructor() { }
  id = '';
  data = { 'imagePath': '', 'name': '', 'price': 0, 'discount': 0 };

  imagePath = '';
  name = '';
  price = 0;
  discount = 0;
  total = 0;
  ngOnInit(): void {
    this.id = window.location.href.split('#')[1];
    if (this.id != null) {
      this.data = loadField(this.id);
      this.imagePath = this.data.imagePath;
      this.name = this.data.name;
      this.price = this.data.price;
      this.discount = this.data.discount * 100;
      this.total = this.price - (this.price * this.discount / 100);
    }
  }

  formularioUno = new FormGroup({
    nombre : new FormControl(''),
    correo : new FormControl(''),
    numero : new FormControl('')
}); 
  sent(): void {
    alert('Su compra del '+this.data.name+' fue realizada con exito '+ this.formularioUno.value.nombre);
  }

}

function loadField(id: string): any {
  switch (id) {
    case '1':
      return { 'imagePath': 'assets/moto1.webp', 'name': 'Moto g32 plateada', 'price': 3550, 'discount': 0.1 };
    case '2':
      return { 'imagePath': 'assets/moto2.jpg', 'name': 'Moto d32 con Carga', 'price': 3000, 'discount': 0.1 };
    case '3':
      return { 'imagePath': 'assets/moto3.png', 'name': 'Motoc34 remodelado', 'price': 4000, 'discount': 0.1 };
    case '4':
      return { 'imagePath': 'assets/moto4.webp', 'name': 'Moto c32 Negra ', 'price': 8000, 'discount': 0.15 };
    case '5':
      return { 'imagePath': 'assets/moto5.jpg', 'name': 'Moto de Carreras c345', 'price': 6999, 'discount': 0.1 };
    case '6':
      return { 'imagePath': 'assets/moto6.png', 'name': 'Roja Urbana c35', 'price': 7999, 'discount': 0.1 };
    case '7':
      return { 'imagePath': 'assets/moto7.webp', 'name': 'Azul clamante d89', 'price': 8999, 'discount': 0.1 };
    case '8':
      return { 'imagePath': 'assets/moto8.webp', 'name': 'Roja de Carreras j89', 'price': 10000, 'discount': 0.15 };
    case '9':
      return { 'imagePath': 'assets/scooter.jpg', 'name': 'Scooter d89', 'price': 2000, 'discount': 0.30 };
    case '10':
      return { 'imagePath': 'assets/crossenduro.jpg', 'name': 'Cross&Enduro f67', 'price': 2500, 'discount': 0.30 };
    case '11':
      return { 'imagePath': 'assets/urbanas.jpg', 'name': 'Urbana k98', 'price': 2100, 'discount': 0.30 };
    case '12':
      return { 'imagePath': 'assets/bratstyle.jpg', 'name': 'Bratstyle f34', 'price': 2999, 'discount': 0.30 };
  }
}