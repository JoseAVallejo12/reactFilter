import React from 'react';
import PropTypes from 'prop-types';
import './UserCard.scss';

const UserCard = ({ user }) => {
  return (
    <>
      <div className="card">
        <div className="card_main_img">
          <img
            className="imagen"
            src={user.download_url}
            alt="main user background"
          />
        </div>
        <div className="card_body">
          <p>Et in excepturi veniam ex magnam atque ad ex tenetur.</p>
        </div>
        <div className="card_footer">
          <div className="card_footer_user_imagen" />
          <h3 className="card_footer_user_name">{user.author}</h3>
        </div>
      </div>
    </>
  );
};

UserCard.defaultProps = {
  user: {
    id: 1,
    name: '',
    username: '',
    email: '',
    address: {},
    phone: '',
    website: '',
  },
};

UserCard.propTypes = {
  user: PropTypes.object,
};

export default UserCard;
