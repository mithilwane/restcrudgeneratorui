import { NgModule } from '@angular/core';

import { CodeGenAnnotation } from './codeGenAnnotation';
import { CodeGenField } from './codeGenField';

@NgModule({
  exports: [CodeGenClass]
})
export class CodeGenClass {
	className: string='';	
	annotations: CodeGenAnnotation[] ;	
	fields: CodeGenField[] ;	
}