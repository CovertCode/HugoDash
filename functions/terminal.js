const { exec } = require('child_process');
// const gitCmd = `git add . && git commit -m "update" && git push -u origin master`;
const buildHugo = 'hugo'
async function runCommand() {

    await exec(`${buildHugo}`, (err, stdout, stderr) => {
        if (err) {
            // This will execute if incorrect command is passed
            console.log(`Error occured`);
            console.log(err);
        }
        if (stdout) {
            console.log(stdout);
        }
        // if (stdout) {
        //     console.log(`Build finished`);
        //     // console.log(stdout);
        //     exec(`${gitCmd}`, (err, stdout, stderr) => {
        //         if (err) {
        //             // This will execute if incorrect command is passed
        //             console.log(`Error occured`);
        //             console.log(err);
        //         }
            
        //         if (stdout) {
        //             console.log(`Post uploaded`);
        //             // console.log(stdout);
        //         }
            
        //         if (stderr) {
        //             console.log(`stderr`);
        //             console.log(stderr);
        //         }
        //     });
        // }
    
        if (stderr) {
            console.log(`stderr`);
            console.log(stderr);
        }
    });
}


module.exports = {
    runCommand
}