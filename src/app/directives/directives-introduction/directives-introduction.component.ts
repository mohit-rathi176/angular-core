import { Component } from '@angular/core';

@Component({
  selector: 'app-directives-introduction',
  templateUrl: './directives-introduction.component.html',
  styleUrl: './directives-introduction.component.scss'
})
export class DirectivesIntroductionComponent {

  dataSource = [
    {
      directiveType: 'Components',
      directiveDetail: 'Used with a template. This type of directive is the most common directive type.'
    },
    {
      directiveType: 'Attribute directives',
      directiveDetail: 'Change the appearance or behavior of an element, component, or another directive.'
    },
    {
      directiveType: 'Structural directives',
      directiveDetail: 'Change the DOM layout by adding and removing DOM elements.'
    }
  ];
  displayedColumns: string[] = ['directiveType', 'directiveDetail'];

}
