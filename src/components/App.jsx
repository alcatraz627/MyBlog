import React, { useState } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import { Container, Header, Responsive, Visibility, Segment, Menu, Label, Image, Divider, Grid, Button, Icon } from 'semantic-ui-react'

import Navbar from './Navbar'
import Home from './Home'
import Article from './Article'

const App = () => {

    return (
        <Router>
            <a name="about"></a>
            <Navbar />
            <Route exact path="/" component={Home} />
            <Route path="/article/:id" component={Article} />

        </Router>
    )
}

export default App