export class UserNotFoundError extends Error {
  constructor () {
    super('the user was not found')
    this.name = 'UserNotFoundError'
  }
}

