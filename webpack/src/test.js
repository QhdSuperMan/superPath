export default {
  join: function(a,b) {
    console.log(this.log)
    return a.join(b)
  },
  log: {
    id: 1
  }
}