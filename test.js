const fs = require('fs');
const route = './content/en/integrations/guide/aws-manual-setup.md';
const page = fs.readFileSync(route, 'utf-8');
let regex2 = /\{\{% \/tab %\}\}/gim;
let regex1 = /^\{\{\% tab (.*)\%\}\}$/gim;

let updatedPage = page.replace(regex1, '{{< tab $1>}}');
updatedPage = updatedPage.replace(regex2, '{{< /tab >}}');

fs.writeFileSync(route, updatedPage);
