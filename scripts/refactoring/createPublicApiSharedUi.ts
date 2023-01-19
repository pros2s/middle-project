import { Project } from 'ts-morph';
import path from 'path';

const project = new Project({});

project.addSourceFilesAtPaths('src/**/*.ts');
project.addSourceFilesAtPaths('src/**/*.tsx');

const files = project.getSourceFiles();

const sharedUiDirectory = project.getDirectory(
  path.resolve(__dirname, '..', '..', 'src', 'shared', 'ui'),
);
const allSharedUiDirectories = sharedUiDirectory?.getDirectories();

const isAbsoluteFSDPath = (value: string) => {
  const layers = ['app', 'entities', 'features', 'pages', 'shared', 'widgets'];
  return layers.some((layer) => value.startsWith(layer));
};

allSharedUiDirectories?.forEach((directory) => {
  const indexTsFilePath = `${directory.getPath()}/index.ts`;
  const indexTsFile = directory.getSourceFile(indexTsFilePath);

  if (!indexTsFile) {
    const sourceCode = `export * from './${directory.getBaseName()}';\n`;
    const newIndexTsFile = directory.createSourceFile(
      indexTsFilePath,
      sourceCode,
      {
        overwrite: true,
      },
    );

    newIndexTsFile.save();
  }
});

files.forEach((file) => {
  const importDeclarations = file.getImportDeclarations();

  importDeclarations.forEach((importDeclaration) => {
    const value = importDeclaration.getModuleSpecifierValue();
    const splitValue = value.split('/');

    const isLayerShared = splitValue[1] === 'shared';
    const isSecondUi = splitValue[2] === 'ui';

    if (
      isAbsoluteFSDPath(value.replace('@/', '')) &&
      isLayerShared &&
      isSecondUi
    ) {
      const newSharedPath = value.split('/').slice(0, 4).join('/');
      importDeclaration.setModuleSpecifier(newSharedPath);
    }
  });
});

project.save();
