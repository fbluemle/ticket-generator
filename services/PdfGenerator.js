const PDFDocument = require('pdfkit');

class PdfGenerator {
  constructor(template, startDate, days) {
    this.template = template;
    this.startDate = startDate;
    this.days = days;
    this._fileName = 'output-1.pdf';
    // this._fileName = 'output-' + DateTime.Now.ToString("yyyyMMddTHHmmss") + '.pdf';
  }

  generate(dest) {
    console.log(`Writing to ${this._fileName}`);

    const doc = new PDFDocument();
    // doc.pipe(fs.createWriteStream(this._fileName));
    doc.pipe(dest);
    doc.image('sbp-template.png', {
      fit: [250, 300],
    });
    doc.image('sbp-template.png', {
      fit: [450, 300],
    });
    doc.fontSize(40).text('OCT 15 2019', 100, 100);
    doc.end();
  }

  getFilename() {
    return this._fileName;
  }
}

module.exports = PdfGenerator;
