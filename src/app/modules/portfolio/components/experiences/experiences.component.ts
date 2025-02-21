import { Component, signal } from '@angular/core';
import { IExperiences } from '../../interface/IExperiences.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-experiences',
  imports: [CommonModule],
  templateUrl: './experiences.component.html',
})
export class ExperiencesComponent {
  public arrayExperiences = signal<IExperiences[]>([
    {
      summary: {
        item: 'Desenvolvimento Front-end',
        p: 'Tech Solutions Inc.',
        strong: '2 anos',
      },
      Text: 'Trabalhei no desenvolvimento de interfaces responsivas e interativas utilizando HTML, CSS e JavaScript. Participei de projetos que envolviam a integração com APIs REST e a otimização de performance para melhorar a experiência do usuário.',
    },
    {
      summary: {
        item: 'Ciência de Dados',
        p: 'Data Insights Corp.',
        strong: '3 anos',
      },
      Text: 'Atuei na análise e modelagem de grandes volumes de dados, utilizando Python, Pandas e Scikit-learn. Desenvolvi modelos de machine learning para previsão de tendências e auxiliei na tomada de decisões estratégicas com base em dados.',
    },
    {
      summary: {
        item: 'Segurança da Informação',
        p: 'CyberSafe Ltda.',
        strong: '1 ano e 6 meses',
      },
      Text: 'Responsável por implementar políticas de segurança, realizar auditorias e monitorar sistemas para detectar vulnerabilidades. Trabalhei com ferramentas como SIEM, firewalls e testes de penetração para garantir a proteção dos dados da empresa.',
    },
    {
      summary: {
        item: 'Desenvolvimento Back-end',
        p: 'CodeMaster Solutions',
        strong: '4 anos',
      },
      Text: 'Desenvolvi APIs robustas e escaláveis utilizando Node.js e Django. Participei da arquitetura de microsserviços e da integração com bancos de dados relacionais e não relacionais, garantindo alta disponibilidade e desempenho.',
    },
  ]);
}
