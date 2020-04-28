import { promise } from "protractor";

const fs = require('fs');

export class GetJson {

async readJsonFile (filePath:string):Promise <string>{
  await console.log('filepath ' + filePath);
  let fileContent:string = await fs.readFileSync(filePath);
  let jsonContent = await JSON.parse(fileContent);
  return fileContent;
}
};