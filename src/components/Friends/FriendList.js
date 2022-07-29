import { FriendListItem } from 'components/Friends/FriendListItem';
import PropTypes from 'prop-types';

export function FriendList(props) {
    const { friends } = props;
    return (
        <ul class="friend-list">
            {friends.map(friend => (
                <li key={friend.id} class="item">
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