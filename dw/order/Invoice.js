var Invoice = function() {};

Invoice.prototype.getType = function() {};

Invoice.prototype.getStatus = function() {};

Invoice.prototype.getExportStatus = function() {};

Invoice.prototype.getItems = function() {};

Invoice.prototype.getFeedId = function() {};

Invoice.prototype.getProductSubTotal = function() {};

Invoice.prototype.getServiceSubtotal = function() {};

Invoice.prototype.getGrandTotal = function() {};

Invoice.prototype.getInvoiceNumber = function() {};

Invoice.prototype.getExternalInvoiceNumber = function() {};

Invoice.prototype.addCaptureTransaction = function() {};

Invoice.prototype.addRefundTransaction = function() {};

Invoice.prototype.getCapturedAmount = function() {};

Invoice.prototype.getRefundedAmount = function() {};

Invoice.prototype.type = null;
Invoice.prototype.status = null;
Invoice.prototype.exportStatus = null;
Invoice.prototype.items = null;
Invoice.prototype.feedId = null;
Invoice.prototype.productSubTotal = null;
Invoice.prototype.serviceSubtotal = null;
Invoice.prototype.grandTotal = null;
Invoice.prototype.invoiceNumber = null;
Invoice.prototype.externalInvoiceNumber = null;
Invoice.prototype.capturedAmount = null;
Invoice.prototype.refundedAmount = null;

module.exports = Invoice;
