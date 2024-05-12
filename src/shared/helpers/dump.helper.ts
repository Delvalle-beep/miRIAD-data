import * as fs from 'fs';

async function getFoldersFromPath(folderPath: string) {
  return await fs.readdirSync(folderPath).filter(function (file) {
    return fs.statSync(folderPath + '/' + file).isDirectory();
  });
}

async function getFilesFromPath(folderPath: string) {
  return await fs.readdirSync(folderPath).filter(function (file) {
    return fs.statSync(folderPath + '/' + file).isFile();
  });
}

async function readFile(filePath: string) {
  return await fs.readFileSync(filePath, 'utf8');
}

export { getFilesFromPath, getFoldersFromPath, readFile };
