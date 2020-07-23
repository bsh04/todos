import React from "react"
import { isEmpty } from "lodash"

export const Notes = ({notes}) => {
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
                                <button type="button" className="btn btn-outline-success">Performed</button>
                            </li>
                        ))
                }
            </ul>
        </>
    )
}