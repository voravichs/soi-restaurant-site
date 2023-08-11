const fs = require('fs');
const { parse } = require('json2csv');

const inputFiles = ['soi2data.json', 'soi3data.json'];

inputFiles.forEach(file => {
    const jsonData = JSON.parse(fs.readFileSync(file, 'utf-8'));
    
    try {
        const csv = parse(jsonData);
        const outputFileName = file.replace('.json', '.csv');
        fs.writeFileSync(outputFileName, csv);
        console.log(`Converted ${file} to ${outputFileName}`);
    } catch (err) {
        console.error(`Could not convert ${file}. Error: ${err.message}`);
    }
});
