import { Component, OnInit } from '@angular/core';
import {SpeakerDialogComponent} from '../_dialog/speaker-dialog/speaker-dialog.component';
import {MatDialog} from '@angular/material';

@Component({
  selector: 'app-speakers',
  templateUrl: './speakers.component.html',
  styleUrls: ['./speakers.component.scss']
})
export class SpeakersComponent implements OnInit {

  constructor(
      public dialog: MatDialog,
  ) { }

    showDialog(speaker) {
        this.dialog.open(SpeakerDialogComponent, {
            width : '600px',
            data  : {
                ...speaker
            }
        });
    }

  ngOnInit() {
  }

}
