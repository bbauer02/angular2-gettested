import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {PastriesComponent} from "./pastries/pastries.component";
import { DescriptionComponent } from './description/description.component';
import { PastrieDetailsComponent } from './pastrie-details/pastrie-details.component';
import { FormsModule } from '@angular/forms';
import {AppRoutingModule} from "./app-routing.module";
import { LoginComponent } from './login/login.component';
import { SearchComponent } from './search/search.component';
import { PaginateComponent } from './paginate/paginate.component';

@NgModule({
  declarations: [
    AppComponent,
    PastriesComponent,
    PastrieDetailsComponent,
    SearchComponent,
    DescriptionComponent,
    LoginComponent,
    PaginateComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
