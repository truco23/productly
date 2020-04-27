'use strict';

module.exports = {
  descirption: 'Create component in reactjs',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'Create in compoenent?',
      default: 'Default',
    },
    {
      type: 'list',
      name: 'componentType',
      message: 'Component type?',
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
          path: `../src/components/{{properCase name}}/{{properCase name}}.tsx`,
          templateFile: `./components/class/index.js.hbs`,
          abortOnFail: true,
        },
        {
          type: 'add',
          path: `../src/components/{{properCase name}}/{{lowerCase name}}.scss`,
          templateFile: ``,
          abortOnFail: true,
        },
        {
          type: 'append',
          path: `../src/components/{{properCase name}}/{{properCase name}}.tsx`,
          pattern: '// imports',
          template: `import './{{lowerCase name}}.scss';`,
        },
      ];
    } else {
      actions = [
        {
          type: 'add',
          path: `../src/components/{{properCase name}}/{{properCase name}}.tsx`,
          templateFile: `./components/function/index.js.hbs`,
          abortOnFail: true,
        },
        {
          type: 'add',
          path: `../src/components/{{properCase name}}/{{lowerCase name}}.scss`,
          templateFile: ``,
          abortOnFail: true,
        },
        {
          type: 'append',
          path: `../src/components/{{properCase name}}/{{properCase name}}.tsx`,
          pattern: '// imports',
          template: `import './{{lowerCase name}}.scss';`,
        },
      ];
    }
    return actions;
  },
};