/**
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

/**
* Negate a single-precision complex floating-point number.
*
* @module @stdlib/complex-float32-base-neg
*
* @example
* var Complex64 = require( '@stdlib/complex-float32-ctor' );
* var cnegf = require( '@stdlib/complex-float32-base-neg' );
*
* var z = new Complex64( -4.0, 5.0 );
*
* var out = cnegf( z );
* // returns <Complex64>[ 4.0, -5.0 ]
*
* @example
* var Complex64 = require( '@stdlib/complex-float32-ctor' );
* var cnegf = require( '@stdlib/complex-float32-base-neg' );
*
* var z = new Complex64( 0.0, 0.0 );
*
* var out = cnegf( z );
* // returns <Complex64>[ -0.0, -0.0 ]
*
* @example
* var Complex64 = require( '@stdlib/complex-float32-ctor' );
* var cnegf = require( '@stdlib/complex-float32-base-neg' );
*
* var z = new Complex64( NaN, NaN );
*
* var out = cnegf( z );
* // returns <Complex64>[ NaN, NaN ]
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
