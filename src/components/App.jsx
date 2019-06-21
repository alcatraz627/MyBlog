import React, { useState } from 'react'
import { Container, Header, Responsive, Visibility, Segment, Menu, Label, Image, Divider, Grid, Button, Icon } from 'semantic-ui-react'

import Navbar from './Navbar'
import Home from './Home'

const App = () => {


    return (
        <>
            <Navbar />
            <Home />
        </>
    )
}

export default App