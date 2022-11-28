import {Component, OnInit} from '@angular/core';
import {IWord} from '../../../../model/IWord';
import {DictionaryService} from '../../../../service/dictionary.service';

@Component({
  selector: 'app-dictionary',
  templateUrl: './dictionary.component.html',
  styleUrls: ['./dictionary.component.css']
})
export class DictionaryComponent implements OnInit {
  wordList: IWord[];

  // tslint:disable-next-line:variable-name
  constructor(private _dictionaryService: DictionaryService) {
  }

  ngOnInit(): void {
    this.wordList = this._dictionaryService.wordList;
  }

}
