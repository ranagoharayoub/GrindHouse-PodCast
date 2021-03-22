import React from 'react'
import './Footer.css'
import '@material-ui/core'
import '@material-ui/icons'
import { Twitter } from '@material-ui/icons'
import Subscribe from './Subscribe'

function Footer() {
    return (
        <div className='footer-cont'>
            <div className='footer-margin'>
                <div className='left-cont'>
                    <div className='about-show'>
                        <p className='about'>
                            ABOUT 
                        </p>
                        <p className='the-show'>
                            THE SHOW
                        </p>
                    </div>
                    <div className='about-body'>
                        <p>
                         A group of friends argue about movies you may have never heard of.
                         <br/>
                        Sit back,
                        relax, and enjoy the most unprofessional courtroom scenario on air.
                            <br/> 
                        Don’t forget to share this podcast with your friends and on social media.
                            <br/>
                         You are the reason why we do this Podcast!
                        </p>
                    </div>
                </div>
                <div className='right-cont'>
                    <div className='follow-us'>
                        <p className='follow'>FOLLOW</p> 
                        <p className='us'>US</p>
                    </div>
                    <div>
                        <a href='https://twitter.com/GHCHPodcast'><Twitter style={{ color: '#C1272D', fontSize: 50 }}></Twitter></a>
                    </div>
                    <div className='mailing-list'>
                        <p className='mailing'>MAILING</p> 
                        <p className='list'>LIST</p>
                    </div>
                    <div className='get-notfify'>
                        <p>Get notified when new episodes are released and extra goodies.</p>
                    </div>
                    <div className='subscribe'>
                    <Subscribe></Subscribe>
                    </div>  
                </div>
            </div>
        </div>
    )
}

export default Footer
