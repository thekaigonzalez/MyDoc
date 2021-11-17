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



module.exports.header = "MYDOC"

module.exports.overview = "mydoc is a web-based documentation host."

module.exports.description = [
    "MyDoc is an express-based simple webserver-based documentation host.",
    "You can <strong><a href=\"https://en.wikipedia.org/wiki/Web_hosting_service\">host</a></strong> documentation for your software.",
    "",
    "It's hosted on 100% FOSS Servers & is recommended to use the latest version of express.js and node.js.",
    "There's no ties, you download the server and start it, you can write your own documents in clean JS\n\tcode in either arrays or strings.",
    "",
    "<strong>recommended formatting</strong>",
    // \t to block
    "\tIt's usually recommended to use arrays for descriptions though, due to the fact it's",
    "\thighly likely there'll be formatting issues in your text.",
    "",
    `It collects JavaScript information from a file and displays it in pretty text. It's kind of like a <a href="https://www.man7.org/linux/man-pages/man7/groff_man.7.html">Man Page</a> in a sense;`,
    `Except there's just raw node.js syntax. All the end user needs to do is write code (mostly text) on the backend, and it's handled on the frontend.`
]

module.exports.copyright = [
    `MyDoc is licensed under the GNU Affero GPL License.`
]