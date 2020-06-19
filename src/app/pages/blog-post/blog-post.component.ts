import { Component, OnInit } from '@angular/core';
declare function _init(): any;
@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.scss']
})
export class BlogPostComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    _init();
  }

}
