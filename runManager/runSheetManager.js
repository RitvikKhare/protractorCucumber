"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var exceljs_1 = require("exceljs");
var new_1 = require("./new");
var node_xj = require('xls-to-json');
var trialClass = /** @class */ (function () {
    function trialClass() {
    }
    trialClass.prototype.tryConvertingFunction = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        node_xj({
                            input: "Alok/Results/Regression/Run_10-Apr-2020_05-01-01_PM/Excel Results/Summary.xls",
                            output: "Alok/Results/Regression/Run_10-Apr-2020_05-01-01_PM/Excel Results/output.json",
                            sheet: "Result_Summary",
                        }, function (err, result) {
                            if (err) {
                                console.error(err);
                            }
                            else {
                                console.log(result);
                            }
                        });
                        return [4 /*yield*/, console.log("converting function to xls to json")];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    trialClass.prototype.UpdateResultFunction = function () {
        return __awaiter(this, void 0, void 0, function () {
            var jsonst, wb, obj;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        jsonst = "";
                        wb = new exceljs_1.Workbook();
                        obj = new new_1.GetJson();
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
                        return [4 /*yield*/, console.log("UpdateResultFunction function to xls to json")];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return trialClass;
}());
var newObject = new trialClass();
newObject.tryConvertingFunction();
newObject.UpdateResultFunction();
