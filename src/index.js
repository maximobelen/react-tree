import React from 'react';
import Node from 'react-node-component';

class Tree extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render(props) {

        let childs = null;
        let nodeName = null;
        let that = this;
        if (this.props.node.childNodes.length > 0 ) {
            nodeName = <div className={'node-name has-childs'}>
                 {this.props.node.name}
            </div>;
            childs = <div className="childs-list">
                {

                    this.props.node.childNodes.map(function(subChilds, i) {
                        return (
                            <Node {...props} parentNode={that} node={subChilds}  key={i}></Node>
                        )
                    })
                }
            </div>;
        } else {
            nodeName = <div ref={'name'} className={'node-name last-node '}>
                 {this.props.node.name}
            </div>;
            childs = '';
        }

        return (
            <div className="node">
                {nodeName}
                <div id={this.props.node.uniqueId} className="childs-container">
                    {childs}
                </div>
            </div>
        );
    }
}

export default Tree;
