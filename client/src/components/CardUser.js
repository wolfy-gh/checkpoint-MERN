import React from 'react'
import { useDispatch } from 'react-redux'
import { Button, Card, Image } from 'semantic-ui-react'
import { get_user_id } from "../JS/actions/user"
import { toggleTrue } from "../JS/actions/edit"
import { Link } from "react-router-dom"
import Btn from "./DeleteBtn"


function CardUser({ user }) {
    const dispatch = useDispatch()
    return (
        <div className="carduser">
            <Card>
                <Card.Content>
                    <Image
                        floated='right'
                        size='large'
                        src='https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs2/112692698/original/31a5d2469689575beee06ffcf4e9e76abab3abe2/logo-design-for-profile-picture-dessin-pour-photo-de-profil.png'
                    />
                    <Card.Header>{user.firstName} {user.lastName}</Card.Header>
                    <Card.Meta> {user.age} years old</Card.Meta>
                    <Card.Description>
                        <strong>Email :</strong> {user.email}
                    </Card.Description>
                    <Card.Description>
                        <strong>Phone :</strong> {user.phone}
                    </Card.Description>
                    <Card.Description>
                        <strong>Adress :</strong> {user.adress}
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <div className='ui two buttons'>
                        <Link to={`/edit/${user._id}`}>
                            <Button inverted color='green' onClick={() => {dispatch(toggleTrue());dispatch(get_user_id(user._id))}}>
                                Update
                            </Button>
                        </Link>
                        <Btn user={user} />
                    </div>
                </Card.Content>
            </Card>
        </div>
    )
}

export default CardUser
