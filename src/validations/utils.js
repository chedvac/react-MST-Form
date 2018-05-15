const messageIdentifier = "###";

export const extractMessage = message => {
  const messageExpression = `${messageIdentifier}(.*?)${messageIdentifier}`;
  const messageRegularExpression = new RegExp(messageExpression);

  const result = message.match(messageRegularExpression);
  return result ? result[1] : "";
};


export const stringExtensionFormat = function (source, params) { //eslint-disable-line complexity
  if (typeof(source) !== 'string') {
     // formExceptions.throwFormError('invalid source or source is missing');
  }

  if (typeof(params) === 'object') {
     // formExceptions.throwFormError('invalid params');
  }

  if (arguments.length === 1) {
      return source;
  }
  if (arguments.length > 2 && params.constructor !== Array) {
      params = Array.from(arguments).slice(1);
  }
  if (params.constructor !== Array) {
      params = [params];
  }
  params.forEach((n,i) => {
    source = source.replace(new RegExp('\\{' + i + '\\}', 'g'), function () {
          return n;
      });
  });

  return source;
};