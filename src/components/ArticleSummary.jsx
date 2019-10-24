import React from 'react'
import { Container, Header, Responsive, Visibility, Segment, Menu, Label, Image, Divider, Grid, Button, Icon } from 'semantic-ui-react'

import { Link } from 'react-router-dom'

const ArticleSummary = props => {
    const { date, title, preview, tags, image, github } = props

    return (
        <Container textAlign="left" className="mv-4">
            <Grid>

                <Grid.Column width={4}>
                    <Image src={`assets/logos/${image}` || "./assets/default.png"} className="article__thumbimage" />
                </Grid.Column>
                <Grid.Column width={10}>
                    <div className="article__date">{date}</div>
                    {/* <Link to={`/article/${id}`}> */}
                    {github ?
                        <a href={github} target="_blank">
                            <div className="article__header">{title}</div>
                        </a> :
                        <div className="article__header">{title}</div>
                    }
                    {/* </Link> */}
                    <p className="article__desc">{preview}</p>
                    {github && <p className="article__github">
                        <Icon name="github" size="large" color="black" />
                        <a href={github} target="_blank">{github}</a>
                    </p>}
                    {tags && tags.split(",").map(e => <Label content={e} key={e} />)}
                </Grid.Column>
            </Grid>
        </Container>

    )
}

export default ArticleSummary