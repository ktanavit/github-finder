//ถูกแปลงจาก class base component เป็น function base component

import React from 'react';
// import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const UserItem = ({ user: { login, avatar_url, html_url } }) => {
  // class userItem extends Component {
  //  วิธีใช้ Constructor ในการกำหนด state (ไม่นิยมเท่าไหร่)
  //   constructor() {
  //     super();
  //     this.state = {
  //       id: 'id',
  //       login: 'mojumbo',
  //       avatar_url: 'https://avatars.githubusercontent.com/u/1?v=4',
  //       html_url: 'https://github.com/mojombo',
  //     };
  //   }

  //   state = {
  //     id: 'id',
  //     login: 'mojumbo',
  //     avatar_url: 'https://avatars.githubusercontent.com/u/1?v=4',
  //     html_url: 'https://github.com/mojombo',
  //   };

  //   render() {
  // Destruction เป็นการดึง ค่า ออกจาก object นั้นๆ
  //   const { login, avatar_url, html_url } = this.props.user; // การใช้ Prop แบบ class base component

  //destuctor
  //   const { login, avatar_url, html_url } = props.user; // การใช้ Prop แบบ  function base component (ต้องระบุตัวแปร prop ใน function ด้านบน )
  //สามารถทำอีกรูปแบบได้ โดย ทำ destuctor ตรงที่ใส่ attribute function

  return (
    <div className='card text-center'>
      <img
        src={avatar_url}
        alt=''
        className='round-img'
        style={{ width: '60px' }}
      />
      <h3>{login}</h3>
      <div>
        <Link to={`/user/${login}`} className='btn btn-dark btn-sm mt-1'>
          More
        </Link>
      </div>
    </div>
  );
  //   }
};

UserItem.propTypes = {
  user: PropTypes.object.isRequired, // shortcut ptor
};

export default UserItem;
