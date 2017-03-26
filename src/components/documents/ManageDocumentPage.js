import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as documentActions from '../../actions/documentActions';

class ManageDocumentPage extends React.Component {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        return (
            <h1>Manage Document</h1>
        );
    }
}

ManageDocumentPage.PropTypes = {
    myProp: PropTypes.string.isRequired
};

function mapStateToProps(state, ownProps) {
    return{
        state: state
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(documentActions, dispatch) //this will make all the actions available for this container component under this.props.actions
    };
}

export default connect(mapDispatchToProps, mapStateToProps)(ManageDocumentPage);