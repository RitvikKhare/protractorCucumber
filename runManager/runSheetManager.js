"use strict";
exports.__esModule = true;
var exceljs_1 = require("exceljs");
var new_1 = require("./new");
var wb = new exceljs_1.Workbook();
wb.xlsx.readFile("./RunSheet_Date.xlsx").then(function () {
    var sheet = wb.getWorksheet("Results");
    sheet.getRow(4).getCell(2).value = "Passed";
    wb.xlsx.writeFile('./RunSheet_Date.xlsx');
    for (var i = 2; i <= sheet.rowCount; i++) {
        if (sheet.getRow(i).getCell(2).value == "Passed") {
        }
    }
    for (var i = 2; i <= sheet.rowCount; i++) {
        if (sheet.getRow(i).getCell(2).value == "" || sheet.getRow(i).getCell(2).value == "Failed") {
        }
    }
    var obj = new new_1.GetFiles();
    var excel_file = obj.readExcelFile();
    console.log(excel_file);
    wb.xlsx.readFile(excel_file).then(function () {
        var sheet1 = wb.getWorksheet("Result_Summary");
        console.log(sheet1.getRow(2).getCell(3).value);
    });
});
