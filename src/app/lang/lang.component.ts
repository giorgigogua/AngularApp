import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-lang',
  templateUrl: './lang.component.html',
  styleUrl: './lang.component.scss'
})
export class LangComponent {
  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('en')
  }

  switchLanguage(language: string) {
    this.translate.use(language)
  }
}
