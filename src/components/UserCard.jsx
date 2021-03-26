import React from "react";
import PropTypes from "prop-types";
import "./UserCard.scss";
import { connect } from "react-redux";
import getUserAPI from '../app/redux/actions/usersActions';

const UserCard = (props) => {
  console.log(props)
  return (
    <>
      <div className="card">
        <div className="card_main_img" />
        <div className="card_body">
          <p>Et in excepturi veniam ex magnam atque ad ex tenetur.</p>
        </div>
        <div className="card_footer">
          <div className="card_footer_user_imagen" />
          <h3 className="card_footer_user_name">{props.name}</h3>
        </div>
      </div>
    </>
  );
};

UserCard.defaultProps = {
  name: "joselito",
  username: "vallejin",
  email: "s@s.com",
  address: {},
  phone: "7868",
  website: "www.algo.com",
};

UserCard.propTypes = {
  name: PropTypes.string,
  username: PropTypes.string,
  email: PropTypes.string,
  address: PropTypes.object,
  phone: PropTypes.string,
  website: PropTypes.string,
};

const mapStateToProps = (reducers) => {
  return reducers.usersReducer
};

export default connect(mapStateToProps, {getUserAPI})(UserCard);
