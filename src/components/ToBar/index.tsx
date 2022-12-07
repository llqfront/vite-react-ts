import React, { memo } from 'react';
import { withRouter, NavLink } from 'react-router-dom';
interface Props {
  history?: any
}
const Com: React.FC = (props: Props) => {
  const { history } = props;
    /*
      首页
      我 关于我的相关的，星座呀，玄学
      我和你
      我和你的一些事
      我和你和她
      我和你还有和Ta的一些事
    */
    /* 广场 互动提问
      树洞 每个人都可以发的 一些事
    // 懂你 精准匹配
       根据有效信息推出针对主号的一相关人员列表
    // 聊天
      就是正常的聊天聊天
    // 我的
      soul的一个个人主页面
    */
    const tobarData = [
      {
        'url': '/',
        'title': '人间',
        'cls': 'iconfont icon-a-Frame20',
      },
      {
        'url': '/saga',
        'title': '传奇',
        'cls': 'iconfont icon-xitongtuisong',
      },
      {
        'url': '/knowing',
        'title': '懂你',
        'cls': 'iconfont icon-keaide',
      },
      {
        'url': '/soul',
        'title': '精神',
        'cls': 'iconfont icon-shouye1',
      },
      {
        'url': '/own',
        'title': '自己',
        'cls': 'iconfont icon-wode-wodefensi',
      },
    ];
    const tobarList = () => {
      return tobarData.map((item,index) => {
        return (
          <li key={index}>
            <NavLink to={{
              pathname: item.url
            }} exact={ item.url === '/' ? true : false }>
              <i className={item.cls}></i>
              <h4>{item.title}</h4>
            </NavLink>
          </li>
        )
      })
    }
    return (
      <div className="to_bar">
        <ul>
          {tobarList()}
        </ul>
      </div>
    )
}
export default memo(withRouter(Com));
