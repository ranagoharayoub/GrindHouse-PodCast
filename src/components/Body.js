import React from 'react'
import './Body.css'
import '@material-ui/core'
import Episodes from './Episodes'
import { PlayCircleOutlineOutlined } from '@material-ui/icons'



function Body() {
    return (
        <div className='body-cont'>
            <div className='margin-cont'>
                <div className='played-pod'>
                    <div className='pod-img'>

                    </div>
                    <div className='pod-detail'>
                        <p className='Newest-Episodes'>NEWEST EPISODES</p>
                        <p className='Date'>DATE</p>
                    </div>  
                    <div className='pod-player'>
                        <PlayCircleOutlineOutlined className='play-icon' style={{ fontSize: 130 }} ></PlayCircleOutlineOutlined>
                    </div>
                </div>
                <div className='otherPods-cont'>
                    <div className='Latest-Ep'>
                        <div className='latest-Episodes'>
                            <p>Latest Episodes</p>
                        </div>
                        <div className='new-Ep'>
                            <Episodes></Episodes>
                            <Episodes></Episodes>
                            <Episodes></Episodes>
                        </div>
                        <div className='btn'>
                            <button className='prev-btn'>PREVIOUS</button>
                            <button className='next-btn'>NEXT</button>
                        </div>
                    </div>
                    <div className='listen-subscribe'>
                        <div className='list-sub'>
                            <p>LISTEN & SUBSCRIBE</p>
                        </div>
                        <div className='podcast-name'>
                            <div className='podcasters'>
                                <div className='red-box'></div>
                                <a href='https://redcircle.com/shows/grindhouse-courthouse-podcast'><p>RedCircle</p></a>
                            </div>
                            <hr className='line-hr'></hr>
                            <div className='podcasters'>
                                <div className='red-box'></div>
                                <a href='https://open.spotify.com/show/4MjXCuDwaxLWAlKjVSS77c'><p>SPOTIFY</p></a>
                            </div>
                            <hr className='line-hr'></hr>
                            <div className='podcasters'>
                                <div className='red-box'></div>
                                <a href='https://podcasts.apple.com/ca/podcast/grindhouse-courthouse-podcast/id1556504779'><p>APPLE PODCAST</p></a>
                            </div>
                            <hr className='line-hr'></hr>
                            <div className='podcasters'>
                                <div className='red-box'></div>
                                <a href='https://podcasts.google.com/feed/aHR0cHM6Ly9tZWRpYS5yc3MuY29tL2dyaW5kaG91c2Vjb3VydGhvdXNlcG9kY2FzdC9mZWVkLnhtbA'><p>GOOGLE PODCAST</p></a>
                            </div>
                            <hr className='line-hr'></hr>
                            <div className='podcasters'>
                                <div className='red-box'></div>
                                <a href='https://www.breaker.audio/grindhouse-courthouse'><p>Breaker</p></a>
                            </div>
                            <hr className='line-hr'></hr>
                            <div className='podcasters'>
                                <div className='red-box'></div>
                                <a href='https://radiopublic.com/grindhouse-courthouse-podcast-6NB17o'><p>Radio Public</p></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='listen-cont'>
                    <div className='center-content'>
                        <div className='listen-pref'>
                            <p className='listen-on'>LISTEN ON YOUR</p>
                            <p className='preferred'>PREFERRED PLAYER</p>
                        </div>
                        <div>
                            <p className='you-can'>You can listen to this podcast here on our site or by subscribing to the series
                            on your favourite podcast app, including the ones below</p>
                        </div>    
                    </div>    
                </div>
                <div className='icon-cont'>
                    <div className='icon-center'>
                        <a href='https://twitter.com/GHCHPodcast'><img src='/radio-public.png' alt='twitter' height= '64px' ></img></a>
                        <a href='https://www.breaker.audio/grindhouse-courthouse'><img src='/icon-breaker.png' alt='twitter' height= '64px' ></img></a>
                        <a href='https://twitter.com/GHCHPodcast'><img src='/red-circle.png' alt='twitter' height= '64px' ></img></a>
                        <a href='https://podcasts.google.com/feed/aHR0cHM6Ly9tZWRpYS5yc3MuY29tL2dyaW5kaG91c2Vjb3VydGhvdXNlcG9kY2FzdC9mZWVkLnhtbA'><img src='/google-podcast.png' alt='google-pod' height='64px'></img></a>
                        <a href='https://podcasts.apple.com/ca/podcast/grindhouse-courthouse-podcast/id1556504779'><img src='/apple-podcast.png' alt='apple-pod' height='64px'></img></a>
                        <a href='https://open.spotify.com/show/4MjXCuDwaxLWAlKjVSS77c'><img src='/spotify.png' alt='spotify' height='64px'></img></a> 
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Body
