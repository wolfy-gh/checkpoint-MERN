import React, { useEffect } from 'react'
import CardUser from "./CardUser"
import { useDispatch, useSelector } from 'react-redux'
import { getallUsers } from '../JS/actions/user'
import { Loader } from 'semantic-ui-react'

function ListUser() {
    const dispatch = useDispatch()
    const users_data = useSelector(state => state.userReducer.users)
    const loading = useSelector(state => state.userReducer.loadUser)
    useEffect(() => {
        dispatch(getallUsers())
    }, [])
    return (
        <div className="list">
            {loading? <Loader active inline='centered' size='large' /> : users_data.map(el => <CardUser key={el._id} user={el} />)}
        </div>
    )
}

export default ListUser
