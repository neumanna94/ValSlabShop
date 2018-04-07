import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { MarketplaceComponent } from './marketplace/marketplace.component';
import { SlabDetailComponent } from './slab-detail/slab-detail.component';
import { AboutComponent } from './about/about.component';
import { AdminComponent } from './admin/admin.component';

import { FilterPipe } from './filterPipe.pipe';

import { masterFirebaseConfig } from './api-keys';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { EditSlabComponent } from './edit-slab/edit-slab.component';

import { ImageUploadModule } from "angular2-image-upload";

export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
};

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    MarketplaceComponent,
    SlabDetailComponent,
    AboutComponent,
    AdminComponent,
    EditSlabComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    ImageUploadModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
title = 'Val Slab Site';
}
