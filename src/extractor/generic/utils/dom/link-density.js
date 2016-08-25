// Determines what percentage of the text
// in a node is link text
// Takes a node, returns a float
export default function linkDensity(node) {
  const totalTextLength = textLength(node.text())

  const linkText = node.find('a').text()
  const linkLength = textLength(linkText)

  if (totalTextLength > 0) {
    return linkLength / totalTextLength
  } else if (totalTextLength === 0 && linkLength > 0) {
    return 1
  } else {
    return 0
  }
}

function textLength(text) {
  return text.trim()
             .replace(/\s+/g, ' ')
             .length
}
