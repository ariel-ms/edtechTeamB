import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  information: any[];
  automaticClose = false;
  constructor(private http: HttpClient) {
    this.http.get('assets/information.json').subscribe(res => {
      // classes is name of top level in json file
      this.information = res['classes'];
      this.information[0].open = false;
    })
  }

  toggleSection(index) {
    this.information[index].open = !this.information[index].open
    if (this.automaticClose && this.information[index].open) {
      this.information
      .filter((item, itemIndex) => itemIndex != index)
      .map(item => item.open = false);
    }
  }

  toggleItem(index, childIndex) {
    this.information[index].children[childIndex].open = !this.information[index].children[childIndex].open
  }
}
