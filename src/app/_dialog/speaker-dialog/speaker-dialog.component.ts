import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material';
import {Speaker} from "../../models/Speaker";

@Component({
    selector: 'app-speaker-dialog',
    templateUrl: './speaker-dialog.component.html',
    styleUrls: ['./speaker-dialog.component.scss']
})
// export class SpeakerDialogComponent implements OnInit {
//
//     constructor() {
//     }
//
//     ngOnInit() {
//     }
//
// }

export class SpeakerDialogComponent {
    public htmlBio: any;

    constructor(
        @Inject(MAT_DIALOG_DATA) public data: Speaker
    ) {
        this.htmlBio = data.bio.replace(new RegExp('/bb', 'g'), '\n');
    }
}