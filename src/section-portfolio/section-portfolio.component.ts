import {Component, ElementRef, OnInit, OnDestroy} from '@angular/core';
import {Subscription} from 'rxjs';

import {ModalService} from '../services/modal.service';

@Component({
  selector: 'section-portfolio',
  templateUrl: './section-portfolio.component.ng.html',
  styleUrls: ['./section-portfolio.component.scss'],
  providers: [ModalService]
})
export class SectionPortfolioComponent implements OnInit, OnDestroy {
  /**
   * Subscription to the modal service.
   */
  modalSubscription: Subscription;

  constructor(private modalService: ModalService) {}

  ngOnInit() {
    this.modalSubscription = this.modalService.modalSubject.subscribe();
  }

  openModal(modalId: string) {
    this.modalService.open(modalId);
  }

  getModalId() {
    return this.modalService.getCurrentId();
  }

  ngOnDestroy() {
    this.modalSubscription.unsubscribe();
  }
}
