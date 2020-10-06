import { Injectable } from '@angular/core';
declare var $: any;
@Injectable({
  providedIn: 'root'
})
export class NotifyService {

  constructor() { }

   notify(action, mess, type) {
    let bg;
    switch (type) {
      case 'success': {
        bg = 'bg-success';
        break;
      }
      case 'danger': {
        bg = 'bg-danger';
        break;
      }
      default: {
        bg = 'bg-warm';
        break;
      }
    }
    $.notify({
      icon: 'https://randomuser.me/api/portraits/med/men/77.jpg',
      title: action,
      message: mess
    }, {
      z_index: 1060,
      type: 'minimalist',
      delay: 3000,
      icon_type: 'image',
      template: '<div data-notify="container" style="z-index: 1060" class="col-xs-11 col-sm-3 alert alert-{0} ' + bg + ' role="alert ">' +
        '<img data-notify="icon" class="img-circle pull-left">' +
        '<span data-notify="title">{1}</span>' +
        '<span data-notify="message">{2}</span>' +
        '</div>'
    });
  }

}
