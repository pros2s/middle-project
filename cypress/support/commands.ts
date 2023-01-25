/// <reference types="cypress" />

import * as commonCommands from './commands/common';
import * as profileCommands from './commands/profile';
import * as articlesCommands from './commands/articles';
import * as articleCommentsCommands from './commands/articleComments';
import * as artcileRateCommands from './commands/artcileRate';

Cypress.Commands.addAll(commonCommands);
Cypress.Commands.addAll(profileCommands);
Cypress.Commands.addAll(articlesCommands);
Cypress.Commands.addAll(articleCommentsCommands);
Cypress.Commands.addAll(artcileRateCommands);
