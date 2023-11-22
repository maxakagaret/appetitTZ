import { Component} from '@angular/core';
import { IonButtons, IonButton, IonContent, IonToolbar, IonHeader, IonTitle, IonModal, ModalController } from '@ionic/angular/standalone';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  standalone: true,
  imports: [IonButtons, IonButton, IonContent, IonToolbar, IonHeader, IonTitle, IonModal]
})
export class ModalComponent {

  constructor(private modalController: ModalController) { }
  title = "Модальное окно 1";
  text = "Тест";
  closeLabel = "Закрыть";
  
  close() {
    return this.modalController.dismiss(null, 'cancel');
  }

}
