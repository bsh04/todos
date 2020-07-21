import React from "react"
import {Form} from "../components/Form";
import {Notes} from "../components/Notes";

export const Home = () => {
    const notes = new Array(5)
        .fill('')
        .map((_, index) => ({id: index, title:`Note ${index + 1}`}))
    return (
        <>
            <Form/>
            <hr/>
            <Notes notes={notes}/>
        </>
    )
}
