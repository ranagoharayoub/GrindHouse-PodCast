import React from 'react'
import './Body.css'


function Body() {
    return (
        <div className='body-cont'>
            <div className='margin-cont'>
                <div className='otherPods-cont'>
                    <div className='Latest-Ep'>
                        <div className="redcirclePlayer-b596f9b0-0ee2-4f3f-b64c-cacfa05c44ed" style={{height:'600px'}}></div>
                        <p style={{margintop: '3px', marginleft:'11px',fontfamily: 'sans-serif',fontsize: '10px', color: 'gray'}}>Powered by <a className="redcircle-link" href="https://redcircle.com?utm_source=rc_embedded_player&utm_medium=web&utm_campaign=embedded_v1">RedCircle</a></p>
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
                        <a href='https://radiopublic.com/grindhouse-courthouse-podcast-6NB17o'><img className='pod-icons' src='/radio-public.png' alt='radio-public' height= '64px' ></img></a>
                        <a href='https://www.breaker.audio/grindhouse-courthouse'><img className='pod-icons' src='/icon-breaker.png' alt='breaker' height= '64px' ></img></a>
                        <a href='https://redcircle.com/shows/grindhouse-courthouse-podcast'><img className='pod-icons' src='/red-circle.png' alt='redcircle' height= '64px' ></img></a>
                        <a href='https://podcasts.google.com/feed/aHR0cHM6Ly9tZWRpYS5yc3MuY29tL2dyaW5kaG91c2Vjb3VydGhvdXNlcG9kY2FzdC9mZWVkLnhtbA'><img className='pod-icons' src='/google-podcast.png' alt='google-pod' height='64px'></img></a>
                        <a href='https://podcasts.apple.com/ca/podcast/grindhouse-courthouse-podcast/id1556504779'><img className='pod-icons' src='/apple-podcast.png' alt='apple-pod' height='64px'></img></a>
                        <a href='https://open.spotify.com/show/4MjXCuDwaxLWAlKjVSS77c'><img className='pod-icons' src='/spotify.png' alt='spotify' height='64px'></img></a> 
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Body
