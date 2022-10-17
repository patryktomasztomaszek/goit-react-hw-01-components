import React from 'react';
import PropTypes from 'prop-types';
import styles from './FriendList.module.scss';

function FriendList({ friendsData }) {
  const {
    friends,
    friends__list,
    list__item,
    list__avatar,
    list__name,
    list__online,
    list__offline,
    list__empty,
  } = styles;

  return (
    <section className={friends}>
      <ul className={friends__list}>
        {friendsData.length > 0 ? (
          friendsData.map(friend => {
            const { id, avatar, name, isOnline } = friend;
            return (
              <li className={list__item} key={id}>
                {isOnline ? (
                  <span className={list__online}></span>
                ) : (
                  <span className={list__offline}></span>
                )}
                <img
                  className={list__avatar}
                  src={avatar}
                  alt={'avatar of ' + name}
                />
                <p className={list__name}>{name}</p>
              </li>
            );
          })
        ) : (
          <p className={list__empty}>
            You have no friends...! Go meet some people!
          </p>
        )}
      </ul>
    </section>
  );
}

FriendList.propTypes = {
  friendsData: PropTypes.array.isRequired,
};

export default FriendList;
