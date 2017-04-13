import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomePage from './components/Home/HomePage';
import AboutPage from './components/About/AboutPage';
import DocumentsPage from './components/documents/DocumentsPage';
import ManageDocumentPage from './components/documents/ManageDocumentPage';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={HomePage} />
        <Route path="documents" component={DocumentsPage} />
        <Route path="PDFs" component={ManageDocumentPage} />
        <Route path="PDFs/:id" component={ManageDocumentPage} />
        <Route path="about" component={AboutPage} />
    </Route>
);