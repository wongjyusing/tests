import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { MarkdownComponent } from './markdown/markdown.component';
import { EditorMdDirective } from './markdown/editor/editor-md.directive';



@NgModule({
  declarations: [
    AppComponent,
    MarkdownComponent,
    EditorMdDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
