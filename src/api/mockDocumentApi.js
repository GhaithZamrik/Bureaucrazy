import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
// Contentful comes here 
const documents = [
  {
    id: "HA.pdf",
    title: "HA  (Hauptantrag/Main contract)",
    watchHref: "https://www.facebook.com/messages/t/1457324430979034",
    authorId: "JobCenter",
    length: "6",
    category: "JobCenter registration papers"
  },
  {
    id: "KDU",
    title: "KDU (Kosten der Unterkunft/ Cost of accommodation form)",
    watchHref: "C:/Users/RoyBo/Prototype/Bureaucrazy/src/components/PDFs/KDU.pdf",
    authorId: "JobCenter",
    length: "2",
    category: "JobCenter registration papers"
  },
  {
    id: "VÄM",
    title: "VÄM (veränderungsmitteilung/Change of status notification form)",
    watchHref: "C:/Users/RoyBo/Prototype/Bureaucrazy/src/components/PDFs/VÄM.pdf",
    authorId: "JobCenter",
    length: "2",
    category: "JobCenter registration papers"
  },
  {
    id: "EK",
    title: "EK ( Einkommensverhältnisse/ income ratios form)",
    watchHref: "C:/Users/RoyBo/Prototype/Bureaucrazy/src/components/PDFs/EK.pdf",
    authorId: "JobCenter",
    length: "4",
    category: "JobCenter registration papers"
  },
  {
    id: "VM",
    title: "VM (Vermögensverhältnisse/ Assets decleration form)",
    watchHref: "C:/Users/RoyBo/Prototype/Bureaucrazy/src/components/PDFs/VM.pdf",
    authorId: "JobCenter",
    length: "4",
    category: "JobCenter registration papers"
  }
];

function replaceAll(str, find, replace) {
  return str.replace(new RegExp(find, 'g'), replace);
}

//This would be performed on the server in a real app. Just stubbing in.
const generateId = (document) => {
  return replaceAll(document.title, ' ', '-');
};

class DocumentApi {
  static getAllDocuments() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], documents));
      }, delay);
    });
  }

  static saveDocument(document) {
    document = Object.assign({}, document); // to avoid manipulating object passed in.
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate server-side validation
        const minDocumentTitleLength = 1;
        if (document.title.length < minDocumentTitleLength) {
          reject(`Title must be at least ${minDocumentTitleLength} characters.`);
        }

        if (document.id) {
          const existingdocumentIndex = documents.findIndex(a => a.id == document.id);
          documents.splice(existingdocumentIndex, 1, document);
        } else {
          //Just simulating creation here.
          //The server would generate ids and watchHref's for new documents in a real app.
          //Cloning so copy returned is passed by value rather than by reference.                                                                                                                                                                                                           
          document.id = generateId(document);
          document.watchHref = `/Users/ghaith.zamrik/repo/Bureaucrazy/PDFS${document.id}`;
          documents.push(document);
        }

        resolve(document);
      }, delay);
    });
  }

  static deleteDocument(documentId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const indexOfDocumentToDelete = documents.findIndex(document => {
          document.id == documentId;
        });
        documents.splice(indexOfDocumentToDelete, 1);
        resolve();
      }, delay);
    });
  }
}

export default DocumentApi;