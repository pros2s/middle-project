## Отчеты о тестах

### RTL и Jest

Для наглядного отчета об rtl и jest тестах используется [jest-html-reporters](https://www.npmjs.com/package/jest-html-reporters)

Если указать `openReport: true`, то html с отчетом о тестах будет открываться автоматически после прогона тестов

```typescript
reporters: [
    'default',
    [
      'jest-html-reporters',
      {
        publicPath: '<rootDir>reports/unit',
        filename: 'report.html',
        openReport: false,
        inlineSource: true,
        pageTitle: 'Unit tests',
      },
    ],
  ],
```

---

### Loki

Для отчетов скриншотных тестов используется [reg-cli](https://www.npmjs.com/package/reg-cli). Командой `npm run test:loki:report` сначала создается json файл с информацией о тестах, после чего на основе этого файла создается `report.html`, который можно открыть в браузере.

Скрипт, создающий [`report.json`](/scripts/generate-visual-json-report.js)

```javascript
const { promisify } = require('util');
const { readdir, writeFile } = require('fs');
const { join: joinPath, relative } = require('path');

const asyncReaddir = promisify(readdir);
const writeFileAsync = promisify(writeFile);

const lokiDir = joinPath(__dirname, '..', '.loki');
const actualDir = joinPath(lokiDir, 'current');
const expectedDir = joinPath(lokiDir, 'reference');
const diffDir = joinPath(lokiDir, 'difference');

(async function main() {
  const diffs = await asyncReaddir(diffDir);

  await writeFileAsync(
    joinPath(lokiDir, 'report.json'),
    JSON.stringify({
      newItems: [],
      deletedItems: [],
      passedItems: [],
      failedItems: diffs,
      expectedItems: diffs,
      actualItems: diffs,
      diffItems: diffs,
      actualDir: relative(lokiDir, actualDir),
      expectedDir: relative(lokiDir, expectedDir),
      diffDir: relative(lokiDir, diffDir),
    }),
  );
})();
```

## Скриншотные тесты с loki

Для тестирования ui компонентов необходимо сначала запустить storybook
`npm run sb`, а после этого сам loki `npm run test:loki`

Для ci/cd pipeline в github actions сначала создается файл storybook-static `npm run sb:build`, а после этого loki тестирует скриншоты с этого файла `npm run test:loki:ci`

## E2E тесты с cypress

Документация [cypress](https://docs.cypress.io/guides/getting-started/installing-cypress)

Подробнее о cypress в проекте - [в ./cypress](/cypress/cypress.md)
