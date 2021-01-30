import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });
import Tab ,{listType}from '../../index';
/**
 * TDD+单元测试 Tab组件
*/
let page1:React.FC<{}>|null = null;
let page2:React.FC<{}>|null = null;
let page3:React.FC<{}>|null = null;
let lists:listType = [];
beforeEach(()=>{
   page1 = ()=>{
        return (<div className="page1">12</div>);
    }
   page2 = ()=>{
        return (<div className="page2">13</div>);
    }
   page3 = ()=>{
        return (<div className="page3">14</div>);
    }
   lists = [['推荐音乐',page1],['热搜榜',page2],['搜索',page3]];
   
})
describe("Tab组件",()=>{
    test('样式正确',()=>{
        const wrapper = shallow(<Tab list={lists}/>);
        expect(wrapper).toMatchSnapshot();
    })
    test('渲染正常',()=>{
        const wrapper = shallow(<Tab list={lists}/>);
        let len =  wrapper.find('[data-test="Tab-header-Item"]').length;
        expect(len).toBe(3);
    });
    test('点击Item 修改显示的组件',()=>{
        /**
         * 这里其实感觉是组件写的有点问题 其实还是应该按照TDD流程来写
         * 但Tab组件是先写的 所以测试代码写的有点怪
         */
        const wrapper = shallow(<Tab list={lists}/>);
        const TabHeaderItem = wrapper.find('[data-test="Tab-header-Item"]');
        TabHeaderItem.at(lists.length-1).simulate('click');
        expect(wrapper.state('showIndex')).toBe(lists.length-1);
        expect(wrapper.find('.page3')).toBeTruthy();
    });
})