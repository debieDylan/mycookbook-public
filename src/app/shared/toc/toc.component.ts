import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-toc',
  templateUrl: './toc.component.html',
  styleUrls: ['./toc.component.scss'],
})
export class TocComponent implements OnInit {

  constructor(public modalController: ModalController) { }

  ngOnInit() {}

  dismiss(): void {
    this.modalController.dismiss({
      'dismissed': true
    })
  }

}
