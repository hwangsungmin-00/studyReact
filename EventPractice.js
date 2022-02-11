//import React, { Component } from 'react';
//import React, { useState } from 'react';


import React, { Component } from 'react';

class EventPractice extends Component {

state = {
    username: '',
    message: ''
  }

handleChange=(e)=>{
    this.setState({
      [e.target.name]: e.target.value
    });
  }

handleClick=()=>{
    alert(this.state.username + ': ' + this.state.message);
    this.setState({
      username: '',
      message: ''
    });
  }
  
  //handleKeyPress 함수 구현
handleKeyPress=(e)=>{
    if(e.key==='Enter'){
        this.handleClick();
    }
}
render() {
    return (
      <div>
        <h1>이벤트 연습</h1>
        <input 
          type='text'
          name='username'
          placeholder='사용자명'
          value={this.state.username}
          onChange={this.handleChange}
        />
        <input 
          type='text'
          name='message'
          placeholder='아무거나 입력해 보세요'
          value={this.state.message}
          onChange={this.handleChange}
          onKeyPress={this.handleKeyPress} //onKeyPress 발생 시 handleKeyPress 메서드 호출
        />
        <button onClick={this.handleClick}>확인</button>
      </div>
    );
  }
}

export default EventPractice;


/*import React, { Component } from 'react';

class EventPractice extends Component {
  render() {
    return (
      <div>
        <h1>이벤트 연습</h1>
        <input
          type='text'
          name='message'
          placeholder='아무거나 입력해 보세요'
          onChange={
              (e)=>{
                  console.log(e.target.value);
              }
          }
        />
      </div>
    );
  }
}

export default EventPractice;*/

/*
const EventPractice=()=>{
    const [form, setForm]=useState({
        username: '',
        message: ''
    });

    const { username, message}=form;
    const onChange=e=>{
        const nextForm={
            ...form,
            [e.target.name]: e.target.value
        };
        setForm(nextForm);
    };

    const onClick=()=>{
        alert(username+':'+message);
        setForm({
            username: '',
            message: ''
        });
    };

    const onKeyPress=e=>{
        if(e.key==='Enter'){
            onClick();
        }
    };

    return (
        <div>
            <h1>이벤트 연습</h1>
            <input
            type="text"
            name="username"
            placeholder="사용자명"
            value={username}
            onChange={onChange}
            />
            <input
            type="text"
            name="message"
            placeholder="아무거나 입력해 보세요"
            value={message}
            onChange={onChange}
            onKeyPress={onKeyPress}
            />
            <button onVlick={onClick}>확인</button>
        </div>
    );
};

export default EventPractice;
/*class EventPractice extends Component {

    state={
        username: '',
        message: ''
    }


    handleChange=(e)=>{
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleClick=()=>{
        alert(this.state.username+ ' : ' +this.state.message);
        this.setState({
            username: '',
            message: ''
        });
    }

    handleKeyPress=(e)=>{
        if(e.key === 'Enter'){
            this.handleClick();
        }
    }
    render() {
        return (
            <div>
                <h1>이벤트 연습</h1>
                <input
                type="text"
                name="username"
                placeholder="사용자명"
                value={this.state.username}
                onChange={this.handleChange}
                />
                <input
                type="text"
                name="message"
                placeholder="아무거나 입력해 보세요"
                value={this.state.message}
                onChange={this.handleChange}
                onKeyPress={this.handleKeyPress}
                />
                <button onClick={this.handleClick
                }>확인
                </button>
            </div>
        );
    }
}

export default EventPractice;*/
/*class EventPractice extends Component {

    state={
        message:''
    }
    render(){
        return (
            <div>
                <h1>이벤트 연습</h1>
                <input
                type="text"
                name="message"
                placeholder="아무거나 입력해 보세요"
                value={this.state.message}
                onChange={
                    (e)=>{
                        this.setState({
                            message: e.target.value
                        })
                    }
                }
                />
                <button onClick={
                    ()=>{
                        alert(this.state.message);
                        this.setState({
                            message: ''
                        });
                    }
                }>확인

                </button>
            </div>
        );
    }
}*/