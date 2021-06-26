import React from 'react';
import './index.css';

class Header extends React.Component {
  render() {
    return (
      <div className="todo-header">
        <input type="text" placeholder="请输入你的任务名称，按回车键确认" />
      </div>
    );
  }
}
export default Header;