import React from 'react'
import { useDispatch } from 'react-redux'
import { Button, Header, Icon, Modal } from 'semantic-ui-react'
import { deleteUser } from "../JS/actions/user"

function DeleteBtn({user}) {
    const dispatch = useDispatch()
    const [open, setOpen] = React.useState(false)
    return (
        <div>
            <Modal
                basic
                onClose={() => setOpen(false)}
                onOpen={() => setOpen(true)}
                open={open}
                size='small'
                trigger={<Button  inverted color="red">Delete</Button>}
            >
                <Header icon>
                    <Icon name='archive' />
                    Are u sure u want to delete this item ? 
                </Header>
                <Modal.Actions>
                    <Button  color='green' inverted onClick={() => setOpen(false)}>
                        <Icon name='remove' /> No
                    </Button>
                    <Button color='red' inverted onClick={() => {setOpen(false);dispatch(deleteUser(user._id))}}>
                        <Icon name='checkmark' /> Yes
                    </Button>
                </Modal.Actions>
            </Modal>
        </div>
    )
}

export default DeleteBtn
