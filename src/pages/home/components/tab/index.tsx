import React from 'react';
import './index.less'
interface State {
    showIndex:number
}
interface Props {
    list:listType
}
export type listType = Array<[string,React.ComponentType]>;
class Tab extends React.Component<Props,State> {
    constructor(props:Props) {
        super(props);
        this.state = {
            showIndex:0
        };
        this.handleItemClick = this.handleItemClick.bind(this);
        this.mapItem = this.mapItem.bind(this);
    }
    handleItemClick(i:number) {
        this.setState((state,props)=>{
            return {
                showIndex:i
            }
        });
    }
    mapItem() {
        const list = this.props.list;
        const showIndex = this.state.showIndex;
        const {handleItemClick} = this;
        return list.map((item,i)=>{
            return   (
            <div className="Tab-header-Item"
            data-test="Tab-header-Item"
            onClick={e=>handleItemClick(i)}
            key={item[0]}
            >
            <span className={showIndex===i?'active':''}>
                    {
                        item[0]
                    }
                </span>
            </div>);
        });
    }
    render() {
        const {mapItem} = this;
        const RenderComponent = this.props.list[this.state.showIndex][1];
        return (<div className="Tab">
            <div className="Tab-header">
                {
                    mapItem()
                }
                </div>
                <div className="Tab-body">
                    <RenderComponent></RenderComponent>
                </div>
        </div>);
    }
}
export default Tab;