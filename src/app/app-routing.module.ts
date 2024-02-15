import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { BioComponent } from './components/pages/bio/bio.component';
import { ArticlesComponent } from './components/pages/articles/articles.component';
import { ProjectsComponent } from './components/pages/projects/projects.component';
import { PortfolioComponent } from './components/pages/portfolio/portfolio.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'bio',
    component: BioComponent,
  },
  {
    path: 'articles',
    component: ArticlesComponent,
  },
  {
    path: 'projects',
    component: ProjectsComponent,
  },
  {
    path: 'portfolio',
    component: PortfolioComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
