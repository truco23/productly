'use strict';

module.exports = {
  descirption: 'Create page in reactjs',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'Whats your name page?',
      default: 'Default',
    },
    {
      type: 'list',
      name: 'pageType',
      message: 'Type your page?',
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

    if (data.pageType === 'class') {
      actions = [
        {
          type: 'add',
          path: `../src/pages/{{properCase name}}/{{properCase name}}.tsx`,
          templateFile: `./pages/class/index.js.hbs`,
          abortOnFail: true,
        },
        {
          type: 'add',
          path: `../src/pages/{{properCase name}}/{{lowerCase name}}.scss`,
          templateFile: ``,
          abortOnFail: true,
        },
        {
          type: 'append',
          path: `../src/pages/{{properCase name}}/{{properCase name}}.tsx`,
          pattern: '// imports',
          template: `import './{{lowerCase name}}.scss';`,
        },
        {
          type: 'append',
          path: `../src/pages/index.tsx`,
          pattern: '// imports',
          template: `import {{properCase name}} from './{{properCase name}}/{{properCase name}}';`,
        },
        {
          type: 'append',
          path: `../src/pages/index.tsx`,
          pattern: '{/* pages */}',
          template: `       <{{properCase name}} />`,
        },
      ];
    } else {
      actions = [
        {
          type: 'add',
          path: `../src/pages/{{properCase name}}/{{properCase name}}.tsx`,
          templateFile: `./pages/function/index.js.hbs`,
          abortOnFail: true,
        },
        {
          type: 'add',
          path: `../src/pages/{{properCase name}}/{{lowerCase name}}.scss`,
          templateFile: ``,
          abortOnFail: true,
        },
        {
          type: 'append',
          path: `../src/pages/{{properCase name}}/{{properCase name}}.tsx`,
          pattern: '// imports',
          template: `import './{{lowerCase name}}.scss';`,
        },
        {
          type: 'append',
          path: `../src/pages/index.tsx`,
          pattern: '// imports',
          template: `import {{properCase name}} from './{{properCase name}}/{{properCase name}}';`,
        },
        {
          type: 'append',
          path: `../src/pages/index.tsx`,
          pattern: '{/* pages */}',
          template: `       <{{properCase name}} />`,
        },
      ];
    }
    return actions;
  },
};