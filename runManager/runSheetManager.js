"use strict";
exports.__esModule = true;
var exceljs_1 = require("exceljs");
var new_1 = require("./new");
var xls_to_json_1 = require("xls-to-json");
xls_to_json_1.node_xj({
    input: "Alok/Results/Regression/Run_10-Apr-2020_05-01-01_PM/Excel Results/Summary.xls",
    output: "Alok/Results/Regression/Run_10-Apr-2020_05-01-01_PM/Excel Results/output.json",
    sheet: "Result_Summary"
}, function (err, result) {
    if (err) {
        console.error(err);
    }
    else {
        console.log(result);
    }
});
var jsonst = "";
var wb = new exceljs_1.Workbook();
var obj = new new_1.GetJson();
jsonst = obj.readJsonFile("Alok/Results/Regression/Run_10-Apr-2020_05-01-01_PM/Excel Results/output.json");
wb.xlsx.readFile("./RunSheet_Date.xlsx").then(function () {
    var sheet = wb.getWorksheet("Results");
    for (var i = 2; i <= sheet.rowCount; i++) {
        if (sheet.getRow(i).getCell(2).value == "Passed") {
            continue;
        }
        else {
            for (var j = 0; j < jsonst.length; j++) {
                if (sheet.getRow(i).getCell(1).value == jsonst[j]["Test_Case"]) {
                    if (jsonst[j]["Test_Status"] == "Passed") {
                        sheet.getRow(i).getCell(2).value = "Passed";
                        sheet.getRow(i).getCell(3).value = "Alok";
                        sheet.getRow(i).getCell(4).value = "Alok/Results/Regression/Run_10-Apr-2020_07-01-01_PM/Excel Results";
                        wb.xlsx.writeFile('./RunSheet_Date.xlsx');
                    }
                    else {
                        sheet.getRow(i).getCell(2).value = "Failed";
                        sheet.getRow(i).getCell(3).value = "Alok";
                        sheet.getRow(i).getCell(4).value = "Alok/Results/Regression/Run_10-Apr-2020_07-01-01_PM/Excel Results";
                        wb.xlsx.writeFile('./RunSheet_Date.xlsx');
                    }
                }
                else {
                    continue;
                }
            }
        }
    }
});
