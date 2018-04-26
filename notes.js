const fs = require('fs');

const fetchNotes = () => {
  try {
    const notesString = fs.readFileSync('notes-data.json');
    return JSON.parse(notesString);
  } catch (e) {
    return [];
  }
};

const saveNotes = (notes) => {
  fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

const addNote = (title, body) => {
  let notes = fetchNotes();
  const note = {
    title,
    body
  }
  // console.log('notes', notes);
  const duplicateNotes = notes.filter((noteElement) => noteElement.title === title);

  if(duplicateNotes.length === 0) {
    notes.push(note);
    saveNotes(note);
    return note;
  }
};

const getAll = () => {
  return fetchNotes();
}

const getNote = (title) => {
  const notes = fetchNotes();
  const filteredNotes = notes.filter((note) => note.title === title);
  return filteredNotes[0];
}

const removeNote = (title) => {
  const notes = fetchNotes();
  const filteredNotes = notes.filter((note) => note.title !== title);
  saveNotes(filteredNotes);

  return notes.length !== filteredNotes.length;
}

const logNote = (note) => {
  debugger;
  console.log('---');
  console.log(`Title2: ${note.title}`);
  console.log(`Body: ${note.body}`);
}

module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote,
  logNote
}
