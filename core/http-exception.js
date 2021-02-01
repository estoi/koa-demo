class HttpException extends Error {
  constructor(msg = '服务器异常', code = 400, errorCode = 10000) {
    super()
    this.msg = msg
    this.code = code
    this.errorCode = errorCode
  }
}

class ParameterException extends HttpException {
  constructor(msg = '参数错误', errorCode) {
    super()
    this.msg = msg
    this.errorCode = errorCode || 10000
  }
}

class Success extends HttpException {
  constructor(msg = 'ok') {
    super()
    this.msg = msg
    this.code = 201
    this.errorCode = 0
  }
}

class NotFound extends HttpException {
  constructor(msg = '资源未找到', errorCode) {
    super()
    this.msg = msg
    this.code = 401
    this.errorCode = errorCode || 10002
  }
}

class EmailRepetition extends HttpException {
  constructor(msg = '该邮箱已被使用') {
    super()
    this.msg = msg
    this.code = 402
    this.errorCode = 10003
  }
}

module.exports = {
  HttpException,
  ParameterException,
  Success,
  NotFound,
  EmailRepetition
}
