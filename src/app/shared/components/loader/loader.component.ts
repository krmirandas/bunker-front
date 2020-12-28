import { Component, OnInit, OnDestroy, Renderer2 } from '@angular/core';
@Component({
  selector: 'loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit, OnDestroy {
  constructor(
    public renderer: Renderer2){
  }
  ngOnInit(): void{
    this.setHTMLScroll('hidden');
  }
  ngOnDestroy(): void{
    this.setHTMLScroll('auto');
  }
  setHTMLScroll(scroll_value: string): void{
    this.renderer.setStyle(document.getElementsByTagName('html')[0], 'overflow', scroll_value);
  }
}