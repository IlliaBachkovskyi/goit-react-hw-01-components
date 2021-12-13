import PropTypes from 'prop-types';
import styles from './FriendsList.module.css';

const FriendsList = ({ props }) => (
  <section className={styles.friends}>
    <ul className={styles.friends_list}>
      {props.map(prop => (
        <li className={styles.item} key={prop.id}>
          <span
            className={prop.isOnline ? styles.onLine : styles.notOnLine}
          ></span>
          <img
            className={styles.avatar}
            src={prop.avatar}
            alt="User avatar"
            width="48"
          />
          <p className={styles.name}>{prop.name}</p>
        </li>
      ))}
    </ul>
  </section>
);

FriendsList.propTypes = {
  title: PropTypes.string,
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      isOnline: PropTypes.bool.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ),
};
export default FriendsList;
