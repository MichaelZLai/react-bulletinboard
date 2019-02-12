import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Board from './Board'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(<Board />, document.getElementById('root'))


serviceWorker.unregister();
