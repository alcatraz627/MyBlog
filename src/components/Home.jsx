import React from 'react'
import { Container, Header, Label, Image, Divider, Grid, Button, Icon } from 'semantic-ui-react'

import ArticleSummary from './ArticleSummary'

import ARTICLES from '../articles'

const HomeAbout = () => {

    return (
        <Container className="mv-6">
            <Grid>
                <Grid.Column width={10}>
                    <div className="jumbotitle">Welcome to my Blog!</div>


                    {['Coding', 'Designing', 'Petting Dogs', 'The cat too if available'].map(e => <Label key={e}>{e}</Label>)}
                    <div className="mt-1" />
                    {['History', 'Geo-politics', 'Sci-fi & Futurism'].map(e => <Label basic color="blue" key={e}>{e}</Label>)}
                    <br />
                    <br />
                    <p className="aboutText">I'm a 22 year old engineering undergrad at IIT Madras, Chennai. I post my musings here. I also post some nice things I've learnt to build over time.</p>
                    <p className="aboutText">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    <p className="aboutText">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>

                    <Divider />
                    {["facebook f", "twitter", "linkedin alternate", "github"].map(e => <Button key={e} icon size="small" circular color={e == 'github' ? 'black' : e.split(" ")[0]} content={<Icon name={e} />} />)}
                </Grid.Column>
                <Grid.Column width={6}>
                    <Image rounded floated="right" className="myImage" src="./assets/me.jpg" />
                </Grid.Column>
            </Grid>
        </Container>



    )
}

const Home = () => {

    return (
        <div>
            <HomeAbout />
            <div className="homelist">
                <a name="list">
                    <div className="listHeader">Browse Articles</div>
                </a>
                {Object.keys(ARTICLES).map(e => <ArticleSummary id={e} {...ARTICLES[e]} key={e} />)}

            </div>

        </div>
    )
}

export default Home