import { NgModule } from '@angular/core';
import { CodeGenAnnotation } from './codeGenAnnotation';

@NgModule({
  exports: [CodeGenField]
})
export class CodeGenField {
	
	name: string = ''; 
	type: string = ''; 
	annotations: CodeGenAnnotation[] ;
}