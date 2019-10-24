import React from 'react'
import { Container, Header, Label, Image, Divider, Grid, Button, Icon } from 'semantic-ui-react'

import ArticleSummary from './ArticleSummary'

import aboutText from '../about.txt';

import ARTICLES from '../articles'

const HomeAbout = () => {

    return (
        <Container className="mv-6">
            <Grid>
                <Grid.Column width={10}>
                    <div className="jumbotitle">Welcome to my Blog!</div>


                    {['Full-Stack Development', 'Designing', 'Petting Dogs', 'Machine Learning'].map(e => <Label key={e}>{e}</Label>)}
                    <div className="mt-1" />
                    {['React', 'Django', 'Material Design', 'Rails', 'Angular'].map(e => <Label basic color="blue" key={e}>{e}</Label>)}
                    <div className="mt-1" />
                    {['History', 'Psychology', 'Sci-fi'].map(e => <Label basic color="brown" key={e}>{e}</Label>)}
                    <br />
                    <br />

                    {aboutText.split("\n\n").map(e => (
                        <p className="aboutText">{e}</p>
                    ))}

                    <a href="https://drive.google.com/open?id=1hTTvcy-rUoQqEjUVYyxTSpC5XcO4UHru" target="_blank"><Button content="View my resume" primary /></a>


                    <Divider />
                    {[["linkedin alternate", "https://www.linkedin.com/in/aakarshchopra/"], ["github", "https://github.com/alcatraz627"]].map(([tag, link]) =>
                        <a href={link} target="_blank"><Button key={tag} icon size="small" circular content={<Icon name={tag} />} /></a>)}
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
                <a name="list" className="a">
                    <div className="listHeader">My Projects</div>
                    {/* <div className="listSubHeader">My Projects</div> */}
                </a>
                <div className="listSubHeader">Find them on my &nbsp;
                    <a href="https://github.com/alcatraz627?tab=repositories" target="_blank">Github<Icon size="small" name="angle right" />Repositories Tab <Icon name="github" /></a>
                </div>
                {Object.keys(ARTICLES).map(e => <ArticleSummary id={e} {...ARTICLES[e]} key={e} />)}

            </div>

        </div>
    )
}

export default Home