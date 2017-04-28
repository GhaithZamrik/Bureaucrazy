import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as documentActions from '../../actions/documentActions';
import DocumentForm from './DocumentForm';

class ManageDocumentPage extends React.Component {
    constructor(props, context) {
        super(props, context);
//we need to pass down mutable state to out container component.
        this.state = {
            document: Object.assign({}, props.document),
            errors: {}
        };
        this.updateDocumentState = this.updateDocumentState.bind(this);
        this.saveDocument = this.saveDocument.bind(this);
    }

    updateDocumentState(event) {
        const field = event.target.name;
        let document = this.state.document;
        document[field] = event.target.value;
        return this.setState({document: document}); //check the flux course for more information
    }
    //it's gonna dispatch the action that we've just created
    saveDocument(event) {
        event.preventDefault();
        this.props.actions.saveDocument(this.state.document);
        this.context.router.push('/documents');
    }
    
    render() {
        return (
            <DocumentForm
                allAuthors={this.props.authors}
                onChange={this.updateDocumentState}
                onSave={this.saveDocument}
                document={this.state.document}
                errors={this.state.errors}
            />
        );
    }
}

ManageDocumentPage.propTypes = {
    document: PropTypes.object.isRequired,
    authors: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};

ManageDocumentPage.contextTypes = {
    router: PropTypes.object.isRequired
};

// function getDocumentById(documents, id) {
//     const document = documents.filter(document => document.id == id);
//     if (document.length) return document[0]; //since filter returns an array, have to grsb the first one
//     return null;
// }

function mapStateToProps(state, ownProps) {
    // const documentId = ownProps.params.id; //form the path /

    let document = {id: '', watchHerf: '', title: '', authorId: '', length: '', category: ''};

    // if (documentId) {
    //     document = getDocumentById(state.document, documentId);
    // }

    
    let authors = [
  {
    id: 'job-center',
    name: 'JobCenter'
  },
  {
    id: 'Bundes-amt',
    name: 'Bundesamt'
  },
  {
    id: 'Burger-amt',
    name: 'Burgeramt'
  }
];
    
    const authorsFormattedForDropdown = authors.map(author => {
        return {
            value: author.id,
            text: author.name
        };
    });

    return {
        document: document,
        authors: authorsFormattedForDropdown
    };
}
// mapstatetoprops is the place where we can do any data transformation, in order to fit our model.
//in the const as a function that we have above we do the transforamtion of the author data, to fit our model, as in selectinput from the initialState 
function mapDispatchToProps() {
    return {
        actions: bindActionCreators(documentActions) //this will make all the actions available for this container component under this.props.actions
    };
}

export default connect(mapDispatchToProps, mapStateToProps)(ManageDocumentPage);
