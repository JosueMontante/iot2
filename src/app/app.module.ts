import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { TableModule } from 'primeng/table';
import { GrowlModule } from 'primeng/growl';
import { NgModule } from '@angular/core';
import { ApiService } from './services/api.services';
import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    TableModule,
    GrowlModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
