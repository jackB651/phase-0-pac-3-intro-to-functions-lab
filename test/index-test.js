function shout(string){
  return string.toUpperCase();
}

function whisper(string){
  return string.toLowerCase();
}

describe('shout(string)', function() {
  it('receives one argument and returns it in all caps', function() {
    expect(shout('hello')).toEqual('HELLO');
  })
})

describe('whisper(string)', function() {
  it('receives one argument and returns it in all lowercase', function() {
    expect(whisper('HELLO')).toEqual('hello');
  })
})

describe('logShout(string)', function() {
  it('takes a string argument and logs it in all caps using console.log()', function() {
    const spy = expect.spyOn(console, 'log').andCallThrough();

    logShout('hello');

    expect(spy).toHaveBeenCalledWith('HELLO');

    console.log(shout(string));
  })
})

describe('logWhisper(string)', function() {
  it('takes a string argument and logs it in all lowercase using console.log()', function() {
    const spy = expect.spyOn(console, 'log').andCallThrough();

    logWhisper('HELLO');

    expect(spy).toHaveBeenCalledWith('hello');

    console.log(whisper(string));
  })
})

describe('sayHiToHeadphonedRoommate(string)', function() {
  it('returns "I can\'t hear you!" if `string` is lowercase', function() {
    expect(sayHiToHeadphonedRoommate('hello')).toEqual("I can't hear you!");
  })

  it('returns "YES INDEED!" if `string` is uppercase', function() {
    expect(sayHiToHeadphonedRoommate('HELLO')).toEqual("YES INDEED!");
  })

  it('returns "I would love to!" if `string` is "Let\'s have dinner together!"`', function () {
    expect(sayHiToHeadphonedRoommate("Let's have dinner together!")).toEqual(
      "I would love to!"
    );
  });
})
const x = "Hello";
console.log(x);
console.log(x.toUpperCase());
console.log(x.toLowerCase());
function sayHiToHeadphonedRoommate(x){
if (x = "Let's have dinner together!"){
console.log("I would love too!");
}
else if (console.log(x === x.toLowerCaseCase())){
console.log("I can't hear you!");
}
else if (console.log(x === x.toUpperCase())){
console.log("YES INDEED");
}}