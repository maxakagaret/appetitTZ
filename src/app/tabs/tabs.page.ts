import { Component, EnvironmentInjector, inject } from '@angular/core';
import { IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel, IonModal, ModalController, IonButtons, IonButton, IonContent, IonToolbar, IonHeader, IonTitle } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { triangle, ellipse, square } from 'ionicons/icons';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
  standalone: true,
  imports: [IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel, IonModal, IonButtons, IonButton, IonContent, IonToolbar, IonHeader, IonTitle],
})

export class TabsPage {
  public environmentInjector = inject(EnvironmentInjector);
  
  constructor(private modalController: ModalController) {
    addIcons({ triangle, ellipse, square });
  }
  async openModal() {
    const modal = await this.modalController.create({
      component: ModalComponent,  
    });

    modal.present();
  }
}
