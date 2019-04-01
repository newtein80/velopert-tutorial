import React from 'react';

const MyNameTwo = ({ name }) => {
  return (
    <div>
      <h3>My Name Two</h3>
      MyNameTwo.defaultProps: {name}
    </div>
  );
};

MyNameTwo.defaultProps = {
  name: '기본이름'
};

export default MyNameTwo;