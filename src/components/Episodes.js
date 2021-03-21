import React from 'react'
import './Episodes.css'
import { PlayCircleOutlineOutlined } from '@material-ui/icons'

function Episodes() {
    return (
        <div className='played-podEp'>
                <div className='pod-imgEp'>

                </div>
                <div className='pod-detailEp'>
                    <p className='New-Episode'>EPISODES 005: TITLE</p>
                    <p className='discription'>Discription of Episode.Discription of Episode.Discription of Episode.Discription of Episode...</p>
                    <p className='Time'>TIME</p>
                </div>      
                <div className='pod-playerEp'>
                <PlayCircleOutlineOutlined className='play-icon' style={{ fontSize: 100 }} ></PlayCircleOutlineOutlined>
                </div>
        </div>
    )
}

export default Episodes
