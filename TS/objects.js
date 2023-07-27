function printName(person) {
    console.log("".concat(person.first, " ").concat(person.last));
}
printName({ first: 'Blaire', last: 'Pang' });
var coord = { x: 2, y: 3 };
function randomCoord() {
    return { x: Math.random(), y: Math.random() };
}
function doublePoint(point) {
    return { x: point.x * 2, y: point.y * 2 };
}
var coord2 = { x: 2, y: 3 };
function doublePoint2(point) {
    return { x: point.x * 2, y: point.y * 2 };
}
// printName({ first: 'Blaire', last: 'Pang', age: 21 }); // error
var me = { first: 'Blaire', last: 'Pang', age: 21, isAlive: true };
printName(me); // no error
function cal(song) {
    return song.numStreams * 0.0033;
}
function printSong(song) {
    console.log("".concat(song.title, " - ").concat(song.artist));
}
var mySong = {
    title: 'Grateful',
    artist: 'dhruv',
    numStreams: 123456789,
    credits: {
        producer: 'qwe',
        writer: 'qwe'
    }
};
var earning = cal(mySong);
console.log(earning);
printSong(mySong);
