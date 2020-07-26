import React, {useContext} from "react"
import {AlertContext} from "../context/alert/alertContext"
import {TransitionGroup, CSSTransition} from 'react-transition-group'

export const Notes = ({notes, onRemove}) => {
    const alert = useContext(AlertContext)
    return (
        <>
            <TransitionGroup component="ul" className="list-group">
                {
                    notes.map((note) => (
                        <CSSTransition
                            key={note.id}
                            classNames={'note'}
                            timeout={800}
                        >
                            <li
                                className="list-group-item d-flex justify-content-between align-items-center"
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
                        </CSSTransition>
                    ))
                }
            </TransitionGroup>
        </>
    )

}
