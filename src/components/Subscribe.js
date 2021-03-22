import React, { useState } from 'react'
import './Subscribe.css'

function Subscribe() {

    const [email, setemail] = useState('')
    
    return (
        <div id="mc_embed_signup">
            <form onSubmit={()=>setemail(email)} 
                    action="https://grindhousecourthouse.us1.list-manage.com/subscribe/post?u=b293ee40817a741fc1f622110&id=27b06850b0" method="post" id="mc-embedded-subscribe-form"
                    name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
                <div id="mc_embed_signup_scroll">
                    <label for="mce-EMAIL"></label>
                    <input type="email" value={email} onChange={(e) => setemail(e.target.value)} name="EMAIL" class="email" id="mce-EMAIL"
                    placeholder="email address"/>
                </div>        
                {/* <div style={{position:' absolute', left: '-5000px'}} aria-hidden="true"><input type="text"
                    name="b_b293ee40817a741fc1f622110_27b06850b0" tabindex="-1" value="" />    
                </div> */}
                <div class="clear"><input type="submit" value="SUBSCRIBE" name="subscribe"
                    id="mc-embedded-subscribe" class="button" />
                </div>
            </form>
        </div>
    )
}

export default Subscribe