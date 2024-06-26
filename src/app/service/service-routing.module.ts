import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { OurServicesComponent } from './components/our-services/our-services.component';
import { OurTestimonialComponent } from './components/our-testimonial/our-testimonial.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { DataAnalyticsComponent } from './data-analytics/data-analytics.component';
import { ManagedAnalyticsComponent } from './managed-analytics/managed-analytics.component';
import { BigDataServicesComponent } from './big-data-services/big-data-services.component';
import { DataScienceConsultingComponent } from './data-science-consulting/data-science-consulting.component';
import { BusinessIntelligenceComponent } from './business-intelligence/business-intelligence.component';
import { DataVisualizationServicesComponent } from './data-visualization-services/data-visualization-services.component';
import { DataManagementComponent } from './data-management/data-management.component';
import { ArtificialIntelligenceComponent } from './artificial-intelligence/artificial-intelligence.component';

const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
  },
  {
    path: 'devops',
    component: DataAnalyticsComponent
  },
  {
    path: 'cloud-migration',
    component: ManagedAnalyticsComponent
  },
  {
    path: 'well-architected',
    component: BigDataServicesComponent
  },
  {
    path: 'data-science-consulting',
    component: DataScienceConsultingComponent
  },
  {
    path: 'business-intelligence',
    component: BusinessIntelligenceComponent
  },
  {
    path: 'data-visualization-services',
    component: DataVisualizationServicesComponent
  },
  {
    path: 'data-management',
    component: DataManagementComponent
  },
  {
    path: 'artificial-intelligence',
    component: ArtificialIntelligenceComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServiceRoutingModule { }
