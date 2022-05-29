import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SwiperComponent } from 'swiper/angular';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.scss'],
})
export class HelpComponent implements OnInit {

  @ViewChild('swiper', { static: false }) swiper?: SwiperComponent

  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }

  dismiss(): void {
    this.modalController.dismiss({
      'dismissed': true
    })
  }

}
