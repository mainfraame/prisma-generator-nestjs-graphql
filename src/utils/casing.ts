import { startCase as lodashStartCase } from 'lodash';

export const camelCase = (value: string) => {
  return value.charAt(0).toLowerCase() + value.slice(1);
};

export const startCase = (value: string) => {
  return lodashStartCase(value).replace(/ /g, '');
};
