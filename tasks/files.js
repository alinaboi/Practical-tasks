import { existsSync, writeFileSync, appendFileSync, readFileSync } from "fs";

const FILE_FORMAT = ".txt";

function createFile(filename) {
  if (existsSync(filename + FILE_FORMAT)) {
    console.log(`File '${filename}' already exists.`);
  } else {
    writeFileSync(filename + FILE_FORMAT, "");
    console.log(`File '${filename}' created successfully.`);
  }
}

function createFileWithDifferentName(filename) {
  if (existsSync(filename + FILE_FORMAT)) {
    writeFileSync(filename + Date.now() + FILE_FORMAT, "");
  } else {
    writeFileSync(filename + FILE_FORMAT, "");
    console.log(`File '${filename}' created successfully.`);
  }
}

function writeFile(filename, data) {
  writeFileSync(filename, data);
  console.log(`Data written to '${filename}' successfully.`);
}

function writeToNewFile(filename, data) {
  if (existsSync(filename + FILE_FORMAT)) {
    console.log(`File '${filename}' already exists. Do nothing`);
  } else {
    writeFile(filename + FILE_FORMAT, data);
  }
}

function appendFile(filename, data) {
  appendFileSync(filename + FILE_FORMAT, data);
  console.log(`Data appened to '${filename}' successfully.`);
}

function readFile(filename) {
  if (existsSync(filename + FILE_FORMAT)) {
    const data = readFileSync(filename + FILE_FORMAT, "utf8");
    console.log(`Content of '${filename}':\n${data}`);
  } else {
    console.log(`File '${filename}' does not exist.`);
  }
}

const filename = "example";
createFile(filename);
createFileWithDifferentName(filename);
writeToNewFile(filename, "Hey 0");
// writeFile(filename, "Hey 1");
appendFile(filename, "\nHey 2");
readFile(filename);
