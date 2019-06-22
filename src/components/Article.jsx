import React from 'react'

import { Container, Header, Responsive, Visibility, Segment, Menu, Label, Image, Divider, Grid, Button, Icon } from 'semantic-ui-react'

import ARTICLES from '../articles';

const Article = props => {
    const articleId = props.match.params.id

    if (articleId in ARTICLES) {

        const { date, title, preview, tags } = ARTICLES[articleId]
        return (
            <Container text className="mt-6">

                <div className="article__date">{date}</div>
                <div className="article__header">{title}</div>
                <p className="article__desc">{preview}</p>
                {tags && tags.split(",").map(e => <Label content={e} key={e} />)}
            </Container>
        )
    } else {
        // TODO: 404
        return (
            <Container text className="mt-6">

                {/* <div className="article__date">{date}</div> */}
                <div className="article__header">Oops. 404</div>
                <p className="article__desc">What you're looking for isn't available.</p>
            </Container>
        )
    }
}


export default Article