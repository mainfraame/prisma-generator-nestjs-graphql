import {
  camelCase as lodashCamelCase,
  startCase as lodashStartCase
} from 'lodash';

export const camelCase = (value: string) => {
  return lodashCamelCase(value).replace(/ /g, '');
};

export const startCase = (value: string) => {
  return lodashStartCase(value).replace(/ /g, '');
};
