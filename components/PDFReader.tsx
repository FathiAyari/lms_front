
import React, { useEffect, useState } from 'react';


const PDFReader = ({ pdfUrl }) => {
 
  return (
    <div>
           <embed src={pdfUrl} type="application/pdf" width="100%" height="600px" />

    </div>
  );
};

export default PDFReader;