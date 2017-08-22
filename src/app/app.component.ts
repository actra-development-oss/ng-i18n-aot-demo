import { NgI18nAotService } from '@actra-development-oss/ng-i18n-aot-module';
import { Component } from '@angular/core';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    public locale: string;
    public title: string = 'ng-i18n-aot-demo';
    
    
    constructor(protected ngI18nAotService: NgI18nAotService) {
        this.locale = this.ngI18nAotService.getLocale();
    }
    
    
    public setLocale(locale: string): void {
        this.locale = locale;
        
        this.ngI18nAotService.setLocale(this.locale);
    }
}
