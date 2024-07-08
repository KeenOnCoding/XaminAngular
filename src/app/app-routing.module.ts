import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { OurTeamComponent } from './pages/our-team/our-team.component';
import { OurClientComponent } from './pages/our-client/our-client.component';
import { CareersComponent } from './pages/careers/careers.component';

const routes: Routes = [
  { path: 'landing-page1', loadChildren: () => import('./landing-page1/landing-page1.module').then(m => m.LandingPage1Module) },
  { path: 'landing-page2', loadChildren: () => import('./landing-page2/landing-page2.module').then(m => m.LandingPage2Module) },
  { path: 'landing-page3', loadChildren: () => import('./landing-page3/landing-page3.module').then(m => m.LandingPage3Module) },
  { path: 'cloud-migration', loadChildren: () => import('./cloud-migration/cloud-migration.module').then(m => m.LandingPage4Module) },
  { path: 'devops', loadChildren: () => import('./devops/devops.module').then(m => m.LandingPage5Module) },
  { path: 'finops-as-service', loadChildren: () => import('./finops-as-service/finops-as-service.module').then(m => m.LandingPage6Module) },
  { path: 'devsecops-as-a-service', loadChildren: () => import('./devsecops-as-a-service/devsecops-as-a-service.module').then(m => m.LandingPage7Module) },
  { path: 'well-architected', loadChildren: () => import('./well-architected/well-architected.module').then(m => m.LandingPage8Module) },
  { path: 'landing-page9', loadChildren: () => import('./landing-page9/landing-page9.module').then(m => m.LandingPage9Module) },
  { path: 'landing-page10', loadChildren: () => import('./landing-page10/landing-page10.module').then(m => m.LandingPage10Module) },
  { path: 'landing-page11', loadChildren: () => import('./landing-page11/landing-page11.module').then(m => m.LandingPage11Module) },
  { path: 'our-cases', loadChildren: () => import('./our-cases/our-cases.module').then(m => m.OurCasesModule) },
  { path: 'about-us', loadChildren: () => import('./about/about.module').then(m => m.AboutModule) },
  { path: 'blog', loadChildren: () => import('./blog/blog.module').then(m => m.BlogModule) },
  { path: 'services', loadChildren: () => import('./service/service.module').then(m => m.ServiceModule) },
  { path: 'pages', loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule) },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'our-team', component: OurTeamComponent },
  { path: 'client', component: OurClientComponent },
  { path: 'career', component: CareersComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
