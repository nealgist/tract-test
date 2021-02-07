import React from 'react'

class Videos {

  static async fetchOne(videoId) {
    // Mock data
    return {
      id: 'Ync02d3ih',
      youtubeId: 'BdB1_QlR_rc',
      url: 'https://www.youtube.com/watch?v=BdB1_QlR_rc',
      title: '10 Astonishing Castles that you can BUY',
      description: `Pretium felis posuere diam ad a massa mollis ad quisque dui sem iaculis nostra sociosqu consectetur consectetur fames quam ut vestibulum nascetur praesent a vestibulum cum nisi a nisl.Adipiscing nullam parturient aenean tempor adipiscing parturient at adipiscing vehicula eu ut ante ullamcorper convallis consectetur egestas mi at dis diam. Dictumst adipiscing viverra.\n
                    Fusce suspendisse sociis hac porta ante adipiscing massa etiam hac donec habitasse nulla adipiscing varius phasellus viverra natoque a.Aliquam commodo luctus felis condimentum auctor cubilia magna parturient dictum non scelerisque parturient a hendrerit.\n
                    Pretium felis posuere diam ad a massa mollis ad quisque dui sem iaculis nostra sociosqu consectetur consectetur fames quam ut vestibulum nascetur praesent a vestibulum cum nisi a nisl.Adipiscing nullam parturient aenean tempor adipiscing parturient at adipiscing vehicula eu ut ante ullamcorper convallis consectetur egestas mi at dis diam. Dictumst adipiscing viverra.\n
                    Fusce suspendisse sociis hac porta ante adipiscing massa etiam hac donec habitasse nulla adipiscing varius phasellus viverra natoque a.Aliquam commodo luctus felis condimentum auctor cubilia magna parturient dictum non scelerisque parturient a hendrerit.`,
      liveStart: '4:30',
      liveEnd: '5:00',
      liveTimeZone: 'PDT',
      creatorId: 'fJi$eJg3^Hj7vH',
      creatorName: 'Gandalf',
      creatorThumbnail: 'https://digitalwebdude.s3.us-east-2.amazonaws.com/assets/gandalf.jpg'
    }
  }

  static async fetch() {}
  static async fetchByTitle() {}
  static async fetchByYoutubeId() {}
  static async fetchByCreatorId() {}

  static async find() {}
  static async findOne() {}
  static async findByTitle() {}
  static async findByYoutubeId() {}
  static async findByCreatorId() {}

}

export default Videos
