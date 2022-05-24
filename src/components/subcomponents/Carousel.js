import React from 'react';

export const Carousel = () => {
    return(
        <div id="myCarousel" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                <li data-target="#myCarousel" data-slide-to="1"></li>
            </ol>
            <div className="carousel-inner">
                <div className="carousel-item active">

                    <img width="100%" height="100%" src={'https://i.imgur.com/KNYlzNy.png'}/>

                    <div className="container">
                        <div className="carousel-caption text-left">
                            <h1>Example headline.</h1>
                            <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit
                                non mi porta
                                gravida at eget
                                metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
                            <p><a className="btn btn-lg btn-primary" href="#" role="button">See More</a></p>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <img width="100%" height="100%" src={'https://i.imgur.com/21J9CEW.png'}/>

                    <div className="container">
                        <div className="carousel-caption">
                            <h1>Another example headline.</h1>
                            <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit
                                non mi porta
                                gravida at eget
                                metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
                            <p><a className="btn btn-lg btn-primary" href="#" role="button">Browse Gallery</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <a className="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>
    )
}
export default Carousel;