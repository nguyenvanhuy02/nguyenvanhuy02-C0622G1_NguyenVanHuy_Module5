import {Injectable} from '@angular/core';
import {IWord} from '../model/IWord';

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {
  // tslint:disable-next-line:variable-name
  private _wordList: IWord[] = [
    {word: 'pen', mean: 'bút'},
    {word: 'book', mean: 'sách'},
    {word: 'ball', mean: 'bóng'},
  ];

  constructor() {
  }

  get wordList(): IWord[] {
    return this._wordList;
  }

  set wordList(value: IWord[]) {
    this._wordList = value;
  }

  getFindByIndex(index: number) {
    return this._wordList[index];
  }
}
