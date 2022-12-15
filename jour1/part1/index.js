const fs = require("fs");
const path = require("path");
const ora = require("ora");
const chalk = require("chalk");

function main() {
    console.time('exec')
    const resolving = ora("Reading file").start();
    // const rawInput = fs.readFileSync(path.resolve(__dirname, "test.txt"), "utf-8");
    const rawInput = fs.readFileSync(path.resolve(__dirname, "input.txt"), "utf-8");

    const elves = rawInput.split('\n\n').map(group => group.split('\n').map(line => parseInt(line)))

    const elvesCalories = elves.map(elves => elves.reduce((calories, snack) => calories + snack, 0))

    maxCalories = Math.max(...elvesCalories)
    
    resolving.succeed(
        `Jour ${chalk.red(1)} - the answer is ${chalk.bold.magenta(maxCalories)}`
    );
    console.timeEnd('exec')
}

main();