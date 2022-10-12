import { Component, OnInit } from '@angular/core';


export interface IFormat  {
  userDate?: any
  userAmount?: Array<{attr: string, value: number}>
  userCode?:any
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  groupName: any
  title = 'project';
  arr: any[] = []
  newTesteOne: IFormat = {}
  newOne: any[] = []
  field = ''

  userData: any = {
    userDate1: "string",
    userDate2: "string",
    userDate3: "string",
    userDate4: "string",
    userDate5: "string",
    userAmount1: 2324343432,
    userAmount2: 1,
    userAmount3: 2,
    userAmount4: 3,
    userAmount5: 5,
    userCode1A: 'String',
    userCode2A: 'String',
    userCode3A: 'String',
    userCode4A: 'String',
    userCode5A: 'String'
  }
  /*   userData = {
      userDate: [ ['userDate1', 'string'], ['userDate2', 'string'] ],
      userAmount: [ ['userDate1', 'string'], ['userDate2', 'string'] ],
      userCode: [ ['userDate1', 'string'], ['userDate2', 'string'] ]
    } */

  ngOnInit() {
    this.getAttrByName(this.userData)
  }

  getAttrByName(userData: Object) {

    const entries = Object.entries(userData);

    entries.map(([attr, value]) => {
      const index = attr.search(/[0-9]/)
      const formatUser = attr.slice(0, index)

      if (!this.newTesteOne?.hasOwnProperty(formatUser) ) {
        (this.newTesteOne as any)[`${formatUser}`] = []
      }

      if (this.newTesteOne?.hasOwnProperty(formatUser)) {
        (this.newTesteOne as any)[`${formatUser}`].push({attr, value})
      }
    })
    const x = 'userAmount'
    var num =  x.match(/\d+/g);
    
    const y = x.split(/(?=[A-Z])/)
    if(y[1]){
      let formatField = y[1].split(/\d+/g)
      this.field = formatField.join('')
    }
    
    console.log(`${y[0]} ${this.field} ${num ? num : ''}${y[2] ? y[2] : '' } `);
    
  }


/* 
  const entries = Object.entries(userData);
  console.log(entries);

  entries.map(([attr, value]) => {
    const index = attr.search(/[0-9]/)
    const formatUser = attr.slice(0, index)

    if (this.newTesteOne?.hasOwnProperty(formatUser)) {
      (this.newTesteOne as any)[`${formatUser}`] = []
    }

    if (this.newTesteOne.hasOwnProperty(formatUser)) {
      (this.newTesteOne as any)[`${formatUser}`].push(attr, value)
    }
  })

  console.log(this.newTesteOne); */



}
