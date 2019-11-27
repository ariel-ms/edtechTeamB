import { Component, OnInit } from '@angular/core';
import * as firebase from 'Firebase';
import { ActivatedRoute, Router  } from '@angular/router';
import { CrudService } from './../service/crud.service';

@Component({
  selector: 'app-newgroup',
  templateUrl: './newgroup.page.html',
  styleUrls: ['./newgroup.page.scss'],
})
export class NewgroupPage implements OnInit {

  ctitle: string = ""
  assignment: string = ""
  location: string = ""
  npeople: string = ""

  constructor(private crudService: CrudService) { }

  ngOnInit() {
  }

  createGroup() {
    let record = {};
    record['Title'] = this.ctitle;
    record['Assignment'] = this.assignment;
    record['Location'] = this.location;
    record['People'] = this.npeople;

    this.crudService.create_NewGroup(record).then(resp => {
      this.ctitle = "";
      this.assignment = undefined;
      this.location = "";
      this.npeople = "";
      console.log(resp);
    })
      .catch(error => {
        console.log(error);
      });
  }

}
