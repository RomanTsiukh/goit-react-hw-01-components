import PropTypes from 'prop-types';
import css from './Friends.module.css';

export function FriendListItem(props){
    const { ava, name, isOnline } = props
    return(
        <>
            <span className={ isOnline ? css.statusOn : css.statusOf} >{isOnline}</span>
            <img className={css.avatar} src={ava} alt="User avatar" width="48" />
            <p className={css.name}>{name}</p>
        </>
    )};

FriendListItem.propTypes = {
    ava: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.bool,
};