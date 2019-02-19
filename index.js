var fs = require('fs');
var StatMode = require('stat-mode');
var colors = require('colors');

fs.readFile('./tekst.txt', 'utf-8', function (err, data) {
    console.log('Dane przed zapisem!'.blue);
    console.log(data);
    fs.appendFile('./tekst.txt', '\nA tak wyglądają po zapisie!', function (err) {
        if (err) throw err;
        console.log('Zapisano!'.blue);
        fs.readFile('./tekst.txt', 'utf-8', function (err, data) {
            console.log('Dane po zapisie'.blue)
            console.log(data);
        });
    });
});

var testFolder = './tests/';
//do folderu wrzucilam testowyPlik.txt

fs.readdir(testFolder, (err, files) => {
    files.forEach(file => {
        console.log(file);
    });

});