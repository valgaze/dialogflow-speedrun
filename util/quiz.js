const fs = require('fs');
const path = require('path');
const readline = require("readline");
const util = require('./index');
const config = {
    template: path.resolve(__dirname, './templates/_handler/intent.template.js'),
    targetDir : path.resolve(__dirname, '..', 'webhook/handlers'),
    configPath: path.resolve(__dirname, '../webhook/index.js'),
    fileExists: 'That intent file already exists, delete existing or pick a different intent name',
    intro: `Pick an intent name...\n\n`,
}


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});



console.log(config.intro)

rl.question("What is the name of your intent? ", async function(name) {    
    const sanitizedName = name.split(' ').join('_')
    const nameScheme = `${sanitizedName}.intent.js`
    const fullPath = path.resolve(config.targetDir, nameScheme);
    
    const exists = await util.exists(fullPath);

    if (exists) {
        console.log(config.fileExists);
        console.log('Exiting...');
        rl.close();
        process.exit(0); // not an error
    } else {   
        const fileCopy = await util.copy(config.template, fullPath)
                                   .catch(e => { 
                                    console.log('\n\nCatastrophic error:', e)
                                    process.exit(1);   
                                    });

        console.log(`\n\nIn ${config.configPath}, add the following:`);
        console.log(`

registerHandler('${name}', require('./handlers/${nameScheme}'));
        
`)
    
    }
 
 
    rl.close();

});

rl.on("close", function() {
    process.exit(0);
});