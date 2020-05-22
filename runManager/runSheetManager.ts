import {Workbook, Worksheet, Row, Cell} from 'exceljs';
import { GetFiles } from './new';

let wb:Workbook = new Workbook();

wb.xlsx.readFile("./RunSheet_Date.xlsx").then(function(){
    let sheet:Worksheet = wb.getWorksheet("Results");
    for (let i = 2; i <= sheet.rowCount; i++) {

        if(sheet.getRow(i).getCell(2).value == "Passed"){
            
        }

        else {
            let obj = new GetFiles();
            let  excel_file = obj.readExcelFile();
            wb.xlsx.readFile(excel_file).then(function(){
            let sheet1:Worksheet = wb.getWorksheet("Result_Summary");
            for(let j = 2; j<=sheet1.rowCount; j++){

               if(sheet.getRow(i).getCell(1).value == sheet1.getRow(j).getCell(2).value){
                   if(sheet1.getRow(j).getCell(7).value == "Passed"){
                       sheet.getRow(i).getCell(2).value = "Passed";
                       wb.xlsx.writeFile('./RunSheet_Date.xlsx');
                    }
                   else{
                       break;
                    }
                }
               else{
                   continue;
                }
            }
            });
        }
    }
});