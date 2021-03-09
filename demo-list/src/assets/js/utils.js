import md5 from 'js-md5'
function deToken(token) {
  if (token) {
    let Base64 = require('js-base64').Base64;
    let currentToken = token.split('.')[1];
    let string = Base64.decode(currentToken)
    let obj = JSON.parse(string)
    return obj;
  } else {
    return ''
  }
}

export default {deToken,md5,}
