import React from "react"

export const Notes = ({notes}) => {
    return (
        <>
            <ul className="list-group">
                {notes.map(note => (
                    <li
                        className="list-group-item d-flex justify-content-between align-items-center"
                        key={note.index}
                    >
                        {note.title}
                        <button type="button" className="btn btn-outline-success">Performed</button>
                    </li>
                ))}
            </ul>
        </>
    )
}