"use strict";
exports.__esModule = true;
var fs = require('fs');
var path = require('path');
var folderPath = 'Alok/Results/Regression/Run_10-Apr-2020_07-01-01_PM/Excel Results';
var GetFiles = /** @class */ (function () {
    function GetFiles() {
    }
    GetFiles.prototype.readExcelFile = function () {
        var fileContent = fs.readdirSync(folderPath);
        var fileMain = path.join(folderPath, 'Summary.xlsx');
        return fileMain;
    };
    return GetFiles;
}());
exports.GetFiles = GetFiles;
;
