import React from 'react';
import Header from './components/Header';
import Tab,{listType}from './components/tab';
const page1:React.FC<{}> = ()=>{
    return (<div>12</div>);
}
const page2:React.FC<{}> = ()=>{
    return (<div>13</div>);
}
const page3:React.FC<{}> = ()=>{
    return (<div>14</div>);
}
const Home:React.FC<{}> = function(props) {
    const list:listType = [['推荐音乐',page1],['热搜榜',page2],['搜索',page3]];
    return (
        <div className="home">
            <Header/>
            <Tab list={list}/>
        </div>
    );
}

export default Home;