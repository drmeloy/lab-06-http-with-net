module.exports = rawRequest => {
  const parsedRequest = {};

  const firstSpace = rawRequest.indexOf(' ');
  const firstAech = rawRequest.indexOf('H');

  parsedRequest.method = rawRequest.slice(0, firstSpace);
  parsedRequest.path = rawRequest.slice(firstSpace + 1, firstAech - 1);

  if(rawRequest.includes('{"')){
    const startBody = rawRequest.indexOf('{');
    parsedRequest.body = rawRequest.slice(startBody, rawRequest.length);
  }

  return parsedRequest;
};
