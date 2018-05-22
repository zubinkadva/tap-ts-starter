/** Parse XML files using [xml2js.parseString](https://github.com/Leonidas-from-XIV/node-xml2js)
 *
 */ /** hack for https://github.com/TypeStrong/typedoc/issues/603 */

var sp = require('xml-js')

import * as tapTypes from './tap-types'

/** Convert the XML file into json */
export function parseItem(xml: Buffer) {
  let rec = new tapTypes.streamRecord()
  rec.stream = 'xml'
  rec.time_extracted = new Date()
  rec.record = sp.xml2json(xml)
  return rec
}
