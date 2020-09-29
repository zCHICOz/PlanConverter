var Reader = require('./Classes/Reader')
var Writer = require('./Classes/Writer')
var Processor = require('./Classes/Processor')
var Table = require('./Classes/Table')
var HtmlParser = require('./Classes/HtmlParser')
var PDFWriter = require('./Classes/PDFWriter')

var reader = new Reader()
var writer = new Writer()

async function main() {
  var data = await reader.Read('./users.csv')
  var processedData = Processor.Process(data)

  var users = new Table(processedData)
 
  var html = await HtmlParser.Parse(users)

  writer.Write(Date.now() + '.html', html)
  PDFWriter.WritePDF(Date.now() + '.pdf', html)
}

main()