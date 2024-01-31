import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  credenciais: any = {
    email: '',
    senha: ''
  }

  showPassword: boolean = false;

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  constructor(private router : Router, private alertController: AlertController) { }

  async presentAlert(header: string, subHeader: string, message: string) {
    const alert = await this.alertController.create({
      header: header,
      subHeader: subHeader,
      message: message,
      buttons: ['OK'],
    });

    await alert.present();
  }


  signup(){
    this.router.navigate(["/signup"]);
  }

  login(){
    this.presentAlert("Login", 'Bem vindo(a)', "");
    this.credenciais.email = '';
    this.credenciais.senha = '';
  }

}
