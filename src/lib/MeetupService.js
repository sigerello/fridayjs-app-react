export class MeetupService {
  static findAll() {
    let data = require('../data')
    return data.meetups
  }
}
