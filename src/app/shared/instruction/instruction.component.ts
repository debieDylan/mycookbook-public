import { AfterContentChecked, AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ModalController } from '@ionic/angular';
import SwiperCore, { Pagination, SwiperOptions, Navigation } from 'swiper';
import { SwiperComponent } from 'swiper/angular';

SwiperCore.use([Pagination, Navigation])
@Component({
  selector: 'app-instruction',
  templateUrl: './instruction.component.html',
  styleUrls: ['./instruction.component.scss'],
})
export class InstructionComponent implements OnInit, AfterContentChecked {

  instructions: string[]
  @ViewChild('swiper', { static: false }) swiper?: SwiperComponent
  isFirstChild: boolean = true
  isLastChild: boolean = false
  config: SwiperOptions = {
    slidesPerView: 1,
    spaceBetween: 50,
    pagination: {
      clickable: true
    },
    observer: true,
    observeParents: true,
    navigation: {
      nextEl: '.swiper-button-next-unique',
      prevEl: '.swiper-button-prev-unique'
    }
  }

  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }

  ngAfterContentChecked(): void {
    if (this.swiper) {
      this.swiper.updateSwiper({})
    }
  }

  slideChanged(e: any) {
    this.isFirstChild = e[0].activeIndex === 0 ? true : false
    this.isLastChild = e[0].activeIndex === (this.instructions.length - 1) ? true : false
    this.swiper.updateSwiper({})

  }

  dismiss(): void {
    this.modalController.dismiss({
      'dismissed': true
    })
  }
}
