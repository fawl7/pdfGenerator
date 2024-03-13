
const PDFDocument = require('pdfkit');
const fs = require('fs');

function generatePDF(filePath, content) {
    // Create a new PDF document
    const doc = new PDFDocument();

    // Pipe the PDF content to a file
    doc.pipe(fs.createWriteStream(filePath));

    // Add content to the PDF document
    doc.fontSize(20).text('Generated PDF Document', { align: 'center' });
    doc.moveDown();
    doc.fontSize(12).text(content, { align: 'justify' });

    // Finalize the PDF document
    doc.end();

    console.log('PDF generated successfully!');
}

// Example usage:
const content = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
Excepteur sint occaecat cupidatat non proident, sunt in culpa qui 
officia deserunt mollit anim id est laborum.`;

const filePath = 'generated_pdf.pdf';
generatePDF(filePath, content);