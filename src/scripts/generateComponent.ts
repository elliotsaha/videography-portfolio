import fs from 'fs';
import output from './consoleOutput';

const args: Array<string> = process.argv.slice(2);
const rootDir = `${process.cwd()}/src/components`;

if (!args[0]) {
  output('ERR', 'Missing Argument');
  process.exit(1);
}

const folder = args[0];

const folderExt = ['.tsx', '.test.tsx'];

const folderPath = `${rootDir}/${folder}`;
if (fs.existsSync(`${folderPath}/${folder}${folderExt[0]}`)) {
  output('ERR', 'Component Folder Already Exists');
  process.exit(1);
}

fs.mkdirSync(`${folderPath}`, { recursive: true });
for (let i = 0; i < folderExt.length; i += 1) {
  const filePath = `${folderPath}/${folder}${folderExt[i]}`;
  fs.writeFileSync(filePath, '');
  output('INFO', `Writing File : ${filePath}`);
}

output('SUCCESS', 'Wrote All Component Files');
process.exit(0);
