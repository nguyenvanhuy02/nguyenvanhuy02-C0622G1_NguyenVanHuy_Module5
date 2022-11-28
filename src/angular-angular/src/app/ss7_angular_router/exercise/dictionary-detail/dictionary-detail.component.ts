import {Component, OnInit} from '@angular/core';
import {DictionaryService} from '../../../../service/dictionary.service';
import {ActivatedRoute, Params} from '@angular/router';
import {IWord} from '../../../../model/IWord';

@Component({
  selector: 'app-dictionary-detail',
  templateUrl: './dictionary-detail.component.html',
  styleUrls: ['./dictionary-detail.component.css']
})
export class DictionaryDetailComponent implements OnInit {
  wordDetail: IWord | undefined;
  index: number | undefined;

  // tslint:disable-next-line:variable-name
  constructor(private _activatedRoute: ActivatedRoute,
              // tslint:disable-next-line:variable-name
              private _dictionaryService: DictionaryService) {
  }

  ngOnInit(): void {
    this._activatedRoute.params.subscribe((params: Params) => {
      this.index = params.index;
      this.wordDetail = this._dictionaryService.getFindByIndex(this.index);
    });
  }
}
