import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as documentActions from '../../actions/documentActions';

class DocumentsPage extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            document: { title: "" }
        };
        this.onTitleChange = this.onTitleChange.bind(this);
        this.onClickSave = this.onClickSave.bind(this);
    }

    onTitleChange(event) {
        const document = this.state.document;
        document.title = event.target.value;
        this.setState({document: document});
    }

    onClickSave() {
       this.props.actions.createDocument(this.state.document);
    }

    documentRow(document, index) {
        return <div key={index}>{document.title}</div>;
    }
    render() {
        return (
            <div>
                <h1>Documents</h1>
                {this.props.documents.map(this.documentRow)}
                <h2>Add Document</h2>
                <input
                    type="text"
                    onChange={this.onTitleChange}
                    value={this.state.document.title} />
                <input
                    type="submit"
                    value="save"
                    onClick={this.onClickSave} />
            </div>
        );
    }
}

DocumentsPage.propTypes = {
    documents: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
    return {
        documents: state.documents // this property is determind by the choice that we have made inside of our reducers 
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(documentActions, dispatch)
    };
}
export default connect(mapStateToProps, mapDispatchToProps) (DocumentsPage);
