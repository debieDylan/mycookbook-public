import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SwiperComponent } from 'swiper/angular';

@Component({
  selector: 'app-instruction',
  templateUrl: './instruction.component.html',
  styleUrls: ['./instruction.component.scss'],
})
export class InstructionComponent implements OnInit {

  instructions: string[]
  index: number = 0
  @ViewChild('swiper', {static: false}) swiper?: SwiperComponent

  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }

  handleBack(): void {
    console.log(this.swiper)
    this.swiper.swiperRef.slidePrev(100)
  }

  handleContinue(): void {
    this.swiper.swiperRef.slideNext(100)
  }

  dismiss(): void {
    this.modalController.dismiss({
      'dismissed': true
    })
  }
}
