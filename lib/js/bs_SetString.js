'use strict';

var Bs_internalAVLset = require("./bs_internalAVLset.js");
var Bs_internalSetString = require("./bs_internalSetString.js");

var empty = Bs_internalAVLset.empty0;

var isEmpty = Bs_internalAVLset.isEmpty0;

var mem = Bs_internalSetString.mem;

var add = Bs_internalSetString.add;

var singleton = Bs_internalAVLset.singleton0;

var remove = Bs_internalSetString.remove;

var union = Bs_internalSetString.union;

var inter = Bs_internalSetString.inter;

var diff = Bs_internalSetString.diff;

var cmp = Bs_internalSetString.cmp;

var eq = Bs_internalSetString.eq;

var subset = Bs_internalSetString.subset;

var iter = Bs_internalAVLset.iter0;

var fold = Bs_internalAVLset.fold0;

var forAll = Bs_internalAVLset.forAll0;

var exists = Bs_internalAVLset.exists0;

var filter = Bs_internalAVLset.filter0;

var partition = Bs_internalAVLset.partition0;

var length = Bs_internalAVLset.length0;

var elements = Bs_internalAVLset.elements0;

var toArray = Bs_internalAVLset.toArray0;

var min = Bs_internalAVLset.min0;

var max = Bs_internalAVLset.max0;

var split = Bs_internalSetString.split;

var findOpt = Bs_internalSetString.findOpt;

var ofArray = Bs_internalSetString.ofArray;

var checkInvariant = Bs_internalAVLset.checkInvariant;

exports.empty = empty;
exports.isEmpty = isEmpty;
exports.mem = mem;
exports.add = add;
exports.singleton = singleton;
exports.remove = remove;
exports.union = union;
exports.inter = inter;
exports.diff = diff;
exports.cmp = cmp;
exports.eq = eq;
exports.subset = subset;
exports.iter = iter;
exports.fold = fold;
exports.forAll = forAll;
exports.exists = exists;
exports.filter = filter;
exports.partition = partition;
exports.length = length;
exports.elements = elements;
exports.toArray = toArray;
exports.min = min;
exports.max = max;
exports.split = split;
exports.findOpt = findOpt;
exports.ofArray = ofArray;
exports.checkInvariant = checkInvariant;
/* No side effect */