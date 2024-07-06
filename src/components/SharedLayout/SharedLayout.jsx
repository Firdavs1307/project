import { Content } from 'antd/es/layout/layout';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

const SharedLayout = () => {
  return (
    <Content>
      <Header />
      <LanguageSwitcher />
      <MainContainer>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </MainContainer>
      
    </Content>
  );
};

export default SharedLayout;
