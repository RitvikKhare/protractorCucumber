"use strict";
exports.__esModule = true;
var exceljs_1 = require("exceljs");
var new_1 = require("./new");
var wb = new exceljs_1.Workbook();
wb.xlsx.readFile("./RunSheet_Date.xlsx").then(function () {
    var sheet = wb.getWorksheet("Results");
    var _loop_1 = function (i) {
        if (sheet.getRow(i).getCell(2).value == "Passed") {
        }
        else {
            var obj = new new_1.GetFiles();
            var excel_file = obj.readExcelFile();
            wb.xlsx.readFile(excel_file).then(function () {
                var sheet1 = wb.getWorksheet("Result_Summary");
                for (var j = 2; j <= sheet1.rowCount; j++) {
                    if (sheet.getRow(i).getCell(1).value == sheet1.getRow(j).getCell(2).value) {
                        if (sheet1.getRow(j).getCell(7).value == "Passed") {
                            sheet.getRow(i).getCell(2).value = "Passed";
                            wb.xlsx.writeFile('./RunSheet_Date.xlsx');
                        }
                        else {
                            break;
                        }
                    }
                    else {
                        continue;
                    }
                }
            });
        }
    };
    for (var i = 2; i <= sheet.rowCount; i++) {
        _loop_1(i);
    }
});
