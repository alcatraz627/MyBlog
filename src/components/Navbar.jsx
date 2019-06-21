import React, { useState } from 'react'

import { Container, Header, Responsive, Visibility, Segment, Menu } from 'semantic-ui-react'

// Heads up!
// We using React Static to prerender our docs with server side rendering, this is a quite simple solution.
// For more advanced usage please check Responsive docs under the "Usage" section.
const getWidth = () => {
    const isSSR = typeof window === 'undefined'

    return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth
}


const Navbar = () => {
    const [isNavSticky, setisNavSticky] = useState(false)


    return (
        // {/* <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}> */ }
        <Visibility once={false} onBottomPassed={() => setisNavSticky(true)} onBottomPassedReverse={() => setisNavSticky(false)}>
            <Segment inverted textAlign="center" vertical>
                <Menu borderless inverted fixed={isNavSticky ? 'top' : null} size="large" className={isNavSticky?'pv-1':''}>
                    <Container>
                        <Menu.Item as="a" className="navbarBrand">Aakarsh Chopra</Menu.Item>
                        <Menu.Item active position="right" as="a">About</Menu.Item>
                        <Menu.Item as="a">Browse</Menu.Item>
                    </Container>
                </Menu>
            </Segment>
        </Visibility >
        // {/* </Responsive> */ }
    )

}

export default Navbar