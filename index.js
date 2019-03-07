const ASCII_ENC = 'ascii';     // For 7-bit ASCII data only. This encoding is fast and will strip the high bit if set.
const UTF8_ENC = 'utf8';       // DEFAULT. Multibyte encoded Unicode characters. Many web pages and other document formats use UTF-8.
const UTF16LE_ENC = 'utf16le'; // 2 or 4 bytes, little-endian encoded Unicode characters. Surrogate pairs (U+10000 to U+10FFFF) are supported.
const UCS2_ENC = UTF16LE_ENC;  // Alias of 'utf16le'.
const BASE64_ENC = 'base64';   // Base64 encoding. When creating a Buffer from a string, this encoding will also correctly accept "URL and Filename Safe Alphabet" as specified in RFC4648, Section 5.
const LATIN1_ENC = 'latin1';   // A way of encoding the Buffer into a one-byte encoded string (as defined by the IANA in RFC1345, page 63, to be the Latin-1 supplement block and C0/C1 control codes).
const BINARY_ENC = LATIN1_ENC; // Alias for 'latin1'.
const HEX_ENC = 'hex';         // Encode each byte as two hexadecimal characters.

function bufferIndexOf(buffer, value, start = 0, encoding = UTF8_ENC) {

}

function arrayIndexOf(array, value, start = 0, encoding = UTF8_ENC) {

}


module.exports = { bufferIndexOf, arrayIndexOf };
