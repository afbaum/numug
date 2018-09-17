import React, { Component } from 'react';
import Atom from '../../images/nuclear.jpg';
import { Document, Page } from 'react-pdf/dist/entry.webpack';

class PositionPaper extends Component{
  state = {
    numPages: null,
    pageNumber: 1,
  }

  onDocumentLoad = ({ numPages }) => {
    this.setState({ numPages });
  }

  render(){
    const { pageNumber, numPages } = this.state;

    return(
      <div>
        <Document
          file="Meteorologist_role.pdf"
          onLoadSuccess={this.onDocumentLoad}>
          <Page pageNumber={pageNumber} />
        </Document>
        <p>Page {pageNumber} of {numPages}</p>
      </div>
    );
  }
}

export default PositionPaper
