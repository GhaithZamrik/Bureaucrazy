import React from 'react';
import TextInput from '../common/TextInput';
import SelectInput from '../common/SelectInput';
//for testing now, lots of things has to change
const DocumentForm = ({document, allAuthors, onSave, onChange, loading, errors}) => {
    return (
        <form>
            <h1>Manage Document</h1>
            <TextInput
                name="title"
                label="Title"
                value={document.title}
                onChange={onChange}
                error={errors.title}/>
            <SelectInput
                name="authorId"
                label="Author"
                value={document.authorId}
                defaultOption="Select Author"
                options={allAuthors}
                onChange={onChange} error={errors.authorId}/>
            <TextInput
                name="category"
                label="Category"
                value={document.category}
                onChange={onChange}
                error={errors.category}/>
            <TextInput
                name="length"
                label="length"
                value={document.length}
                onChange={onChange}
                error={errors.length}/>
            <input
                type="submit"
                disabled={loading}
                value={loading ? 'Saving...' : 'Save'}
                className="btn btn-primary"
                onClick={onSave}/>
        </form>
    );
};

DocumentForm.propTypes = {
    document: React.PropTypes.object.isRequired,
    allAuthors: React.PropTypes.array,
    onSave: React.PropTypes.func.isRequired,
    onChange: React.PropTypes.func.isRequired,
    loading: React.PropTypes.bool,
    errors: React.PropTypes.object
};
//onChange?
export default DocumentForm;