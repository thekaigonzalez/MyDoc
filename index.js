// Copyright (C) 2021 kaigonzalez
// 
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU Affero General Public License as
// published by the Free Software Foundation, either version 3 of the
// License, or (at your option) any later version.
// 
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU Affero General Public License for more details.
// 
// You should have received a copy of the GNU Affero General Public License
// along with this program.  If not, see <http://www.gnu.org/licenses/>.

const express = require('express')
const app = express()
const port = 2222
var serveIndex = require('serve-index');

app.use(express.static(__dirname + "/"))
app.use('/ftp', serveIndex(__dirname + '/ftp'));
const fs = require("fs");
const { stringify } = require('querystring');
/*

app.get('/hello',function(req,res){
	res.send("Hello");
});

//Redirect to /hello
app.get('/redirect',function(req,res){
	res.redirect("./hello");
});

*/

app.get('/documents/:id', (req, res) => {
  if (fs.existsSync("./docs/" + req.params.id + ".js")) {
    let docobj = require('./docs/' + req.params.id)

    let overview = (docobj.overview != null) ? docobj.overview : 'overview not available.'

    let header = (docobj.header != null) ? docobj.header : 'Heading not available.'

    let description = (docobj.description != null) ? docobj.description : 'Description Not Available'
    
    let copyright = (docobj.copyright != null) ? docobj.copyright : 'Copyright Information Not Available. Check the author\'s page to potentially find more information.'
    

    let BrowseString = ""

    if (docobj.description != null) {
        BrowseString += `<a href="#description">DESCRIPTION </a>`
    }

    if (docobj.overview != null) {
        BrowseString += `<a href="#overview">OVERVIEW </a>`
    }

    if (docobj.header != null) {
        BrowseString += `<a href="#header">HEADING </a>`
    }

    if (docobj.copyright != null) {
        BrowseString += `<a href="#copyright">COPYRIGHT </a>`
    }


    
    for (let i = 0; i < description.length ; ++ i) {
        if (typeof description == 'string') break;
        description[i] = '\n\t' + description[i]
    }

    if (typeof description == 'object') description = description.join("")
    res.send("<style>\nh3 { color: #A00000;font-family:'helvetica',sans-serif; padding-top: 5%; } html, body { background-color: #fcfcfc; font-family: sans-serif; font-size: 100%; color: #181818; } pre { margin-left: 8px; } h1, h2, h3, h4, h5, h5 { font-family: helvetica, sans-serif; font-weight: normal; margin-left: 8px; margin-right: 8px; margin-top: 25px; } body { margin-top: 0px; margin-left: 0px; margin-right: 0px; } pre{ padding: 1px; font-size: 15px; }\n</style>\n" + BrowseString + "\n<h2 id='header'><strong>" + header + "</strong></h2>\n\n<h3 id='overview'><strong>OVERVIEW</strong></h3>\n\n<pre>\n\t" + overview + "</pre>\n\n<h3 id='description'><strong>DESCRIPTION</strong></h3>\n\n<pre>\n\t" + description + "</pre>\n\n<h3 id='copyright'><strong>COPYRIGHT</strong></h3>\n\n<pre>\n\t" + copyright + "</pre>\n")
  }
})

app.get('/category/:id/:doc', (req, res) => {
    if (fs.existsSync("./docs/" + req.params.id + "/" + req.params.doc + ".js")) {
      let docobj = require('./docs/' + req.params.id + "/" + req.params.doc)
  
      let overview = (docobj.overview != null) ? docobj.overview : 'overview not available.'
  
      let header = (docobj.header != null) ? docobj.header : 'Heading not available.'
  
      let description = (docobj.description != null) ? docobj.description : 'Description Not Available'
      
      let copyright = (docobj.copyright != null) ? docobj.copyright : 'Copyright Information Not Available. Check the author\'s page to potentially find more information.'
      
  
      let BrowseString = ""
  
      if (docobj.description != null) {
          BrowseString += `<a href="#description">DESCRIPTION </a>`
      }
  
      if (docobj.overview != null) {
          BrowseString += `<a href="#overview">OVERVIEW </a>`
      }
  
      if (docobj.header != null) {
          BrowseString += `<a href="#header">HEADING </a>`
      }
  
      if (docobj.copyright != null) {
          BrowseString += `<a href="#copyright">COPYRIGHT </a>`
      }
  
  
      
      for (let i = 0; i < description.length ; ++ i) {
          if (typeof description == 'string') break;
          description[i] = '\n\t' + description[i]
      }
  
      if (typeof description == 'object') description = description.join("")
      res.send("<style>\nh3 { color: #A00000;font-family:'helvetica',sans-serif; padding-top: 5%; } html, body { background-color: #fcfcfc; font-family: sans-serif; font-size: 100%; color: #181818; } pre { margin-left: 8px; } h1, h2, h3, h4, h5, h5 { font-family: helvetica, sans-serif; font-weight: normal; margin-left: 8px; margin-right: 8px; margin-top: 25px; } body { margin-top: 0px; margin-left: 0px; margin-right: 0px; } pre{ padding: 1px; font-size: 15px; }\n</style>\n" + BrowseString + "\n<h2 id='header'><strong>" + header + "</strong></h2>\n\n<h3 id='overview'><strong>OVERVIEW</strong></h3>\n\n<pre>\n\t" + overview + "</pre>\n\n<h3 id='description'><strong>DESCRIPTION</strong></h3>\n\n<pre>\n\t" + description + "</pre>\n\n<h3 id='copyright'><strong>COPYRIGHT</strong></h3>\n\n<pre>\n\t" + copyright + "</pre>\n")
    }
  })
  

app.get('/manual', (req, res) => {
    res.redirect('/category/base/mydoc')
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})