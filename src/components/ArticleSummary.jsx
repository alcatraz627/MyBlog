import React from 'react'
import { Container, Header, Responsive, Visibility, Segment, Menu, Label, Image, Divider, Grid, Button, Icon } from 'semantic-ui-react'


const ArticleSummary = props => {
    const {date, title, preview, tags, image} = props
    
    return (
        <Container textAlign="left" className="mv-4">
        <Grid>
            <Grid.Column width={4}>
                <Image src={image || "./assets/default.png"} className="articleSummary__image" />
            </Grid.Column>
            <Grid.Column width={10}>
                <div className="articleSummary__date">{date}</div>
                <div className="articleSummary__header">{title}</div>
                <p className="articleSummary__desc">{preview}</p>
                {tags && tags.split(",").map(e => <Label content={e} key={e} />)}

            </Grid.Column>
        </Grid>
    </Container>

    )
}

export default ArticleSummary