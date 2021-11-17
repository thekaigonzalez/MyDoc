// Copyright (C) 2021 Kai D. Gonzalez
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

module.exports.header = "mydoc-categories | MyDoc Manual | mydoc-categories"

module.exports.overview = "/category/ID\n\t/category/ID/DOCUMENT"

module.exports.description = [
    `<strong>WARNING! If you haven't upgraded to 0.0.2 yet, I HIGHLY suggest you do, because it contains better category support and features.</strong>\n`,
    `Categories are folders (NOT FILES) within MyDoc's documentation structure.`,
    `Usually one would create a category using this format:\n`,
    `docs/`,
    `   CATEGORY_NAME/`,
    `       document1.js`,
    ``,
    `Categories use genre-like formatting, you cannot put a subcategory in a category (as of 0.0.2).`,
    `Then you can use api endpoint: /category/CATEGORY_NAME`,
    `and it'll return a <a href="/category/base/browsers">Category Browser.</a>`,
    `It's all interactive`
]

module.exports.copyright = [
    `MyDoc is licensed under the GNU Affero GPL License.`
]