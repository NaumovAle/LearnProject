import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './naviganion/navigation.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { ShopComponent } from './shop/shop.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCardModule } from '@angular/material/card';
import { MatSliderModule } from '@angular/material/slider';
import { FormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { MatGridListModule } from '@angular/material/grid-list';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
   { path: 'shop', component: ShopComponent },
   { path: '', component: NavigationComponent },
   { path: '**', component: NavigationComponent, pathMatch: 'full' },
];

@NgModule({
   declarations: [AppComponent, NavigationComponent, ShopComponent],
   imports: [
      BrowserModule,
      RouterModule.forRoot(appRoutes),
      AppRoutingModule,
      BrowserAnimationsModule,
      MatToolbarModule,
      MatButtonModule,
      MatIconModule,
      MatSidenavModule,
      MatListModule,
      MatInputModule,
      MatProgressSpinnerModule,
      MatCardModule,
      MatSliderModule,
      FormsModule,
      MatRadioModule,
      MatGridListModule,
   ],
   providers: [],
   bootstrap: [AppComponent],
})
export class AppModule {}
