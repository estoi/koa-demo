const validator = require('validator')
const { ParameterException } = require('../../core/http-exception')

const RegisterValidator = async function(ctx, next) {
  const { email, password1, password2 } = ctx.request.body
  let v = validator.isLength(email, { min: 6, max: 64 })
  if (!v) {
    throw new ParameterException('email长度必须在6~64个字符')
  }
  v = validator.isEmail(email)
  if (!v) {
    throw new ParameterException('email格式错误')
  }
  v = validator.isLength(password1, { min: 6, max: 32 })
  if (!v) {
    throw new ParameterException('密码至少6个字符，最多32个字符')
  }
  v = validator.isLength(password2, { min: 6, max: 32 })
  if (!v) {
    throw new ParameterException('密码至少6个字符，最多32个字符')
  }
  if (password1 !== password2) {
    throw new ParameterException('两个密码必须相同')
  }
  await next()
}

module.exports = {
  RegisterValidator
}