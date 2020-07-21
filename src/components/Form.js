import React from "react"

export const Form = () => {
    return (
        <form>
            <div className="form-group">
                <label htmlFor="exampleInputEmail1">Create todos</label>
                <input type="text" className="form-control" placeholder="Input Todos"/>

            </div>
        </form>
    )
}