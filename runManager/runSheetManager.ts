import {Workbook, Worksheet, Row, Cell} from 'exceljs';
import { GetFiles } from './new';

let wb:Workbook = new Workbook();

wb.xlsx.readFile("./RunSheet_Date.xlsx").then(function(){
    let sheet:Worksheet = wb.getWorksheet("Results");
    sheet.getRow(4).getCell(2).value = "Passed";
    wb.xlsx.writeFile('./RunSheet_Date.xlsx');
    for (let i = 2; i <= sheet.rowCount; i++) { 
        if(sheet.getRow(i).getCell(2).value == "Passed"){
            
        }
    }

    for (let i = 2; i <= sheet.rowCount; i++) { 
        if(sheet.getRow(i).getCell(2).value == "" || sheet.getRow(i).getCell(2).value == "Failed"){

        }
    }

    let obj = new GetFiles();
    let  excel_file = obj.readExcelFile();
    console.log(excel_file);
    
    wb.xlsx.readFile(excel_file).then(function(){
      let sheet1:Worksheet = wb.getWorksheet("Result_Summary");
      console.log(sheet1.getRow(2).getCell(3).value);
    });
});
