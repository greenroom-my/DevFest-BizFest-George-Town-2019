import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {MatDialog} from '@angular/material';
import {AngularFirestore} from '@angular/fire/firestore';
import {SpeakerDialogComponent} from '../_dialog/speaker-dialog/speaker-dialog.component';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

    public items: Observable<any[]>;

    constructor(
        public dialog: MatDialog,
        db: AngularFirestore
    ) {
        this.items = db.collection('speakers', ref =>
            ref.where('featured', '==', true)
        ).valueChanges()
    }

    showDialog(speaker) {
        this.dialog.open(SpeakerDialogComponent, {
            width: '600px',
            data: {
                ...speaker
            }
        });
    }

  ngOnInit() {
  }

}
