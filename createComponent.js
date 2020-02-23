const componentName = process.argv[2];
const dir = `src/Components/${componentName}`;
const fs = require('fs');
const propInterface = `import { ReactNode } from 'react';\n\ninterface ${componentName}Props {\n\t\n}\n\nexport default ${componentName}Props;`;
const index = `import React from 'react';\nimport ${componentName}Props from "./propInterface";\n\nconst ${componentName} = (props: ${componentName}Props) => {\n\treturn(\n\t\t\n\t);\n};\nexport default ${componentName}`;

if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
    fs.writeFileSync(`${dir}/index.tsx`, index);
    fs.writeFileSync(`${dir}/propInterface.ts`, propInterface);
    fs.writeFileSync(`${dir}/styles.scss`, "");
}