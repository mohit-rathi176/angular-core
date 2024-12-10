import { Component } from '@angular/core';

@Component({
  selector: 'app-directives-attribute-directives',
  templateUrl: './directives-attribute-directives.component.html',
  styleUrl: './directives-attribute-directives.component.scss'
})
export class DirectivesAttributeDirectivesComponent {

  dataSource = [
    {
      directive: 'NgClass',
      directiveDetail: 'Adds and removes a set of CSS classes.'
    },
    {
      directive: 'NgStyle',
      directiveDetail: 'Adds and removes a set of HTML styles.'
    },
    {
      directive: 'NgModel',
      directiveDetail: 'Adds two-way data binding to an HTML form element.'
    }
  ];
  displayedColumns: string[] = ['directive', 'directiveDetail'];

}
