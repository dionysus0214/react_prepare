import React, {useCallback} from 'react';
import Prototypes from 'prop-types';
import Link from 'next/link';
import {Menu, Input, Row, Col} from 'antd';
import styled from 'styled-components';
import {useSelector} from 'react-redux';
import Router from 'next/router'; 

import UserProfile from '../components/UserProfile';
import LoginForm from '../components/LoginForm';
import useInput from '../hooks/useInput';

const SearchInput = styled(Input.Search)`
  vertical-align : middle;
`;

const AppLayout = ({children}) => {
  const [searchInput, onChangeSearchInput] = useInput('');
  const {me} = useSelector((state) => state.user);

  const onSearch = useCallback(() => {
    Router.push(`/hashtag/${searchInput}`);
  }, [searchInput]);

  return (
    <div>
      <Menu mode="horizontal">
        <Menu.Item>
          <Link href="/"><a>디오니소스</a></Link>
        </Menu.Item>
        <Menu.Item>
          <Link href="/profile"><a>프로필</a></Link>
        </Menu.Item>
        <Menu.Item>
          <SearchInput
            enterButton
            value={searchInput}
            onChange={onChangeSearchInput}
            onSearch={onSearch} 
          />
        </Menu.Item>       
      </Menu>
      <Row gutter={8}>
        <Col xs={24} md={6}>
          {me ? <UserProfile /> : <LoginForm />}
        </Col>
        <Col xs={24} md={12}>
          {children}
        </Col>
        <Col xs={24} md={6}>
          <a href="https://github.com/dionysus0214/react_twitter" target="_blank" rel="noreferrer noopener">Made by dionysus</a>
        </Col>
      </Row>
    </div>
  );
};

AppLayout.prototype = {
  children: Prototypes.node.isRequired,
};

export default AppLayout;