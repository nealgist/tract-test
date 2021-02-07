import React from 'react'

class Users {

  static async fetchOne(userId) {
    // Mock data
    return {
      id: 'old-resonance-0',
      firstName: 'Harry',
      fullName: 'Harry Dresden',
      lastName: 'Dresden',
      username: 'h.dres2021',
      thumbnail: 'https://digitalwebdude.s3.us-east-2.amazonaws.com/dresden.jpg'
    }
  }

  static async fetch() {}
  static async fetchByUsername() {}
  static async fetchByEmail() {}
  
  static async find() {}
  static async findOne() {}
  static async findByUsername() {}
  static async findByEmail() {}
  static async findCreatorByVideoId() {}

}

export default Users
