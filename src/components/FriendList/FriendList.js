import PropTypes from 'prop-types'
import css from './FriendList.module.css'
import { FriendListItem } from "./FriendListItem/FriendListItem"

export function FriendList({ friends }) {
return <ul className={css.friendList}>
    {friends.map(( {avatar, name, isOnline, id} ) => (<li key={id} className={css.item}><FriendListItem avatar={avatar} name={name} isOnline={isOnline} id={id} /> </li>))}
    </ul>
}

FriendListItem.propTypes = {
    friends: PropTypes.shape({
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
        id: PropTypes.number.isRequired,
    })
}