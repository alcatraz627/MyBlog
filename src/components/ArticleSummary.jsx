import React from 'react'
import { Container, Header, Responsive, Visibility, Segment, Menu, Label, Image, Divider, Grid, Button, Icon } from 'semantic-ui-react'

import { Link } from 'react-router-dom'

const ArticleSummary = props => {
    const { date, title, preview, tags, image, id } = props

    return (
        <Container textAlign="left" className="mv-4">
            <Grid>
                
                <Grid.Column width={4}>
                    <Image src={image || "./assets/default.png"} className="article__thumbimage" />
                </Grid.Column>
                <Grid.Column width={10}>
                    <Link to={`/article/${id}`}>
                        <div className="article__date">{date}</div>
                        <div className="article__header">{title}</div>
                        <p className="article__desc">{preview}</p>
                        {tags && tags.split(",").map(e => <Label content={e} key={e} />)}
                    </Link>
                </Grid.Column>
            </Grid>
        </Container>

    )
}

export default ArticleSummary