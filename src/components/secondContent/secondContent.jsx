import React from 'react'

import './secondContent.css'

function SecondContent() {
  return (
    <div className='row-two'>
      <div className="content">
        <div className="col-1">
            <h1>What's different about manage ?</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing 
               elit. Beatae suscipit, dicta et, possimus itaque totam
               natus, quaerat fuga inventore corporis necessitatibus 
               praesentium doloremque temporibus nisi alias placeat 
               illum ipsa.</p>
        </div>
        <div className="col-2">
            <div className="item">
                <button>01</button>
                <div>
                    <h3>Track company-wide progress</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing 
                 elit. Beatae suscipit, dicta et, possimus itaque totam
                 natus, quaerat fuga inventore corporis necessitatibus 
                 praesentium doloremque temporibus nisi alias placeat 
                 illum ipsa.</p>
                </div>
            </div>

            <div className="item">
                <button>02</button>
                <div>
                    <h3>Advanced built-in reports</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing 
                 elit. Beatae suscipit, dicta et, possimus itaque totam
                 natus, quaerat fuga inventore corporis necessitatibus 
                 praesentium doloremque temporibus nisi alias placeat 
                 illum ipsa.</p>
                </div>
            </div>

            <div className="item">
                <button>03</button>
                <div>
                    <h3>Everything you need in one place</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing 
                 elit. Beatae suscipit, dicta et, possimus itaque totam
                 natus, quaerat fuga inventore corporis necessitatibus 
                 praesentium doloremque temporibus nisi alias placeat 
                 illum ipsa.</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default SecondContent