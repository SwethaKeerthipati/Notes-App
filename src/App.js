import { useState } from "react";
import { useEffect } from "react";
import { nanoid } from "nanoid";
import NotesList from "./components/NotesList";
import Search from "./components/Search";
import Header from "./components/Header";

const App = () => {
  const [notes, setNotes] = useState(null);

  const [searchText, setSearchText] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    try {
      const savedNotes = JSON.parse(
        localStorage.getItem("react-notes-app-data")
      );
      console.log("Saved notes:", savedNotes);
      if (savedNotes) {
        setNotes(savedNotes);
      }
    } catch (error) {
      console.log("Error accessing local storage:", error);
    }
  }, []);

  useEffect(() => {
    if (notes === null) {
      return;
    }
    console.log("Saving notes to local storage:", notes);
    localStorage.setItem("react-notes-app-data", JSON.stringify(notes));
  }, [notes]);

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    };
    // const newNotes = [...notes, newNote];
    // setNotes(newNotes);
    const newNotes = [newNote, ...notes];
    setNotes(newNotes);
  };
  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };
  if (!notes) {
    return <h3>Loading..</h3>;
  }
  return (
    <div className={`${darkMode && "dark-mode"}`}>
      <div className="container">
        <Header handleToggleDarkMode={setDarkMode} />
        <Search handleSearchNote={setSearchText} />
        <NotesList
          notes={notes.filter((note) =>
            note.text.toLowerCase().includes(searchText)
          )}
          handleAddNote={addNote}
          handleDeleteNote={deleteNote}
        />
      </div>
    </div>
  );
};

export default App;
