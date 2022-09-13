import PropTypes from 'prop-types'
import css from './FriendList.module.css'
import { FriendListItem } from "./FriendListItem/FriendListItem"

export function FriendList({ friends }) {
return <ul className={css.friendList}>
    {friends.map(( {avatar, name, isOnline, id} ) => (<li key={id} className={css.item}><FriendListItem avatar={avatar} name={name} isOnline={isOnline} id={id} /> </li>))}
    </ul>
}

FriendListItem.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.bool,
    id: PropTypes.number,
}