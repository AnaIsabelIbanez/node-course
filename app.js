const fs = require('fs');
const _  = require('lodash');
const yargs  = require('yargs');

const notes = require('./notes.js');

const argv = yargs.argv;

const command = argv._[0];

if (command === 'add') {
  const note = notes.addNote(argv.title, argv.body);
  if (note) {
    console.log('note created');
    notes.logNote(note);
  } else {
    console.log('note title taken');
  }
} else if ( command === 'list') {
  const allNotes = notes.getAll();
  console.log(`printing ${allNotes.length} note(s)`);
  allNotes.forEach((note) => note.log(note));
}  else if ( command === 'remove') {
  const noteRemoved = notes.removeNote(argv.title);
  const message = noteRemoved ? 'Note was remove' : 'Note not found';
  console.log(message);
}  else if ( command === 'read') {
  const note = notes.getNote(argv.title);
  if(note) {
    console.log('Note found');
    notes.logNote(note);
  } else {
    console.log('Note not found');
  }
} else {
  console.log('command not recognized');
}
