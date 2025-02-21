import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeaderComponent } from './modules/portfolio/components/header/header.component';
import { KnowledgeComponent } from './modules/portfolio/components/knowledge/knowledge.component';
import { ExperiencesComponent } from './modules/portfolio/components/experiences/experiences.component';
import { PojectsComponent } from './modules/portfolio/components/pojects/pojects.component';

@Component({
  selector: 'app-root',
  imports: [
    CommonModule,
    HeaderComponent,
    KnowledgeComponent,
    ExperiencesComponent,
    PojectsComponent,
  ],
  template: ` <app-header></app-header>
    <app-knowledge></app-knowledge>
    <app-experiences></app-experiences>
    <app-pojects></app-pojects>`,
})
export class AppComponent {
  title = 'portfolio-angular';
}
