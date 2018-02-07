import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CodeGenProperty } from './codeGenProperty';

@NgModule({
  exports: [CodeGenAnnotation]
})
export class CodeGenAnnotation {	
	annotationName: string='';
	annotationProperty: CodeGenProperty[] ;	
}