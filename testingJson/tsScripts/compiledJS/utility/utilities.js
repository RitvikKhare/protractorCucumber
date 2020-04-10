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
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require('fs');
class GetJson {
    // Read the file, and pass it to your callback
    readJsonFile(filePath) {
        return __awaiter(this, void 0, void 0, function* () {
            yield fs.readFile(filePath, (err, data) => __awaiter(this, void 0, void 0, function* () {
                if (err)
                    throw err;
                let jsonContent = yield JSON.parse(data);
                yield console.log("filePath " + filePath + " | content");
                yield console.log(jsonContent);
            }));
        });
    }
}
exports.GetJson = GetJson;
let obj = new GetJson();
obj.readJsonFile('../testingJson/tsScripts/testData/testingData.json');
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbGl0aWVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vdXRpbGl0eS91dGlsaXRpZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxNQUFNLEVBQUUsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7QUFFekIsTUFBYSxPQUFPO0lBRXBCLDhDQUE4QztJQUN2QyxZQUFZLENBQUUsUUFBZTs7WUFDL0IsTUFBTSxFQUFFLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFPLEdBQUcsRUFBRSxJQUFJLEVBQUUsRUFBRTtnQkFDL0MsSUFBSSxHQUFHO29CQUFFLE1BQU0sR0FBRyxDQUFDO2dCQUNuQixJQUFJLFdBQVcsR0FBRyxNQUFNLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ3pDLE1BQU0sT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLEdBQUcsUUFBUSxHQUFHLFlBQVksQ0FBQyxDQUFDO2dCQUN6RCxNQUFNLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDbkMsQ0FBQyxDQUFBLENBQUMsQ0FBQztRQUNMLENBQUM7S0FBQTtDQUNBO0FBWEQsMEJBV0M7QUFFRCxJQUFJLEdBQUcsR0FBRyxJQUFJLE9BQU8sRUFBRSxDQUFDO0FBQ3hCLEdBQUcsQ0FBQyxZQUFZLENBQUMsb0RBQW9ELENBQUMsQ0FBQyJ9