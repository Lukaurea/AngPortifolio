import { Component, signal } from '@angular/core';
import { IKnowledge } from '../../interface/Iknowledge.interface';

@Component({
  selector: 'app-knowledge',
  imports: [],
  templateUrl: './knowledge.component.html',
})
export class KnowledgeComponent {
  public arrayKnowledge = signal<IKnowledge[]>([
    {
      src: 'assets/html.svg',
      alt: 'html',
    },
    {
      src: 'assets/css.svg',
      alt: 'css',
    },
    {
      src: 'assets/javascript.svg',
      alt: 'javascript',
    },
  ]);
}
