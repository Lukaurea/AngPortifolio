import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeaderComponent } from './modules/portfolio/components/header/header.component';
import { KnowledgeComponent } from './modules/portfolio/components/knowledge/knowledge.component';

@Component({
  selector: 'app-root',
  imports: [CommonModule, HeaderComponent, KnowledgeComponent],
  template: ` <app-header></app-header>
    <app-knowledge></app-knowledge>`,
})
export class AppComponent {
  title = 'portfolio-angular';
}
