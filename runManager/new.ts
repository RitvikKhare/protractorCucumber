const fs = require('fs');
//const path = require('path')
//const folderPath = 'Alok/Results/Regression/Run_10-Apr-2020_07-01-01_PM/Excel Results';

// const node_xj = require("xls-to-json");
//   node_xj({
//     input: "Alok/Results/Regression/Run_10-Apr-2020_07-01-01_PM/Excel Results/Summary.xls",  // input xls
//     output: "Alok/Results/Regression/Run_10-Apr-2020_07-01-01_PM/Excel Results/output.json", // output json
//     sheet: "Result_Summary",  // specific sheetname
//   }, function(err, result) {
//     if(err) {
//       console.error(err);
//     } else {
//       //console.log(result[0]["Test_Case"]);
//     }
//   });

export class GetJson {

   readJsonFile (filePath:string){
    let fileContent:string =  fs.readFileSync(filePath);
    let jsonContent =  JSON.parse(fileContent);
    return jsonContent;
  }
  };

/*export class GetFiles {
     readExcelFile (){
     let fileContent =  fs.readdirSync(folderPath);
     let fileMain = path.join(folderPath, 'Summary.xls');
     return fileMain;   
    }
};*/

