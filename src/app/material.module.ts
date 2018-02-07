import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatToolbarModule, MatInputModule} from '@angular/material';
import { MatProgressSpinnerModule, MatCardModule, MatCheckboxModule } from '@angular/material';
import { MatLabel, MatRadioButton, MatFormField, MatTableModule} from '@angular/material';
import { MatGridListModule, MatTabsModule } from '@angular/material';


@NgModule({
  imports: [MatButtonModule, MatToolbarModule, 
  MatInputModule, MatProgressSpinnerModule, MatCardModule, MatCheckboxModule, MatTableModule,
  MatGridListModule, MatTabsModule ],
  exports: [MatButtonModule, MatToolbarModule, 
  MatInputModule, MatProgressSpinnerModule, MatCardModule, MatCheckboxModule, MatTableModule,
  MatGridListModule, MatTabsModule ],
})
export class MaterialModule { }