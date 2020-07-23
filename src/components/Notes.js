import React, {useContext} from "react"
import {isEmpty} from "lodash"
import {AlertContext} from "../context/alert/alertContext";

export const Notes = ({notes, onRemove}) => {
    const alert = useContext(AlertContext)
    return (
        <>
            <ul className="list-group" key={notes}>
                {
                    isEmpty(notes)
                        ?
                        <h1 className="text-center pt-4">Not todos yet</h1>
                        :
                        notes.map((note, index) => (
                            <li
                                className="list-group-item d-flex justify-content-between align-items-center"
                                key={index}
                            >
                                {note.title}
                                <button
                                    type="button"
                                    className="btn btn-outline-success"
                                    onClick={() => {
                                        onRemove(note.id)
                                        alert.show("You performed todos!", "success")
                                    }}
                                >
                                    Performed
                                </button>
                            </li>
                        ))
                }
            </ul>
        </>
    )

}
