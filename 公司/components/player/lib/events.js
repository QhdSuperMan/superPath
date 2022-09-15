class Events {
  constructor () {
    this.events = {}

    this.videoEvents = [
      'abort',
      'canplay',
      'canplaythrough',
      'durationchange',
      'emptied',
      'ended',
      'error',
      'loadeddata',
      'loadedmetadata',
      'loadstart',
      'mozaudioavailable',
      'pause',
      'play',
      'playing',
      'progress',
      'ratechange',
      'seeked',
      'seeking',
      'stalled',
      'suspend',
      'timeupdate',
      'volumechange',
      'waiting',
    ]
    this.playerEvents = [
      'destroy',
      'resize',
      'fullscreen',
      'fullscreen_cancel',
      'webfullscreen',
      'webfullscreen_cancel',
      'loading',
      'eventTriggered',
      'autoPlayError',
    ]
  }

  on (name, callback) {
    if (this.type(name) && typeof callback === 'function') {
      if (!this.events[name]) {
        this.events[name] = []
      }
      this.events[name].push(callback)
    }
  }

  trigger (name, info) {
    if (this.events[name] && this.events[name].length) {
      for (let i = 0; i < this.events[name].length; i++) {
        this.events[name][i](info)
      }
    }
    if (this.events['eventTriggered'] && this.events['eventTriggered'].length) {
      for (let i = 0; i < this.events['eventTriggered'].length; i++) {
        this.events['eventTriggered'][i](info)
      }
    }
  }

  off () {
    this.events = {}
  }

  type (name) {
    if (this.playerEvents.indexOf(name) !== -1) {
      return 'player'
    } else if (this.videoEvents.indexOf(name) !== -1) {
      return 'video'
    }

    console.error(`Unknown event name: ${name}`)
    return null
  }
}

export default Events
