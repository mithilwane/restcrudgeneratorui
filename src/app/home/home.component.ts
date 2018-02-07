import { Component, OnInit } from '@angular/core';
import { CodeGenClass } from '../domain/codeGenClass';
import { CodeGenAnnotation } from '../domain/codeGenAnnotation';
import { CodeGenProperty } from '../domain/codeGenProperty';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  classNameText: string = ''; 
  seqNameText: string= '';
  superClass: boolean= false;
  seqGen: boolean= false;
  tableNameText: string = ''; 
  schemaNameText: string= '';

  fieldNameText: string= '';
  fieldType: string= '';
  columnNameText: string= '';

  annotationClassText: string= '';
  annotationNameText: string= '';
  annotationValueText: string= '';

  annotationTableCol = ['annotationName', 'annotationProperty.name'];
  propertyTableCol = ['name', 'value'];
  annotations: CodeGenAnnotation[];
  annoprops: CodeGenProperty[];

  propDataSource = new MatTableDataSource<CodeGenProperty>(this.annoprops);
  annotationDataSource = new MatTableDataSource<CodeGenAnnotation>(this.annotations);

  constructor() { }

  ngOnInit() {
  }

  addAnnotation(){
    let annotation = this.getAnnotation();
    this.annotations.push(annotation);
  }

  getAnnotation(){
    let ann = new CodeGenAnnotation();
    ann.annotationName = this.annotationClassText;    
    ann.annotationProperty = this.annoprops;
    return ann;
  }

  addProperty(){
    let property = this.getAnnoProperty();
    this.annoprops.push(property);
  }

  getAnnoProperty(){
    let prop = new CodeGenProperty();
    prop.name = this.annotationNameText;
    prop.value = this.annotationValueText;
    return prop;
  }

}
