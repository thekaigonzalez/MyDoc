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

let opts = `
    Options:

    WinML -readme | Loads the README file. If it's not found in the current directory, it will print an error.

    WinML -exec "stat" | Executes a Statement. Better on Linux as it is able to use string arguments.

    WinML -help | Shows the help menu.

`

let str = `
    Operations:

    Division
    	Divison is only allowed by two numbers.
    	So (/ 100 50) Works.
    	But (/ 100 50 10) Doesn't.

    Addition
	    Addition works by taking a list of numbers and adding them together.
	    The list of numbers can be anything, as long as it doesn't overflow.
	    (+ 100 10) -> 110

    Multiplication
	    Multiplication works like the Addition operator, except with "*" instead of "+".
	    (* 100 10) -> 1000

    Floating-Point Division
    	Floating point division can be used with the "&" operator. Instead of having a value,
    	it shows the floating point version and it's rounded version. Useful for remainders.
    	>>>(& 12488 6)
    	f: 2081.33
    	2081
    	>>> ...

    Reference Name
    	References are found using the ? Operator.
    	>>>(? 1)
    	r: 21F3108
    	1
`

module.exports.header = "WinML"

module.exports.overview = opts;
module.exports.description = str