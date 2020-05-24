'use strict';

module.exports = {
  descirption: 'Create shared component in reactjs',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'Whats your name component?',
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
          path: `../src/shared/components/{{properCase name}}/{{properCase name}}.tsx`,
          templateFile: `./shared/class/index.js.hbs`,
          abortOnFail: true,
        },
        {
          type: 'add',
          path: `../src/shared/components/{{properCase name}}/{{lowerCase name}}.scss`,
          templateFile: ``,
          abortOnFail: true,
        },
        {
          type: 'add',
          path: `../src/stories/1-{{properCase name}}.stories.js`,
          templateFile: `./shared/class/stories.js.hbs`,
          abortOnFail: true,
        },
        {
          type: 'append',
          path: `../src/shared/components/{{properCase name}}/{{properCase name}}.tsx`,
          pattern: '// imports',
          template: `import './{{lowerCase name}}.scss';`,
        },
      ];
    } else {
      actions = [
        {
          type: 'add',
          path: `../src/shared/components/{{properCase name}}/{{properCase name}}.tsx`,
          templateFile: `./shared/function/index.js.hbs`,
          abortOnFail: true,
        },
        {
          type: 'add',
          path: `../src/shared/components/{{properCase name}}/{{lowerCase name}}.scss`,
          templateFile: ``,
          abortOnFail: true,
        },
        {
          type: 'add',
          path: `../src/stories/1-{{properCase name}}.stories.js`,
          templateFile: `./shared/function/stories.js.hbs`,
          abortOnFail: true,
        },
        {
          type: 'append',
          path: `../src/shared/components/{{properCase name}}/{{properCase name}}.tsx`,
          pattern: '// imports',
          template: `import './{{lowerCase name}}.scss';`,
        },
      ];
    }
    return actions;
  },
};