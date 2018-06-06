import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { AppComponent } from './app.component';
/* 注册语言包 */
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent,
],
  imports: [
    BrowserModule,
    NgZorroAntdModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
