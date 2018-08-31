export class MeetupService {
  static findAll() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let data = require('../data')
        let meetups = data.meetups

        resolve(meetups)
      }, 1000)
    })
  }

  static findOne(meetupId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let data = require('../data')
        let meetups = data.meetups
        let meetup = meetups.find(el => el.id === parseInt(meetupId))

        if (meetup) {
          resolve(meetup)
        } else {
          reject(new Error('not_found'))
        }
      }, 1000)
    })
  }
}
