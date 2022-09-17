class Bar {
  constructor (player) {
    this.player = player
  }

  set (type, percentage) {
    percentage = Math.max(percentage, 0)
    percentage = Math.min(percentage, 1)
    this.player[type] = percentage
    this.player[type + 'Percentage'] = percentage * 100 + '%'
  }
}

export default Bar
