const jsonData = {
  host: 'hexlet.io',
  timeout: 50,
  proxy: '123.234.53.22',
  follow: false,
}

const jsonData2 = {
  timeout: 20,
  verbose: true,
  host: 'hexlet.io',
}

const diffString = '{"- follow":false,"= host":"hexlet.io","- proxy":"123.234.53.22","- timeout":50,"+ timeout":20,"+ verbose":true}'

const diffFormatString = 
`{ 
- follow: false
  host: hexlet.io
- proxy: 123.234.53.22
- timeout: 50
+ timeout: 20
+ verbose: true
}`

export { jsonData, jsonData2, diffString, diffFormatString }
