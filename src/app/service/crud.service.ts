import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor( 
    private firestore: AngularFirestore
    ) { }

    create_NewGroup(group) {
      return this.firestore.collection('Groups').add(group);
    }

    read_Group() {
      return this.firestore.collection('Groups').snapshotChanges();
    }

    update_Group(groupID, group){
      this.firestore.doc('Students/' + groupID).update(group);
    }

    delete_Student(group_id) {
      this.firestore.doc('Students/' + group_id).delete();
    }
}
