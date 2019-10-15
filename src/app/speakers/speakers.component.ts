import {Component, OnInit} from '@angular/core';
import {SpeakerDialogComponent} from '../_dialog/speaker-dialog/speaker-dialog.component';
import {MatDialog} from '@angular/material';
import {Observable} from 'rxjs';
import {AngularFirestore} from '@angular/fire/firestore';
// import {testClass} from '../class/testClass';
// import {map} from 'rxjs/operators';

@Component({
    selector: 'app-speakers',
    templateUrl: './speakers.component.html',
    styleUrls: ['./speakers.component.scss']
})
export class SpeakersComponent implements OnInit {

    public items: Observable<any[]>;

    constructor(
        public dialog: MatDialog,
        db: AngularFirestore
    ) {
        this.items = db.collection('speakers').valueChanges()
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
