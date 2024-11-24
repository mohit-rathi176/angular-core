import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';

import { MatModule } from './mat/mat.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
import { NavListComponent } from './components/nav-list/nav-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    NavListComponent
  ],
  imports: [
    BrowserModule,
		BrowserAnimationsModule,
    AppRoutingModule,
		MatModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
