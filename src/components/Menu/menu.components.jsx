import React from 'react'

const MenuItem = ({props})=> (
    <div>
        <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'>{}</h1>
                    <span className='subtitle'>{}</span>
                </div>
            </div>
    </div>
)
export default MenuItem