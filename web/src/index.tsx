/* eslint-disable import/first */
import React from 'react'
import ReactDOM from 'react-dom'
import { config } from 'dotenv'

config()

import * as serviceWorkerRegistration from './serviceWorkerRegistration'
import App from './App'

ReactDOM.render(<App />, document.getElementById('root'))

serviceWorkerRegistration.register()
