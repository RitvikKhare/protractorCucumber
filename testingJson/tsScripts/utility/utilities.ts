const fs = require('fs');

export class GetJson {

// Read the file, and pass it to your callback
 async readJsonFile (filePath:string){
     await fs.readFile(filePath, async (err, data) => {
      if (err) throw err;
      let jsonContent = await JSON.parse(data);
      await console.log("filePath " + filePath + " | content");
      await console.log(jsonContent);
  });
}
}

//let obj = new GetJson();
//obj.readJsonFile('../protractorCucumber/testingJson/tsScripts/testData/firstProtractor.json');
