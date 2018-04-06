//Importing services from Angular core that will allow static/dynamic routing.
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//Importing Components I will want to route to in the future.
import { WelcomeComponent } from './welcome/welcome.component';
import { AboutComponent } from './about/about.component';
import { MarketplaceComponent } from './marketplace/marketplace.component';
import { SlabDetailComponent } from './slab-detail/slab-detail.component';
import { AdminComponent } from './admin/admin.component';

const appRoutes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },
  {
    path: 'slabs',
    component: MarketplaceComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'slabs/:id',
    component: SlabDetailComponent
  },
  {
    path: 'admin',
    component: AdminComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
