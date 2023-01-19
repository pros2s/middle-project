import { Project } from 'ts-morph';

const project = new Project({});

project.addSourceFilesAtPaths('src/**/*.ts');
project.addSourceFilesAtPaths('src/**/*.tsx');

const files = project.getSourceFiles();

const isAbsoluteFSDPath = (value: string) => {
  const layers = ['app', 'entities', 'features', 'pages', 'shared', 'widgets'];
  return layers.some((layer) => value.startsWith(layer));
};

files.forEach((file) => {
  const importDeclarations = file.getImportDeclarations();

  importDeclarations.forEach((importDeclaration) => {
    const value = importDeclaration.getModuleSpecifierValue();

    if (isAbsoluteFSDPath(value)) {
      importDeclaration.setModuleSpecifier(`@/${value}`);
    }
  });
});

project.save();
