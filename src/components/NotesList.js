import Note from "../components/Note"
import AddNote from "../components/AddNote"
const NoteList = ({ notes, handleAddNote, handleDeleteNote }) => {
    return <div className="notes-list">
        {notes.map((note) =>
            <Note
                id={note.id}
                text={note.text}
                date={note.date}
                handleDeleteNote={handleDeleteNote} 
                />
        )}
        <AddNote
         handleAddNote={handleAddNote} 
         />
    </div>
}
export default NoteList