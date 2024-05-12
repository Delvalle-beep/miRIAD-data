import {
  getFilesFromPath,
  getFoldersFromPath,
} from '@/shared/helpers/dump.helper';
import { Injectable } from '@nestjs/common';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const csvToJson = require('convert-csv-to-json');
@Injectable()
export class DumpService {
  private PATH =
    process.env.FILE_PATH ||
    '/home/venus/Projects/expression-files/RNA-Seq/final-data';
  async processData(files: string[], folderPath: string) {
    console.log('Step 4 - Processing files:', files);
    if (files.length === 0) return;
    files.forEach(async (file) => {
      console.log('Step 4 - Processing file:', file);
      if (file.includes('.tsv')) {
        csvToJson
          .fieldDelimiter('\t')
          .getJsonFromCsv(`${folderPath}/${file}`, async (err, json) => {
            if (err) {
              console.log('Step 4 - Error:', err);
            }
            console.log('Step 4 - Parsed JSON:', json.length);
          });
      }
    });
  }

  async getProjectFolders(path: string, folder: string) {
    const files = await getFilesFromPath(`${path}/${folder}`);
    console.log('Step 3 - Processing files:', files);
    await this.processData(files, `${path}/${folder}`);
  }

  async getFolderInside(path: string, folder: string) {
    const folders = await getFoldersFromPath(`${path}/${folder}`);
    folders.forEach(async (foldername) => {
      await this.getProjectFolders(`${path}/${folder}`, foldername);
      console.log('Step 2 - Processing folder:', foldername);
    });
  }

  async startQueue() {
    const folders = await getFoldersFromPath(this.PATH);
    folders.forEach(async (folder) => {
      console.log('Step 1 - Processing folder:', folder);
      await this.getFolderInside(this.PATH, folder);
    });
    return;
  }
}
