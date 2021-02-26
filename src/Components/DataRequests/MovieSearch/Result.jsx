'use strict';
import {
    Card, CardImg, CardText, CardBody, CardDeck,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';

const Result = ({ result, error }) => {

    if (error) {
        return <p>Oops...something went wrong</p>
    } else {
        return (
            <div class="row row-cols-1 row-cols-md-3">

                <CardDeck>
                    {result.map((movie) => (
                        <div class="col mb-4">
                            <Card >
                                <CardImg width="100%" src={movie.Poster} alt="movie poster" />
                                <CardBody>
                                    <CardTitle tag="h5">{movie.Title}</CardTitle>
                                    <CardSubtitle tag="h6" className="mb-2 text-muted">{movie.Year}</CardSubtitle>
                                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                                    <Button>Button</Button>
                                </CardBody>
                            </Card>
                        </div>

                    ))}
                </CardDeck>
            </div>
        )
    }

}

export default Result;