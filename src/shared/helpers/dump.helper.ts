import fs from 'fs';

const getFolderContent = (folderPath: string) => {
  return fs.readdirSync(folderPath);
};

export { getFolderContent };
