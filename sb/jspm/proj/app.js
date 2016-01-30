import {bootstrap, ComponentAnnotation as Component, ViewAnnotation as View, Injectable} from 'angular2/angular2';
import {NgIf} from 'angular2/angular2';


@Injectable()
class ImagesFactory {
  getUrls(): Array {
    let url = 'http://www.reddit.com/r/perfectloops/top.json?sort=top&t=week'
    return fetch(url)
      .then(response => response.json())
      .then(json => json.data.children
        .map(a => a.data.url)
        .filter(a => /\.(gif|jpg|png)$/.exec(a)));

  }
}

@Component({
    selector: 'my-app',
    appInjector: [ImagesFactory]
})
@View({
  templateUrl: "proj/hello.html",
  directives: [NgIf]
})
class MyAppComponent {
    name: string;
    img: string;

    constructor(images: ImagesFactory) {
      this.name = "world";
      var that = this;
      images.getUrls().then(ar => {
        that.img = ar[0];
        console.log(this.img)
      });
    }
}

bootstrap(MyAppComponent);


][py6434/+