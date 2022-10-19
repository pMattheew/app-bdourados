import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor() { }

  ngOnInit() {
    this.playVideo();
  }

  playVideo() {
    document.querySelector('video').setAttribute('muted','true');
    document.querySelector('video').volume = 0;
    document.querySelector('video').play();
  }

}
