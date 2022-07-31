import PropTypes from 'prop-types';
import css from './Profile.module.css'

export function Profile(props) {
    console.log(props)
    const { link, usname, ustag, locat, folowers, views, likes } = props
    return (
    <div className={css.profile}>
    <div className={css.description}>
      <img
        src={link}
        alt="User avatar"
        className={css.avatar}
      />
      <p className={css.name}>{usname}</p>
      <p className={css.tag}>@{ustag}</p>
      <p className={css.location}>{locat}</p>
    </div>
    
    <ul className={css.stats}>
      <li className={css.stat}>
        <span className={css.label}>Followers</span>
        <span className={css.quantity}>{folowers}</span>
      </li>
      <li className={css.stat}>
        <span className={css.label}>Views</span>
        <span className={css.quantity}>{views}</span>
      </li>
      <li className={css.stat}>
        <span className={css.label}>Likes</span>
        <span className={css.quantity}>{likes}</span>
      </li>
    </ul>
    </div>
    );
  };

  Profile.propTypes = {
    link: PropTypes.string,
    usname: PropTypes.string,
    ustag: PropTypes.string,
    locat: PropTypes.string,
    folowers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  };