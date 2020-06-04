import {Workbook, Worksheet, Row, Cell} from 'exceljs';
import { GetJson } from './new';
const node_xj =require ('xls-to-json');

class trialClass{

async tryConvertingFunction()
{
node_xj({
    input: "Alok/Results/Regression/Run_10-Apr-2020_05-01-01_PM/Excel Results/Summary.xls",  // input xls
    output: "Alok/Results/Regression/Run_10-Apr-2020_05-01-01_PM/Excel Results/output.json", // output json
    sheet: "Result_Summary",  // specific sheetname
  }, function(err, result) {
    if(err) {
      console.error(err);
    } else {
      console.log(result);
    }
});
await console.log("converting function to xls to json");
} 

async UpdateResultFunction(){
let jsonst:string = "";
let wb:Workbook = new Workbook();

let obj = new GetJson();
jsonst =  obj.readJsonFile("Alok/Results/Regression/Run_10-Apr-2020_05-01-01_PM/Excel Results/output.json");

wb.xlsx.readFile("./RunSheet_Date.xlsx").then(function(){
    let sheet:Worksheet = wb.getWorksheet("Results");
    for (let i = 2; i <= sheet.rowCount; i++) {

        if(sheet.getRow(i).getCell(2).value == "Passed"){
            continue;
        }

        else {
            for(let j = 0; j<jsonst.length; j++){

               if(sheet.getRow(i).getCell(1).value == jsonst[j]["Test_Case"]){
                   if(jsonst[j]["Test_Status"] == "Passed"){
                       sheet.getRow(i).getCell(2).value = "Passed";
                       sheet.getRow(i).getCell(3).value = "Alok";
                       sheet.getRow(i).getCell(4).value = "Alok/Results/Regression/Run_10-Apr-2020_07-01-01_PM/Excel Results";
                       wb.xlsx.writeFile('./RunSheet_Date.xlsx');
                    }
                   else{
                    sheet.getRow(i).getCell(2).value = "Failed";
                    sheet.getRow(i).getCell(3).value = "Alok";
                    sheet.getRow(i).getCell(4).value = "Alok/Results/Regression/Run_10-Apr-2020_07-01-01_PM/Excel Results";
                    wb.xlsx.writeFile('./RunSheet_Date.xlsx');
                    }
                }
               else{
                   continue;
                }
            }
        }
    }
});
await console.log("UpdateResultFunction function to xls to json");
}
}

const newObject =new trialClass();
newObject.UpdateResultFunction();
