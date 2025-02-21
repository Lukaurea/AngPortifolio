import { Component, signal } from '@angular/core';
import { IProjects } from '../../interface/IProjects.interface';

@Component({
  selector: 'app-pojects',
  imports: [],
  templateUrl: './pojects.component.html',
})
export class PojectsComponent {
  public arrayProjects = signal<IProjects[]>([
    {
      src: 'assets/vfull.png',
      alt: 'Projeto vida fullstack',
      title: 'Vida Fullstack',
      description: '<p>Explore o fascinante universo da tecnologia.</p>',
      width: '100px',
      height: '51px',
      links: [
        {
          name: 'conheça o blog do milo',
          href: 'https://miloblog.netlify.app/',
        },
      ],
    },
  ]);
}
