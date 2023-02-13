import { Component, Inject } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { DOCUMENT } from '@angular/common';

import { NgbModalConfig, NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'logout-button',
  templateUrl: './logout-button.html',
  providers: [NgbModalConfig, NgbModal, NgbActiveModal],
})
export class LogoutButtonComponent {
  constructor(
    @Inject(DOCUMENT) public document: Document,
    private auth: AuthService,
    config: NgbModalConfig, 
    public activeModal:NgbActiveModal,
    private modalService: NgbModal
    
    ){

      config.backdrop = 'static';
      config.keyboard = false;



  }

  modal:any;

  logout() {

    /*
    this.auth.logout({ 
      returnTo: this.document.location.origin 
    });
    */
  }


  openModal(content) {
		this.modal = this.modalService.open(content);

	}

  closeModal(){
    this.modal.close();

    this.auth.logout({ 
      returnTo: this.document.location.origin
      
    });
  }







}