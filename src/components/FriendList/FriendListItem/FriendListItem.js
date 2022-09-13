import PropTypes from 'prop-types'
import { HiOutlineEye, HiOutlineEyeOff } from "react-icons/hi";

import css from './FriendListItem.module.css'

export function FriendListItem({ avatar, name, isOnline }) {
   return <>
       <span className={css[isOnline]}>{isOnline ? <HiOutlineEye /> : <HiOutlineEyeOff />}</span>
        <img className={css.avatar} src={avatar} alt="User avatar"/>
       <p className={css.name}>{name}</p>
    </>
}

FriendListItem.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.bool,
    id: PropTypes.number,
}