import { FriendListItem } from 'components/Friends/FriendListItem';
import PropTypes from 'prop-types';
import css from './Friends.module.css';

export function FriendList({ friends }) {
    return (
        <ul className={css.friendlist}>
            {friends.map(friend => (
                <li key={friend.id} className={css.item}>
                <FriendListItem
                    isOnline={friend.isOnline}
                    ava={friend.avatar}
                    name={friend.name}
                /> 
                </li> 
            ))}
        </ul>
    )
}

FriendListItem.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired
        })
    )
}