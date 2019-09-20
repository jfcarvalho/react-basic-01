import React, {Component} from 'react';

class RenderComments extends Component {

    constructor(props) {
        super(props);
    }

        renderComments(comments)
    {
            return (
                comments.map((item, key) =>
                    React.createElement('div', null, React.createElement('p', null, item.comment), React.createElement('p', null, "-- " + item.author + " ," + new Intl.DateTimeFormat('en-US', {year:'numeric', month:'short', day: '2-digit'}).format(new Date(Date.parse(item.date)))))
            )); 
    }


    render() {
        return (
        <div className="col-12 col-md-5 m-1">
                <h3>Comments</h3>
            {this.renderComments(this.props.comments)}
        </div>
        );
    }
}

export default RenderComments;
