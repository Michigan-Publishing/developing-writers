// import escapeRegExp from 'lodash.escaperegexp';

export const escapeWithRegexp = (originalString) => escape(originalString || '');

export const unescapeWithRegexp = (originalString) => unescape( (originalString || '') ); //.replace(/\\(.)/g, ($0, $1) => $1) );