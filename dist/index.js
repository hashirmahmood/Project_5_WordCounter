import inquirer from "inquirer";
const counter = async () => {
    const input = await inquirer.prompt([
        {
            name: "x",
            message: "Enter data:",
            type: "input",
        },
    ]);
    let word = input.x;
    let count = 0;
    for (let i = 0; i < word.length; i++) {
        if (word[i] === " ") {
            count++;
        }
    }
    console.log(`Total words are: ${count + 1}`);
};
await counter();
