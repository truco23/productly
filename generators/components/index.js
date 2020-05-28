'use strict';

module.exports = {
  descirption: 'Create component in reactjs',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'Whats your name component?',
      default: 'Default',
    },
    {
      type: 'input',
      name: 'module',
      message: 'Whats your name page?',
      default: 'Default',
    },
    {
      type: 'list',
      name: 'componentType',
      message: 'Type your component?',
      default: 'none',
      choices: [
        {
          name: 'Class component',
          value: 'class',
        },
        {
          name: 'Function component',
          value: 'function',
        },
      ],
    },
  ],
  actions: data => {
    let actions = [];

    if (data.componentType === 'class') {
      actions = [
        {
          type: 'add',
          path: `../src/pages/{{properCase module}}/components/{{properCase name}}/{{properCase name}}.tsx`,
          templateFile: `./components/class/index.js.hbs`,
          abortOnFail: true,
        },
        {
          type: 'add',
          path: `../src/pages/{{properCase module}}/components/{{properCase name}}/{{lowerCase name}}.scss`,
          templateFile: ``,
          abortOnFail: true,
        },
        {
          type: 'add',
          path: `../src/stories/1-{{properCase name}}.stories.js`,
          templateFile: `./components/class/stories.js.hbs`,
          abortOnFail: true,
        },
        {
          type: 'add',
          path: `../cypress/integration/{{lowerCase name}}/{{lowerCase name}}.spec.js`,
          templateFile: `./components/class/test.js.hbs`,
          abortOnFail: true,
        },
        {
          type: 'append',
          path: `../src/pages/{{properCase module}}/components/{{properCase name}}/{{properCase name}}.tsx`,
          pattern: '// imports',
          template: `import './{{lowerCase name}}.scss';`,
        },
      ];
    } else {
      actions = [
        {
          type: 'add',
          path: `../src/pages/{{properCase module}}/components/{{properCase name}}/{{properCase name}}.tsx`,
          templateFile: `./components/function/index.js.hbs`,
          abortOnFail: true,
        },
        {
          type: 'add',
          path: `../src/pages/{{properCase module}}/components/{{properCase name}}/{{lowerCase name}}.scss`,
          templateFile: ``,
          abortOnFail: true,
        },
        {
          type: 'add',
          path: `../src/stories/1-{{properCase name}}.stories.js`,
          templateFile: `./components/function/stories.js.hbs`,
          abortOnFail: true,
        },
        {
          type: 'add',
          path: `../cypress/integration/{{lowerCase name}}/{{lowerCase name}}.spec.js`,
          templateFile: `./components/function/test.js.hbs`,
          abortOnFail: true,
        },
        {
          type: 'append',
          path: `../src/pages/{{properCase module}}/components/{{properCase name}}/{{properCase name}}.tsx`,
          pattern: '// imports',
          template: `import './{{lowerCase name}}.scss';`,
        },
      ];
    }
    return actions;
  },
};