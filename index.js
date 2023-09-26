const { Triangle, Circle, Square } = require("./lib/shapes")
const inquirer = require("inquirer")
const fs = require("fs");

const mainMenu = async () => {
    const svgMaker = await inquirer.prompt([
        {
            type: "input",
            message: "please write your logo limit three characters",
            name: "logo"
        },
        {
            type: "input",
            message: "what is the logo color",
            name: "logoColor"
        },
        {
            type: "list",
            message: "please choce a shape",
            name: "shapes",
            choices: ["square", "circle", "triangle"]

        },
        {
            type: "input",
            message: "what is the shape color",
            name: "shapeColor"
        }
    ])
    console.log(svgMaker)
}
mainMenu()