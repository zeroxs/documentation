const fs = require('fs');
const page = fs.readFileSync("./content/en/integrations/guide/aws-manual-setup.md", 'utf-8');

console.log("Online");

// updatedPage = fs.writeFileSync("./content/en/account_management/authn_mapping/_index.md", page.replace(/^{{% (.*%)/gim, "{{<$1"));

const updatedPage = page.replace(/\{\{\% tab (.*)\%\}\}/gim, "{{< tab $1>}}");
updatedPage.replace(/^\{\{% \/tab %\}\}/g, "{{< /tab >}}");

console.log(updatedPage);
