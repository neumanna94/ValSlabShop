import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WelcomeComponent } from './welcome/welcome.component';
import { AboutComponent } from './about/about.component';
import { AdminComponent } from './admin/admin.component';
import { MarketplaceComponent } from './marketplace/marketplace.component';
import { SlabDetailComponent } from './slab-detail/slab-detail.component';

const appRoutes: Routes = [
  {
    path: 'welcome',
    component: WelcomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'slabs',
    component: MarketplaceComponent
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
