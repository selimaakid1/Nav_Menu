import React from 'react'
const Comp = (props) => {
    return (
        <div>
            {props.menu.map(el =>
                <div className="nav-bar" >
                    <a href={el.link} className={el.active ? "active" : undefined}>{el.text}</a>
                    {el.subName && <div className="sub-list">
                        {el.subName.map(elem => <a className="sub-list_item" href="#">{elem}</a>)}</div>}
                </div>
            )}
        </div>
    )
}
export default Comp;