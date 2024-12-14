import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes-introduction',
  templateUrl: './pipes-introduction.component.html',
  styleUrl: './pipes-introduction.component.scss'
})
export class PipesIntroductionComponent {

	dataSource = [
    {
      pipeName: 'AsyncPipe',
      pipeDescription: 'Read the value from a Promise or an RxJS Observable.'
    },
    {
      pipeName: 'CurrencyPipe',
      pipeDescription: 'Transforms a number to a currency string, formatted according to locale rules.'
    },
    {
      pipeName: 'DatePipe',
      pipeDescription: 'Formats a Date value according to locale rules.'
    },
    {
      pipeName: 'DecimalPipe',
      pipeDescription: 'Transforms a number into a string with a decimal point, formatted according to locale rules.'
    },
    {
      pipeName: 'JsonPipe',
      pipeDescription: 'Transforms an object to a string representation via JSON.stringify, intended for debugging.'
    },
    {
      pipeName: 'KeyValuePipe',
      pipeDescription: 'Transforms Object or Map into an array of key value pairs.'
    },
    {
      pipeName: 'LowerCasePipe',
      pipeDescription: 'Transforms text to all lower case.'
    },
    {
      pipeName: 'PercentPipe',
      pipeDescription: 'Transforms a number to a percentage string, formatted according to locale rules.'
    },
    {
      pipeName: 'TitleCasePipe',
      pipeDescription: 'Transforms text to title case.'
    },
    {
      pipeName: 'UpperCasePipe',
      pipeDescription: 'Transforms text to all upper case.'
    }
  ];
  displayedColumns: string[] = ['pipeName', 'pipeDescription'];

}
