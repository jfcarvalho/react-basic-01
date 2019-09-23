import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle} from 'reactstrap';
import {Loading} from './LoadingComponent'
function RenderCard({item, isLoading, errMess}) {
  if(isLoading)
  {
    return(
      <Loading />
    );
  }
  else if(errMess) {
    return(
        <h4>{errMess}</h4>
    );
  }
  else
    return (
      <Card>
        <CardImg src={item ? item.image : ''} alt={item? item.name : '' }/>
        <CardBody>
          <CardTitle>
            {item ? item.name : ''}
          </CardTitle>
          {item && item.designation ? <CardSubtitle>{item.designation}</CardSubtitle> : null}
          <CardText>{item ? item.description : ''}</CardText>
        </CardBody>
        
      </Card>
    ); 
}

function Home(props) {
  return (
    <div className="container">
            <div className="row align-items-start">
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.dish} isLoading={props.dishesLoading} errMess={props.dishesErrmess}/>
                </div>
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.promotion} />
                </div>
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.leader} />
                </div>
            </div>
        </div>
  );
}

export default Home;  