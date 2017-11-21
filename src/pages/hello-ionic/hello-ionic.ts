import { Component, OnInit } from '@angular/core';
import { DataService } from '../../providers/data.service'
import { NavController, NavParams } from 'ionic-angular';
import { PostDetailsPage } from '../post-details/post-details';

@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage implements OnInit {
	posts: any;
  	constructor(public http: DataService,
  		public navCtrl: NavController,
  		public navParams: NavParams) {}

  	getPost(url): void {
		this.http.get(url)
		.then((data) => {
			console.log('data',data)
			this.posts = data
		});
	}

	ngOnInit(): void {
		this.getPost('http://fitnessmitra.com/wp-json/wp/v2/posts');
	}

	postTapped(event, id) {
		this.navCtrl.push(PostDetailsPage, {
			post: this.posts.filter(post => post.id === id)//this.getPost('http://fitnessmitra.com/wp-json/wp/v2/posts/' + id)
		});
	}
}
