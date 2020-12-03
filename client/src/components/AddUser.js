import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Button, Form } from 'semantic-ui-react'
import { add_user, update_user } from "../JS/actions/user"

function AddUser() {
    const dispatch = useDispatch()
    const userbyid = useSelector(state => state.userReducer.user)
    const edit = useSelector(state => state.editReducer.edit_toggle)
    const [input, setInput] = useState({
        firstName: "", lastName: "", email: "", age: "", phone: "", adress: ""
    })
    const handleClick = (e) => {
        e.preventDefault()
        if (!edit) {
            dispatch(add_user(input))
            setInput({
                firstName: "", lastName: "", email: "", age: "", phone: "", adress: ""
            })
        } else {
            dispatch(update_user(userbyid._id, input))
        }
    }
    const handleChange = (e) => {
        e.preventDefault()
        setInput({ ...input, [e.target.name]: e.target.value })
    }

    useEffect(() => {
        edit ? setInput(userbyid) : setInput({ firstName: "", lastName: "", email: "", age: "", phone: "", adress: "" })
    }, [userbyid, edit])
    return (
        <div>
            <h1 style={{textAlign:"center"}}>{edit ? "Update User " : "Add User"}</h1>
            <Form>
                <Form.Field>
                    <label>First Name (*)</label>
                    <input value={input.firstName} placeholder='First Name' onChange={handleChange} name="firstName" error/>
                </Form.Field>
                <Form.Field>
                    <label>Last Name (*)</label>
                    <input value={input.lastName} placeholder='Last Name' onChange={handleChange} name="lastName" />
                </Form.Field>
                <Form.Field>
                    <label>E-mail (*)</label>
                    <input value={input.email} placeholder='Last Name' onChange={handleChange} name="email" />
                </Form.Field>
                <Form.Field>
                    <label>Age</label>
                    <input value={input.age} placeholder='Last Name' onChange={handleChange} name="age" />
                </Form.Field>
                <Form.Field>
                    <label>Phone</label>
                    <input value={input.phone} placeholder='Last Name' onChange={handleChange} name="phone" />
                </Form.Field>
                <Form.Field>
                    <label>Adress</label>
                    <input value={input.adress} placeholder='Last Name' onChange={handleChange} name="adress" />
                </Form.Field>
                <Link to="/">
                    <Button type='submit' onClick={handleClick} color="blue" size="big">{edit ? "Update" : "Add"}</Button>
                </Link>
                
            </Form>
        </div>
    )
}

export default AddUser
