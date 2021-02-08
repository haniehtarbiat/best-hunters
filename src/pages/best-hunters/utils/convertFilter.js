/**
 * convert persian filter to number
 * @param item
 * @returns {number}
 */
function convertFilter(item) {
    return (Number(new Date(item.date).toLocaleDateString('US', { month: '2-digit', formatMatcher: 'basic' })) / 2);
}
export default convertFilter;
