import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { MenuTitleComponent } from './components/menu-title/menu-title.component';
import { BigCardComponent } from './components/big-card/big-card.component';
import { SmallCardComponent } from './components/small-card/small-card.component';
import { HomeComponent } from './components/pages/home/home.component';
import { SocialMediaComponent } from './components/social-media/social-media.component';
import { CardDescriptionComponent } from './components/card-description/card-description.component';
import { BioComponent } from './components/pages/bio/bio.component';
import { ArticlesComponent } from './components/pages/articles/articles.component';
import { ProjectsComponent } from './components/pages/projects/projects.component';
import { PortfolioComponent } from './components/pages/portfolio/portfolio.component';
import { PhotoComponent } from './components/pages/bio/photo/photo.component';
import { FindmeComponent } from './components/pages/bio/findme/findme.component';
import { AboutmeComponent } from './components/pages/bio/aboutme/aboutme.component';
import { EducationComponent } from './components/pages/bio/education/education.component';
import { ExperiencesComponent } from './components/pages/bio/experiences/experiences.component';
import { SkillsComponent } from './components/pages/bio/skills/skills.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    MenuTitleComponent,
    BigCardComponent,
    SmallCardComponent,
    HomeComponent,
    SocialMediaComponent,
    CardDescriptionComponent,
    BioComponent,
    ArticlesComponent,
    ProjectsComponent,
    PortfolioComponent,
    PhotoComponent,
    FindmeComponent,
    AboutmeComponent,
    EducationComponent,
    ExperiencesComponent,
    SkillsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
