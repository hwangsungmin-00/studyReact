import React, { Component } from 'react'
import PropTypes from 'prop-types'


const MyComponent = ({ num, children })=>{
     return (
      <div>
        안녕하세요, 오늘 배울 내용은 {num}장입니다. <br />
        부모 태그 안의 내용은 {children} 입니다.
      </div>
    );
  
  };

  MyComponent.propTypes={
      num: PropTypes.number.isRequired
  };
  
/*class MyComponent extends Component {
    static defaultProps={
        name:'기본 이름'
    };
    static propTypes={
        name:PropTypes.string,
        favoriteNumber:PropTypes.number.isRequired
    };
    render() {
        const {name, favoriteNumber, children}=this.props;
        return (
            <div>안녕하세요, 제 이름은 {name}입니다.<br/>
            children 값은 {children}
            입니다.
            <br />
            제가 좋아하는 숫자는 {favoriteNumber} 입니다.
            </div>
            );
    }
}*/
/*const MyComponent=({name, favoriteNumber, children}) => {
    return (
    <div>안녕하세요, 제 이름은 {name}입니다.<br/>
    children 값은 {children}
    입니다.
    <br />
    제가 좋아하는 숫자는 {favoriteNumber} 입니다.
    </div>
    );
};
MyComponent.defaultProps={
    name: '기본 이름'
};

MyComponent.propTypes={
    name:PropTypes.string,
    favoriteNumber:PropTypes.number.isRequired
};*/

export default MyComponent;