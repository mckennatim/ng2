import {bootstrap, Component, Template} from 'angular2/angular2';

import {name} from './exportsName';

@Component({
  selector: 'test-app'
})
@Template({
  inline: '<h1>Hello {{name}}</h1>'
})
class TestApp {
  constructor(){
    this.name = name;
  }
}

export function run () {
  bootstrap(TestApp);
}