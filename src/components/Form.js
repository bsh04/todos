import React, {useState, useContext} from "react"
import {AlertContext} from "../context/alert/alertContext";
import {FirebaseContext} from "../context/firebase/firebaseContext";

export const Form = () => {
    const [value, setValue] = useState('')
    const alert = useContext(AlertContext)
    const firebase = useContext(FirebaseContext)

    const submitHandler = event => {
        event.preventDefault()
        if (value.trim()) {
            firebase.addNote(value.trim()).then(() => {
                alert.show("Todos has been create!", "success")
            }).catch(() => {
                alert.show("Server error!", "success")
            })
        } else {
            alert.show("Input title todos!")
        }
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="form-group">
                <label htmlFor="exampleInputEmail1">Create todos</label>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Input Todos"
                    value={value}
                    onChange={e => setValue(e.target.value)}
                />

            </div>
        </form>
    )
}