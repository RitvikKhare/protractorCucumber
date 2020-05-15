const fs = require('fs');
const path = require('path')
const folderPath = 'Alok/Results/Regression/Run_10-Apr-2020_07-01-01_PM/Excel Results';
//const isFile = fileName => {
    //return fs.lstatSync(fileName).isFile()
 // }

export class GetFiles {
     readExcelFile (){
     let fileContent =  fs.readdirSync(folderPath);
     let fileMain = path.join(folderPath, 'Summary.xls');
     return fileMain;   
    }
};