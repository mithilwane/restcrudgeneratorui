import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  exports: [CodeGenProperty]
})
export class CodeGenProperty {	
	name: string= '';	
	value: string='';	
}