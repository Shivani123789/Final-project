import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { UserService } from '../user.service';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.css']
})
export class PlayComponent implements OnInit {

  url;
  title;
  category;
  id;
  status:string ="false";
  constructor(private activatedRoute:ActivatedRoute,private sanitizer:DomSanitizer,private userService:UserService) {
   }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      this.title = params.get('title')
      this.url = params.get('url')
      this.id=sessionStorage.getItem('email')
      console.log(this.url);
    });

    this.url=this.sanitizer.bypassSecurityTrustResourceUrl("rtmp://localhost:1935/vod/mp4:"+this.url);
    if(sessionStorage.getItem('email')!==null){
      this.status="true";
    }
  }
}
