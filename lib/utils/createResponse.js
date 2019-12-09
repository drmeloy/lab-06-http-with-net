module.exports = responseObject => {
  return `HTTP/1.1 ${responseObject.status}
Accept-Ranges: bytes
Content-Length: ${responseObject.body.length}
Content-Type: ${responseObject.contentType}

${responseObject.body}`;
};
