import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private translateService: TranslateService) {}

  changeLanguage(language: string) {
    this.translateService.use(language);
  }

  isLang(language: string) {
    return this.translateService.currentLang === language;
  }

  ngOnInit() {
    this.translateService.use('en');
  }
}
