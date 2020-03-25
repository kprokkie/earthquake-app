import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  github: string;
  linkedin: string;

  constructor() { }

  ngOnInit(): void {
    this.github = 'https://github.com/kprokkie/';
    this.linkedin = 'https://www.linkedin.com/in/kprokkie/';
  }

}
