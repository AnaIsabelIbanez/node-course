const fs = require('fs');

const originalNote = {
  title: 'some title',
  body: 'Some body'
};

fs.writeFileSync('notes.json', JSON.stringify(originalNote));

const noteString = fs.readFileSync('notes.json');

const note = JSON.parse(noteString);

console.log(typeof  note);
console.log(note.title);
