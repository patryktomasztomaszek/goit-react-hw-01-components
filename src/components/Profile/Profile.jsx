import React from 'react';
import PropTypes from 'prop-types';
import styles from './Profile.module.scss';

export default function Profile({ userData }) {
  const { username, tag, location, avatar, stats } = userData;
  const { followers, views, likes } = stats;

  const {
    profile,
    profile__wrapper,
    profile__description,
    profile__avatar,
    profile__name,
    profile__tag,
    profile__location,
    profile__stats,
    stats__item,
    stats__label,
    stats__quantity,
  } = styles;
  return (
    <section className={profile}>
      <div className={profile__wrapper}>
        <div className={profile__description}>
          <img
            className={profile__avatar}
            src={avatar}
            alt={'avatar of ' + username}
          />
          <p className={profile__name}>{username}</p>
          <p className={profile__tag}>@{tag}</p>
          <p className={profile__location}>{location}</p>
        </div>

        <ul className={profile__stats}>
          <li className={stats__item}>
            <span className={stats__label}>Followers</span>
            <span className={stats__quantity}>{followers}</span>
          </li>
          <li className={stats__item}>
            <span className={stats__label}>Views</span>
            <span className={stats__quantity}>{views}</span>
          </li>
          <li className={stats__item}>
            <span className={stats__label}>Likes</span>
            <span className={stats__quantity}>{likes}</span>
          </li>
        </ul>
      </div>
    </section>
  );
}

Profile.propTypes = {
  userData: PropTypes.object.isRequired,
};
