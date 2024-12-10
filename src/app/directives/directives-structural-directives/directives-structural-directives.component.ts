import { Component } from '@angular/core';

@Component({
  selector: 'app-directives-structural-directives',
  templateUrl: './directives-structural-directives.component.html',
  styleUrl: './directives-structural-directives.component.scss'
})
export class DirectivesStructuralDirectivesComponent {

  dataSource = [
    {
      directive: 'NgIf',
      directiveDetail: 'Conditionally creates or disposes of subviews from the template.'
    },
    {
      directive: 'NgFor',
      directiveDetail: 'Repeat a node for each item in a list.'
    },
    {
      directive: 'NgSwitch',
      directiveDetail: 'A set of directives that switch among alternative views.'
    }
  ];
  displayedColumns: string[] = ['directive', 'directiveDetail'];

}
