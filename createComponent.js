const componentName = process.argv[2];
const dir = `src/Components/${componentName}`;
const fs = require('fs');

if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
    fs.writeFileSync(`${dir}/index.tsx`);
    fs.writeFileSync(`${dir}/propInterface.ts`);
    fs.writeFileSync(`${dir}/styles.scss`);
}