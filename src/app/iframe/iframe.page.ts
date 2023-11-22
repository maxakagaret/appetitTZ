import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-iframe',
  templateUrl: './iframe.page.html',
  styleUrls: ['./iframe.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class IframePage implements OnInit {
  url: SafeResourceUrl;
  title: string;
  constructor(private domSanitazier:DomSanitizer,private route: ActivatedRoute) {
    this.url = "";
    this.title = "";
  }

  ngOnInit() {
    const selectedUrl = String(this.route.snapshot.paramMap.get('url'));
    const selectedTitle = String(this.route.snapshot.paramMap.get('title'));
    this.url = this.domSanitazier.bypassSecurityTrustResourceUrl(selectedUrl);
    this.title = selectedTitle;
  }

}
