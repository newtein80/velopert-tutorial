import React from 'react';

const MyNameTwo = ({ name }) => {
  return (
    <div>
      안녕하세요! 제 이름은 {name} 입니다22.
    </div>
  );
};

MyNameTwo.defaultProps = {
    name: '기본이름'
};

export default MyNameTwo;