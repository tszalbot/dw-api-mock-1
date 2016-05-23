var _super = require('../customer/EncryptedObject');

var PaymentInstrument = function() {};

PaymentInstrument.prototype = new _super();

PaymentInstrument.prototype.getCreditCardNumber = function() {};

PaymentInstrument.prototype.getBankAccountNumber = function() {};

PaymentInstrument.prototype.getBankAccountDriversLicense = function() {};

PaymentInstrument.prototype.getPaymentMethod = function() {};

PaymentInstrument.prototype.setCreditCardNumber = function() {};

PaymentInstrument.prototype.getCreditCardHolder = function() {};

PaymentInstrument.prototype.setCreditCardHolder = function() {};

PaymentInstrument.prototype.getCreditCardType = function() {};

PaymentInstrument.prototype.setCreditCardType = function() {};

PaymentInstrument.prototype.getCreditCardNumberLastDigits = function() {};

PaymentInstrument.prototype.getMaskedCreditCardNumber = function() {};

PaymentInstrument.prototype.getEncryptedCreditCardNumber = function() {};

PaymentInstrument.prototype.getCreditCardExpirationMonth = function() {};

PaymentInstrument.prototype.setCreditCardExpirationMonth = function() {};

PaymentInstrument.prototype.getCreditCardExpirationYear = function() {};

PaymentInstrument.prototype.setCreditCardExpirationYear = function() {};

PaymentInstrument.prototype.isCreditCardExpired = function() {};

PaymentInstrument.prototype.getCreditCardValidFromMonth = function() {};

PaymentInstrument.prototype.setCreditCardValidFromMonth = function() {};

PaymentInstrument.prototype.getCreditCardValidFromYear = function() {};

PaymentInstrument.prototype.setCreditCardValidFromYear = function() {};

PaymentInstrument.prototype.getCreditCardIssueNumber = function() {};

PaymentInstrument.prototype.setCreditCardIssueNumber = function() {};

PaymentInstrument.prototype.getBankRoutingNumber = function() {};

PaymentInstrument.prototype.setBankRoutingNumber = function() {};

PaymentInstrument.prototype.setBankAccountNumber = function() {};

PaymentInstrument.prototype.getBankAccountNumberLastDigits = function() {};

PaymentInstrument.prototype.getMaskedBankAccountNumber = function() {};

PaymentInstrument.prototype.getEncryptedBankAccountNumber = function() {};

PaymentInstrument.prototype.getBankAccountHolder = function() {};

PaymentInstrument.prototype.setBankAccountHolder = function() {};

PaymentInstrument.prototype.getEncryptedBankAccountDriversLicense = function() {};

PaymentInstrument.prototype.getBankAccountDriversLicenseLastDigits = function() {};

PaymentInstrument.prototype.getMaskedBankAccountDriversLicense = function() {};

PaymentInstrument.prototype.setBankAccountDriversLicense = function() {};

PaymentInstrument.prototype.getBankAccountDriversLicenseStateCode = function() {};

PaymentInstrument.prototype.setBankAccountDriversLicenseStateCode = function() {};

PaymentInstrument.prototype.getGiftCertificateID = function() {};

PaymentInstrument.prototype.getGiftCertificateCode = function() {};

PaymentInstrument.prototype.getMaskedGiftCertificateCode = function() {};

PaymentInstrument.prototype.setGiftCertificateID = function() {};

PaymentInstrument.prototype.setGiftCertificateCode = function() {};

PaymentInstrument.prototype.creditCardNumber = null;
PaymentInstrument.prototype.bankAccountNumber = null;
PaymentInstrument.prototype.bankAccountDriversLicense = null;
PaymentInstrument.prototype.paymentMethod = null;
PaymentInstrument.prototype.creditCardHolder = null;
PaymentInstrument.prototype.creditCardType = null;
PaymentInstrument.prototype.creditCardNumberLastDigits = null;
PaymentInstrument.prototype.maskedCreditCardNumber = null;
PaymentInstrument.prototype.encryptedCreditCardNumber = null;
PaymentInstrument.prototype.creditCardExpirationMonth = null;
PaymentInstrument.prototype.creditCardExpirationYear = null;
PaymentInstrument.prototype.creditCardValidFromMonth = null;
PaymentInstrument.prototype.creditCardValidFromYear = null;
PaymentInstrument.prototype.creditCardIssueNumber = null;
PaymentInstrument.prototype.bankRoutingNumber = null;
PaymentInstrument.prototype.bankAccountNumberLastDigits = null;
PaymentInstrument.prototype.maskedBankAccountNumber = null;
PaymentInstrument.prototype.encryptedBankAccountNumber = null;
PaymentInstrument.prototype.bankAccountHolder = null;
PaymentInstrument.prototype.encryptedBankAccountDriversLicense = null;
PaymentInstrument.prototype.bankAccountDriversLicenseLastDigits = null;
PaymentInstrument.prototype.maskedBankAccountDriversLicense = null;
PaymentInstrument.prototype.bankAccountDriversLicenseStateCode = null;
PaymentInstrument.prototype.giftCertificateID = null;
PaymentInstrument.prototype.giftCertificateCode = null;
PaymentInstrument.prototype.maskedGiftCertificateCode = null;

module.exports = PaymentInstrument;
