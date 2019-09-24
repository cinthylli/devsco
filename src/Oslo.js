import React from 'react';
import ReactDOM from 'react-dom';
import Oslo_app from './Oslo_app';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Oslo_app />, document.getElementById('Oslo_root'));

serviceWorker.unregister();