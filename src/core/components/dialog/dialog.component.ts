import { Component, Inject, Input, OnInit, Optional } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogConfig,
  MatDialogContent,
  MatDialogModule,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MessageModel } from '../../model/message-model';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    MatDialogActions,
    MatDialogClose,
    MatDialogTitle,
    MatDialogContent,
    MatToolbarModule,
    MatIconModule,
  ],
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
})
export class DialogComponent {
  message: string;

  constructor(
    @Optional() private dialogRef: MatDialogRef<DialogComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) private data: MessageModel
  ) {
    this.message = this.data.message;
  }
  onClose() {
    this.dialogRef.close();
  }
}

export function openCommonDialog(
  dialog: MatDialog,
  messageModel: MessageModel
) {
  const config = new MatDialogConfig();
  config.disableClose = true;
  config.autoFocus = true;
  config.panelClass = 'modal-panel';
  config.backdropClass = 'backdrop-modal-panel';
  config.enterAnimationDuration = '0ms';
  config.exitAnimationDuration = '1500ms';
  config.data = {
    ...messageModel,
  };

  const dialogRef = dialog.open(DialogComponent, config);
  return dialogRef.afterClosed();
}
