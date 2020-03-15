/*
 *  Project : Tooltip
 *  Author  : Guo Yang
 */

import React from 'react';

import './Tooltip.scss';

class Tooltip extends React.Component {

    static defaultProps = {
        className: '',             //自定义类名，可进行修改样式
        desc: '',                 //tooltip的内容
        children: ''              //tooltip的主体
    };

    render() {
        const { children, desc, className } = this.props;
        return (
            <div
                className={`Tooltip ${className}`}
            >
                <div className="toolbar-title">
                    {children && children}
                </div>
                <div className="toolbar-content">
                    <div className="inner">
                        <div className="arrow">
                            <s />
                            <i />
                        </div>
                        <div className="content">{desc}</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Tooltip;
