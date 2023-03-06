import React from 'react'
import intro from '../../assets/illustration-intro.svg'

import './firstContent.css'

function FirstContent() {
  return (
    <div className='row-one'>
        <div className="content">
            <div className="col-1">
                <h2>Bring everyone together to build better products.</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                   Quod animi praesentium ab facere soluta autem dolores itaque! 
                   Qui illo quo facilis! Beatae odio necessitatibus
                   quas possimus.</p>
                
                <button>Get Started</button>
            </div>

            <div className="col-2">
                <img src={intro} alt="" />
            </div>
        </div>
    </div>
  )
}

export default FirstContent