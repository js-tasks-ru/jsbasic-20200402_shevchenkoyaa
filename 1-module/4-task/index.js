/**
 * checkSpam
 * @param {string} str base
 * @returns {boolean}
 */
function checkSpam(str) {
lowerName = str.toLowerCase ();
if (str === '' || str.includes('now') || str.includes('xxx')) {
    return true;
} else {
    return false;
 }
}