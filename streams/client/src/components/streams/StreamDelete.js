import React from "react";
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchStream, deleteStream } from '../../actions';

import history from '../../history';

import Modal from "../Modal";


class StreamDelete extends React.PureComponent {
    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id);
    }

    renderActions = () => {
        const id = this.props.match.params.id;

        return (
            <>
                <button onClick={() => this.props.deleteStream(id)} className="ui button negative">Delete</button>
                <Link className="ui button" to={'/'}>Cancel</Link>
            </>
        )
    }

    renderContent = () => {
        if(!this.props.stream) {
            return "Are you sure you want to delete this stream?"
        }

        return `Are you sure you want to delete the stream with title "${this.props.stream.title}"?`
    }

    render() {
        return (
                <Modal
                    title="Delete Stream"
                    content={this.renderContent()}
                    actions={this.renderActions()}
                    onDismiss={() => history.push('/')} />
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return { stream: state.streams[ownProps.match.params.id] }
}

export default connect(mapStateToProps, { fetchStream, deleteStream })(StreamDelete);
