import { Component, OnInit } from '@angular/core';
import { EditorConfig } from './editor/model/editor-config';

@Component({
  selector: 'app-markdown',
  templateUrl: './markdown.component.html',
  styleUrls: ['./markdown.component.css']
})
export class MarkdownComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  conf = new EditorConfig();
  markdown = '测试语句';

  // 同步属性内容
  syncModel(str): void {
    this.markdown = str;
  }


}
