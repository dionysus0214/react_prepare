import React, {useCallback} from 'react';
import {Card, Avatar, Button} from 'antd';
import {useDispatch} from 'react-redux';

import {logoutAction} from '../reducers';

const UserProfile = () => {
  const dispatch = useDispatch();

  const onLogOut = useCallback(() => {
    dispatch(logoutAction());
  }, []);
  return (
    <Card
      actions = {[
        <div key="twit">술술<br />0</div>,
        <div key="following">팔로잉<br />0</div>,
        <div key="follower">팔로워<br />0</div>,
      ]}
    >
      <Card.Meta
        avatar = {<Avatar>DS</Avatar>}
        title = "dionysus"
      />
      <Button onClick = {onLogOut}>로그아웃</Button>
    </Card>
  );
};

export default UserProfile;