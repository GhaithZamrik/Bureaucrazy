import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as documentActions from '../../actions/documentActions';
import DocumentForm from './DocumentForm';
import toastr from 'toastr';

class ManageDocumentPage extends React.Component {
    constructor(props, context) {
        super(props, context);
//we need to pass down mutable state to out container component.
        this.state = {
            document: Object.assign({}, props.document),
            errors: {},
            saving: false
        };
        this.updateDocumentState = this.updateDocumentState.bind(this);
        this.saveDocument = this.saveDocument.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.document.id != nextProps.document.id) { // the condition here is to make sure that the function doesn't run automatically when react cannot tell if props has changed.
            //Necessary to populate form when existing document is loaded directly.
            this.setState({document: Object.assign({}, nextProps.document)});
        }
    } //we only weant to update state with our props when we have ended up requesting a new document. 

    updateDocumentState(event) {
        const field = event.target.name;
        let document = this.state.document;
        document[field] = event.target.value;
        return this.setState({document: document}); //check the flux course for more information
    }
    //it's gonna dispatch the action that we've just created
    saveDocument(event) {
        event.preventDefault();
        this.setState({saving: true});
        this.props.actions.saveDocument(this.state.document)
        .then(() => this.redirect())
        .catch( error => {
            toastr.error(error);
            this.setState({saving: false});
        });
    }

    redirect() {
        this.setState({saving: false});
        toastr.success('Document saved');
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
                saving={this.state.saving}
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
    router: PropTypes.object
};

function getItemById(documents, id) {
    const document = documents.filter(document => document.id == id);
    if (document.length) return document[0]; //since filter returns an array, have to grsb the first one
    return null;
}

function mapStateToProps(state, ownProps) {
    const documentId = ownProps.params.id; //form the path /

    let document = {id: '', watchHerf: '', title: '', authorId: '', length: '', category: ''};

    if (documentId && state.documents.length > 0) {
        document = getItemById(state.documents, documentId);
    }

    const authorsFormattedForDropdown = state.authors.map(author => {
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
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(documentActions, dispatch) //this will make all the actions available for this container component under this.props.actions
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageDocumentPage);
