import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent,IonButton } from '@ionic/angular/standalone';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent,IonButton,CommonModule],
})
export class HomePage {
  constructor() {}

  imageUrl: string |undefined;

  async takePicture(){
    const image = await Camera.getPhoto
    ({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.Uri, // Keluarkan URL gambar
      source: CameraSource.Camera
    });

    this.imageUrl = image.webPath;
  }

  async selectImage(){
    const image = await Camera.getPhoto
    ({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.Uri, // Keluarkan URL gambar
      source: CameraSource.Photos
    });

    this.imageUrl = image.webPath;
  }
}
