// const buf = Buffer.from('72756e6f6f62', 'utf8');

var a = new Uint8Array(8);

var b = new Int32Array(a);

var c = new Uint8Array(b, 2);

var d = new Int16Array(c, 2, 2)

console.log(a,b,c,d)