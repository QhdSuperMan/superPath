class Animal {
    public name: string;
    protected protectedN: string;
    private privateN: string;
    constructor(theName: string) { this.name = theName; }
}

class Dog extends Animal {
  constructor () {
    super('1')
  }
}