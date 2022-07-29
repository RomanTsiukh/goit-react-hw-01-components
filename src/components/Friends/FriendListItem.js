import PropTypes from 'prop-types';

export function FriendListItem(props){
    const { ava, name, isOnline } = props
    return(
        <>
            <span class="status">{isOnline}</span>
            <img class="avatar" src={ava} alt="User avatar" width="48" />
            <p class="name">{name}</p>
        </>
    )};

FriendListItem.propTypes = {
    ava: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.bool,
};