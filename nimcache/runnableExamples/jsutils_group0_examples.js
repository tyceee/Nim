/* Generated by the Nim Compiler v2.1.1 */
var framePtr = null;
var excHandler = 0;
var lastJSError = null;
var NTI134217749 = {size: 0, kind: 17, base: null, node: null, finalizer: null};
var NTI134217751 = {size: 0, kind: 17, base: null, node: null, finalizer: null};
var NTI134217741 = {size: 0, kind: 17, base: null, node: null, finalizer: null};
var NTI134217743 = {size: 0, kind: 17, base: null, node: null, finalizer: null};
var NTI33554435 = {size: 0,kind: 31,base: null,node: null,finalizer: null};
var NTI33555822 = {size: 0, kind: 18, base: null, node: null, finalizer: null};
var NTI33555163 = {size: 0, kind: 17, base: null, node: null, finalizer: null};
var NTI33555171 = {size: 0, kind: 22, base: null, node: null, finalizer: null};
var NTI33554450 = {size: 0,kind: 29,base: null,node: null,finalizer: null};
var NTI33555170 = {size: 0, kind: 22, base: null, node: null, finalizer: null};
var NTI33555167 = {size: 0, kind: 17, base: null, node: null, finalizer: null};
var NTI33555168 = {size: 0, kind: 17, base: null, node: null, finalizer: null};
var NTI134217745 = {size: 0, kind: 17, base: null, node: null, finalizer: null};
var NTI33554449 = {size: 0,kind: 28,base: null,node: null,finalizer: null};
var NNI134217745 = {kind: 2, len: 0, offset: 0, typ: null, name: null, sons: []};
NTI134217745.node = NNI134217745;
var NNI33555168 = {kind: 2, len: 0, offset: 0, typ: null, name: null, sons: []};
NTI33555168.node = NNI33555168;
NTI33555170.base = NTI33555167;
NTI33555171.base = NTI33555167;
var NNI33555167 = {kind: 2, len: 5, offset: 0, typ: null, name: null, sons: [{kind: 1, offset: "parent", len: 0, typ: NTI33555170, name: "parent", sons: null}, 
{kind: 1, offset: "name", len: 0, typ: NTI33554450, name: "name", sons: null}, 
{kind: 1, offset: "message", len: 0, typ: NTI33554449, name: "msg", sons: null}, 
{kind: 1, offset: "trace", len: 0, typ: NTI33554449, name: "trace", sons: null}, 
{kind: 1, offset: "up", len: 0, typ: NTI33555171, name: "up", sons: null}]};
NTI33555167.node = NNI33555167;
var NNI33555163 = {kind: 2, len: 0, offset: 0, typ: null, name: null, sons: []};
NTI33555163.node = NNI33555163;
NTI33555167.base = NTI33555163;
NTI33555168.base = NTI33555167;
NTI134217745.base = NTI33555168;
var NNI33555822 = {kind: 2, len: 3, offset: 0, typ: null, name: null, sons: [{kind: 1, offset: "Field0", len: 0, typ: NTI33554450, name: "Field0", sons: null}, 
{kind: 1, offset: "Field1", len: 0, typ: NTI33554435, name: "Field1", sons: null}, 
{kind: 1, offset: "Field2", len: 0, typ: NTI33554450, name: "Field2", sons: null}]};
NTI33555822.node = NNI33555822;
var NNI134217743 = {kind: 2, len: 0, offset: 0, typ: null, name: null, sons: []};
NTI134217743.node = NNI134217743;
var NNI134217741 = {kind: 2, len: 0, offset: 0, typ: null, name: null, sons: []};
NTI134217741.node = NNI134217741;
NTI134217741.base = NTI33555168;
NTI134217743.base = NTI134217741;
var NNI134217751 = {kind: 2, len: 0, offset: 0, typ: null, name: null, sons: []};
NTI134217751.node = NNI134217751;
NTI134217751.base = NTI33555168;
var NNI134217749 = {kind: 2, len: 0, offset: 0, typ: null, name: null, sons: []};
NTI134217749.node = NNI134217749;
NTI134217749.base = NTI33555168;

function setConstr() {
        var result = {};
    for (var i = 0; i < arguments.length; ++i) {
      var x = arguments[i];
      if (typeof(x) == "object") {
        for (var j = x[0]; j <= x[1]; ++j) {
          result[j] = true;
        }
      } else {
        result[x] = true;
      }
    }
    return result;
  

  
}
var ConstSet1 = setConstr(17, 16, 4, 18, 27, 19, 23, 22, 21);

function nimCopy(dest_p0, src_p1, ti_p2) {
  var result_33557269 = null;

    switch (ti_p2.kind) {
    case 21:
    case 22:
    case 23:
    case 5:
      if (!(isFatPointer__system_u2817(ti_p2))) {
      result_33557269 = src_p1;
      }
      else {
        result_33557269 = [src_p1[0], src_p1[1]];
      }
      
      break;
    case 19:
            if (dest_p0 === null || dest_p0 === undefined) {
        dest_p0 = {};
      }
      else {
        for (var key in dest_p0) { delete dest_p0[key]; }
      }
      for (var key in src_p1) { dest_p0[key] = src_p1[key]; }
      result_33557269 = dest_p0;
    
      break;
    case 18:
    case 17:
      if (!((ti_p2.base == null))) {
      result_33557269 = nimCopy(dest_p0, src_p1, ti_p2.base);
      }
      else {
      if ((ti_p2.kind == 17)) {
      result_33557269 = (dest_p0 === null || dest_p0 === undefined) ? {m_type: ti_p2} : dest_p0;
      }
      else {
        result_33557269 = (dest_p0 === null || dest_p0 === undefined) ? {} : dest_p0;
      }
      }
      nimCopyAux(result_33557269, src_p1, ti_p2.node);
      break;
    case 4:
    case 16:
            if(ArrayBuffer.isView(src_p1)) { 
        if(dest_p0 === null || dest_p0 === undefined || dest_p0.length != src_p1.length) {
          dest_p0 = new src_p1.constructor(src_p1);
        } else {
          dest_p0.set(src_p1, 0);
        }
        result_33557269 = dest_p0;
      } else {
        if (src_p1 === null) {
          result_33557269 = null;
        }
        else {
          if (dest_p0 === null || dest_p0 === undefined || dest_p0.length != src_p1.length) {
            dest_p0 = new Array(src_p1.length);
          }
          result_33557269 = dest_p0;
          for (var i = 0; i < src_p1.length; ++i) {
            result_33557269[i] = nimCopy(result_33557269[i], src_p1[i], ti_p2.base);
          }
        }
      }
    
      break;
    case 24:
    case 27:
            if (src_p1 === null) {
        result_33557269 = null;
      }
      else {
        if (dest_p0 === null || dest_p0 === undefined || dest_p0.length != src_p1.length) {
          dest_p0 = new Array(src_p1.length);
        }
        result_33557269 = dest_p0;
        for (var i = 0; i < src_p1.length; ++i) {
          result_33557269[i] = nimCopy(result_33557269[i], src_p1[i], ti_p2.base);
        }
      }
    
      break;
    case 28:
            if (src_p1 !== null) {
        result_33557269 = src_p1.slice(0);
      }
    
      break;
    default: 
      result_33557269 = src_p1;
      break;
    }

  return result_33557269;

}

function arrayConstr(len_p0, value_p1, typ_p2) {
        var result = new Array(len_p0);
    for (var i = 0; i < len_p0; ++i) result[i] = nimCopy(null, value_p1, typ_p2);
    return result;
  

  
}

function mnewString(len_p0) {
        var result = new Array(len_p0);
    for (var i = 0; i < len_p0; i++) {result[i] = 0;}
    return result;
  

  
}

function addInt(a_p0, b_p1) {
        var result = a_p0 + b_p1;
    checkOverflowInt(result);
    return result;
  

  
}

function chckRange(i_p0, a_p1, b_p2) {
  var result_33557317 = 0;

  BeforeRet: {
    if (((a_p1 <= i_p0) && (i_p0 <= b_p2))) {
    result_33557317 = i_p0;
    break BeforeRet;
    }
    else {
    raiseRangeError();
    }
    
  };

  return result_33557317;

}

function chckIndx(i_p0, a_p1, b_p2) {
  var result_33557312 = 0;

  BeforeRet: {
    if (((a_p1 <= i_p0) && (i_p0 <= b_p2))) {
    result_33557312 = i_p0;
    break BeforeRet;
    }
    else {
    raiseIndexError(i_p0, a_p1, b_p2);
    }
    
  };

  return result_33557312;

}

function cstrToNimstr(c_p0) {
      var ln = c_p0.length;
  var result = new Array(ln);
  var r = 0;
  for (var i = 0; i < ln; ++i) {
    var ch = c_p0.charCodeAt(i);

    if (ch < 128) {
      result[r] = ch;
    }
    else {
      if (ch < 2048) {
        result[r] = (ch >> 6) | 192;
      }
      else {
        if (ch < 55296 || ch >= 57344) {
          result[r] = (ch >> 12) | 224;
        }
        else {
            ++i;
            ch = 65536 + (((ch & 1023) << 10) | (c_p0.charCodeAt(i) & 1023));
            result[r] = (ch >> 18) | 240;
            ++r;
            result[r] = ((ch >> 12) & 63) | 128;
        }
        ++r;
        result[r] = ((ch >> 6) & 63) | 128;
      }
      ++r;
      result[r] = (ch & 63) | 128;
    }
    ++r;
  }
  return result;
  

  
}

function toJSStr(s_p0) {
  var result_33556891 = null;

    var res_33556932 = newSeq__system_u2476((s_p0).length);
    var i_33556933 = 0;
    var j_33556934 = 0;
    Label1: {
        Label2: while (true) {
        if (!(i_33556933 < (s_p0).length)) break Label2;
          var c_33556935 = s_p0[i_33556933];
          if ((c_33556935 < 128)) {
          res_33556932[j_33556934] = String.fromCharCode(c_33556935);
          i_33556933 += 1;
          }
          else {
            var helper_33556947 = newSeq__system_u2476(0);
            Label3: {
                Label4: while (true) {
                if (!true) break Label4;
                  var code_33556948 = c_33556935.toString(16);
                  if ((((code_33556948) == null ? 0 : (code_33556948).length) == 1)) {
                  helper_33556947.push("%0");;
                  }
                  else {
                  helper_33556947.push("%");;
                  }
                  
                  helper_33556947.push(code_33556948);;
                  i_33556933 += 1;
                  if ((((s_p0).length <= i_33556933) || (s_p0[i_33556933] < 128))) {
                  break Label3;
                  }
                  
                  c_33556935 = s_p0[i_33556933];
                }
            };
++excHandler;
            try {
            res_33556932[j_33556934] = decodeURIComponent(helper_33556947.join(""));
--excHandler;
} catch (EXCEPTION) {
 var prevJSError = lastJSError;
 lastJSError = EXCEPTION;
 --excHandler;
            res_33556932[j_33556934] = helper_33556947.join("");
            lastJSError = prevJSError;
            } finally {
            }
          }
          
          j_33556934 += 1;
        }
    };
    if (res_33556932.length < j_33556934) { for (var i = res_33556932.length ; i < j_33556934 ; ++i) res_33556932.push(null); }
               else { res_33556932.length = j_33556934; };
    result_33556891 = res_33556932.join("");

  return result_33556891;

}

function raiseException(e_p0, ename_p1) {
    e_p0.name = ename_p1;
    if ((excHandler == 0)) {
    unhandledException(e_p0);
    }
    
    e_p0.trace = nimCopy(null, rawWriteStackTrace__system_u2161(), NTI33554449);
    throw e_p0;

  
}

function makeNimstrLit(c_p0) {
      var result = [];
  for (var i = 0; i < c_p0.length; ++i) {
    result[i] = c_p0.charCodeAt(i);
  }
  return result;
  

  
}
var F = {procname: "module jsbigints", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/std/jsbigints.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jsbigints", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/std/jsbigints.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jsutils", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/std/private/jsutils.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jsutils", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/std/private/jsutils.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module macros", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/core/macros.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module macros", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/core/macros.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module hashes", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/pure/hashes.nim", line: 0};
framePtr = F;
F.line = 218;
F.filename = "hashes.nim";
var objectID_754974895 = [0];
framePtr = F.prev;
var F = {procname: "module hashes", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/pure/hashes.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module bitops_utils", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/std/private/bitops_utils.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module bitops_utils", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/std/private/bitops_utils.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module countbits_impl", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/system/countbits_impl.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module countbits_impl", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/system/countbits_impl.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module bitops", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/pure/bitops.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module bitops", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/pure/bitops.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module fenv", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/pure/fenv.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module fenv", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/pure/fenv.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module math", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/pure/math.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module math", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/pure/math.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module algorithm", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/pure/algorithm.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module algorithm", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/pure/algorithm.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module outparams", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/std/outparams.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module outparams", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/std/outparams.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module tables", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/pure/collections/tables.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module tables", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/pure/collections/tables.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jsffi", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/js/jsffi.nim", line: 0};
framePtr = F;
F.line = 45;
F.filename = "jsffi.nim";
F.line = 46;
framePtr = F.prev;
var F = {procname: "module jsffi", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/js/jsffi.nim", line: 0};
framePtr = F;
framePtr = F.prev;

function isFatPointer__system_u2817(ti_p0) {
  var result_33557251 = false;

  BeforeRet: {
    result_33557251 = !((ConstSet1[ti_p0.base.kind] != undefined));
    break BeforeRet;
  };

  return result_33557251;

}

function nimCopyAux(dest_p0, src_p1, n_p2) {
    switch (n_p2.kind) {
    case 0:
      break;
    case 1:
            dest_p0[n_p2.offset] = nimCopy(dest_p0[n_p2.offset], src_p1[n_p2.offset], n_p2.typ);
    
      break;
    case 2:
          for (var i = 0; i < n_p2.sons.length; i++) {
      nimCopyAux(dest_p0, src_p1, n_p2.sons[i]);
    }
    
      break;
    case 3:
            dest_p0[n_p2.offset] = nimCopy(dest_p0[n_p2.offset], src_p1[n_p2.offset], n_p2.typ);
      for (var i = 0; i < n_p2.sons.length; ++i) {
        nimCopyAux(dest_p0, src_p1, n_p2.sons[i][1]);
      }
    
      break;
    }

  
}

function add__system_u1931(x_p0, x_p0_Idx, y_p1) {
          if (x_p0[x_p0_Idx] === null) { x_p0[x_p0_Idx] = []; }
      var off = x_p0[x_p0_Idx].length;
      x_p0[x_p0_Idx].length += y_p1.length;
      for (var i = 0; i < y_p1.length; ++i) {
        x_p0[x_p0_Idx][off+i] = y_p1.charCodeAt(i);
      }
    

  
}

function raiseOverflow() {
    raiseException({message: [111,118,101,114,45,32,111,114,32,117,110,100,101,114,102,108,111,119], parent: null, m_type: NTI134217743, name: null, trace: [], up: null}, "OverflowDefect");

  
}

function checkOverflowInt(a_p0) {
        if (a_p0 > 2147483647 || a_p0 < -2147483648) raiseOverflow();
  

  
}

function raiseRangeError() {
    raiseException({message: [118,97,108,117,101,32,111,117,116,32,111,102,32,114,97,110,103,101], parent: null, m_type: NTI134217751, name: null, trace: [], up: null}, "RangeDefect");

  
}

function raiseIndexError(i_p0, a_p1, b_p2) {
    var Temporary1;

    if ((b_p2 < a_p1)) {
    Temporary1 = [105,110,100,101,120,32,111,117,116,32,111,102,32,98,111,117,110,100,115,44,32,116,104,101,32,99,111,110,116,97,105,110,101,114,32,105,115,32,101,109,112,116,121];
    }
    else {
    Temporary1 = ([105,110,100,101,120,32]).concat(HEX24__systemZdollars_u8(i_p0),[32,110,111,116,32,105,110,32],HEX24__systemZdollars_u8(a_p1),[32,46,46,32],HEX24__systemZdollars_u8(b_p2));
    }
    
    raiseException({message: nimCopy(null, Temporary1, NTI33554449), parent: null, m_type: NTI134217749, name: null, trace: [], up: null}, "IndexDefect");

  
}

function addChars__stdZprivateZdigitsutils_u199(result_p0, result_p0_Idx, x_p1, start_p2, n_p3) {
    var Temporary1;

  var F = {procname: "addChars.addChars", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/std/private/digitsutils.nim", line: 0};
  framePtr = F;
    F.line = 44;
    F.filename = "digitsutils.nim";
    var old_301990093 = (result_p0[result_p0_Idx]).length;
    F.line = 45;
    if (result_p0[result_p0_Idx].length < (Temporary1 = chckRange(addInt(old_301990093, n_p3), 0, 2147483647), Temporary1)) { for (var i = result_p0[result_p0_Idx].length; i < Temporary1; ++i) result_p0[result_p0_Idx].push(0); }
         else {result_p0[result_p0_Idx].length = Temporary1; };
    Label2: {
      F.line = 47;
      var iHEX60gensym4_301990107 = 0;
      F.line = 128;
      F.filename = "iterators_1.nim";
      var i_654311488 = 0;
      Label3: {
        F.line = 129;
          Label4: while (true) {
          if (!(i_654311488 < n_p3)) break Label4;
            F.line = 50;
            F.filename = "digitsutils.nim";
            iHEX60gensym4_301990107 = i_654311488;
            F.line = 47;
            result_p0[result_p0_Idx][chckIndx(addInt(old_301990093, iHEX60gensym4_301990107), 0, (result_p0[result_p0_Idx]).length - 1)] = x_p1.charCodeAt(chckIndx(addInt(start_p2, iHEX60gensym4_301990107), 0, (x_p1).length - 1));
            F.line = 131;
            F.filename = "iterators_1.nim";
            i_654311488 = addInt(i_654311488, 1);
          }
      };
    };
  framePtr = F.prev;

  
}

function addChars__stdZprivateZdigitsutils_u195(result_p0, result_p0_Idx, x_p1) {
  var F = {procname: "addChars.addChars", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/std/private/digitsutils.nim", line: 0};
  framePtr = F;
    F.line = 56;
    F.filename = "digitsutils.nim";
    addChars__stdZprivateZdigitsutils_u199(result_p0, result_p0_Idx, x_p1, 0, ((x_p1) == null ? 0 : (x_p1).length));
  framePtr = F.prev;

  
}

function addInt__stdZprivateZdigitsutils_u220(result_p0, result_p0_Idx, x_p1) {
  var F = {procname: "digitsutils.addInt", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/std/private/digitsutils.nim", line: 0};
  framePtr = F;
    F.line = 112;
    F.filename = "digitsutils.nim";
    addChars__stdZprivateZdigitsutils_u195(result_p0, result_p0_Idx, ((x_p1) + ""));
  framePtr = F.prev;

  
}

function addInt__stdZprivateZdigitsutils_u238(result_p0, result_p0_Idx, x_p1) {
  var F = {procname: "digitsutils.addInt", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/std/private/digitsutils.nim", line: 0};
  framePtr = F;
    F.line = 116;
    F.filename = "digitsutils.nim";
    addInt__stdZprivateZdigitsutils_u220(result_p0, result_p0_Idx, BigInt(x_p1));
  framePtr = F.prev;

  
}

function HEX24__systemZdollars_u8(x_p0) {
  var result_369098762 = [[]];

  var F = {procname: "dollars.$", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/system/dollars.nim", line: 0};
  framePtr = F;
    F.line = 18;
    F.filename = "dollars.nim";
    addInt__stdZprivateZdigitsutils_u238(result_369098762, 0, x_p0);
  framePtr = F.prev;

  return result_369098762[0];

}

function auxWriteStackTrace__system_u2068(f_p0) {
  var result_33556502 = [[]];

    var it_33556510 = f_p0;
    var i_33556511 = 0;
    var total_33556512 = 0;
    var tempFrames_33556513 = arrayConstr(64, {Field0: null, Field1: 0, Field2: null}, NTI33555822);
    Label1: {
        Label2: while (true) {
        if (!(!((it_33556510 == null)) && (i_33556511 <= 63))) break Label2;
          tempFrames_33556513[i_33556511].Field0 = it_33556510.procname;
          tempFrames_33556513[i_33556511].Field1 = it_33556510.line;
          tempFrames_33556513[i_33556511].Field2 = it_33556510.filename;
          i_33556511 += 1;
          total_33556512 += 1;
          it_33556510 = it_33556510.prev;
        }
    };
    Label3: {
        Label4: while (true) {
        if (!!((it_33556510 == null))) break Label4;
          total_33556512 += 1;
          it_33556510 = it_33556510.prev;
        }
    };
    result_33556502[0] = nimCopy(null, [], NTI33554449);
    if (!((total_33556512 == i_33556511))) {
    result_33556502[0].push.apply(result_33556502[0], [40]);;
    result_33556502[0].push.apply(result_33556502[0], HEX24__systemZdollars_u8((total_33556512 - i_33556511)));;
    result_33556502[0].push.apply(result_33556502[0], [32,99,97,108,108,115,32,111,109,105,116,116,101,100,41,32,46,46,46,10]);;
    }
    
    Label5: {
      var j_33556543 = 0;
      var colontmp__654311480 = 0;
      colontmp__654311480 = (i_33556511 - 1);
      var res_654311482 = colontmp__654311480;
      Label6: {
          Label7: while (true) {
          if (!(0 <= res_654311482)) break Label7;
            j_33556543 = res_654311482;
            result_33556502[0].push.apply(result_33556502[0], cstrToNimstr(tempFrames_33556513[j_33556543].Field2));;
            if ((0 < tempFrames_33556513[j_33556543].Field1)) {
            result_33556502[0].push.apply(result_33556502[0], [40]);;
            addInt__stdZprivateZdigitsutils_u238(result_33556502, 0, tempFrames_33556513[j_33556543].Field1);
            if (false) {
            result_33556502[0].push.apply(result_33556502[0], [44,32]);;
            addInt__stdZprivateZdigitsutils_u238(result_33556502, 0, 0);
            }
            
            result_33556502[0].push.apply(result_33556502[0], [41]);;
            }
            
            result_33556502[0].push.apply(result_33556502[0], [32,97,116,32]);;
            add__system_u1931(result_33556502, 0, tempFrames_33556513[j_33556543].Field0);
            result_33556502[0].push.apply(result_33556502[0], [10]);;
            res_654311482 -= 1;
          }
      };
    };

  return result_33556502[0];

}

function rawWriteStackTrace__system_u2161() {
  var result_33556594 = [];

    if (!((framePtr == null))) {
    result_33556594 = nimCopy(null, ([84,114,97,99,101,98,97,99,107,32,40,109,111,115,116,32,114,101,99,101,110,116,32,99,97,108,108,32,108,97,115,116,41,10]).concat(auxWriteStackTrace__system_u2068(framePtr)), NTI33554449);
    }
    else {
      result_33556594 = nimCopy(null, [78,111,32,115,116,97,99,107,32,116,114,97,99,101,98,97,99,107,32,97,118,97,105,108,97,98,108,101,10], NTI33554449);
    }
    

  return result_33556594;

}

function newSeq__system_u2476(len_p0) {
  var result_33556911 = [];

  var F = {procname: "newSeq.newSeq", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/system.nim", line: 0};
  framePtr = F;
    F.line = 635;
    F.filename = "system.nim";
    result_33556911 = new Array(len_p0); for (var i = 0 ; i < len_p0 ; ++i) { result_33556911[i] = null; }  framePtr = F.prev;

  return result_33556911;

}

function unhandledException(e_p0) {
    var buf_33556639 = [[]];
    if (!(((e_p0.message).length == 0))) {
    buf_33556639[0].push.apply(buf_33556639[0], [69,114,114,111,114,58,32,117,110,104,97,110,100,108,101,100,32,101,120,99,101,112,116,105,111,110,58,32]);;
    buf_33556639[0].push.apply(buf_33556639[0], e_p0.message);;
    }
    else {
    buf_33556639[0].push.apply(buf_33556639[0], [69,114,114,111,114,58,32,117,110,104,97,110,100,108,101,100,32,101,120,99,101,112,116,105,111,110]);;
    }
    
    buf_33556639[0].push.apply(buf_33556639[0], [32,91]);;
    add__system_u1931(buf_33556639, 0, e_p0.name);
    buf_33556639[0].push.apply(buf_33556639[0], [93,10]);;
    buf_33556639[0].push.apply(buf_33556639[0], rawWriteStackTrace__system_u2161());;
    var cbuf_33556640 = toJSStr(buf_33556639[0]);
    framePtr = null;
      if (typeof(Error) !== "undefined") {
    throw new Error(cbuf_33556640);
  }
  else {
    throw cbuf_33556640;
  }
  

  
}

function sysFatal__stdZassertions_u45(message_p1) {
  var F = {procname: "sysFatal.sysFatal", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/system/fatal.nim", line: 0};
  framePtr = F;
    F.line = 53;
    F.filename = "fatal.nim";
    raiseException({message: nimCopy(null, message_p1, NTI33554449), m_type: NTI134217745, parent: null, name: null, trace: [], up: null}, "AssertionDefect");
  framePtr = F.prev;

  
}

function raiseAssert__stdZassertions_u43(msg_p0) {
  var F = {procname: "assertions.raiseAssert", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/std/assertions.nim", line: 0};
  framePtr = F;
    F.line = 36;
    F.filename = "assertions.nim";
    sysFatal__stdZassertions_u45(msg_p0);
  framePtr = F.prev;

  
}

function failedAssertImpl__stdZassertions_u85(msg_p0) {
  var F = {procname: "assertions.failedAssertImpl", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/std/assertions.nim", line: 0};
  framePtr = F;
    F.line = 41;
    F.filename = "assertions.nim";
    raiseAssert__stdZassertions_u43(msg_p0);
  framePtr = F.prev;

  
}
var F = {procname: "module jsutils_examples_1", prev: framePtr, filename: "/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jsutils_examples_1.nim", line: 0};
framePtr = F;
if (!((typeof((1)) == "number"))) {
F.line = 27;
F.filename = "jsutils.nim";
failedAssertImpl__stdZassertions_u85(makeNimstrLit("/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jsutils_examples_1.nim(10, 3) `jsTypeOf(1.toJs) == \"number\"` "));
}

if (!((typeof((false)) == "boolean"))) {
F.line = 27;
failedAssertImpl__stdZassertions_u85(makeNimstrLit("/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jsutils_examples_1.nim(11, 3) `jsTypeOf(false.toJs) == \"boolean\"` "));
}

if (!((typeof((new Int32Array([1]))) == "object"))) {
F.line = 27;
failedAssertImpl__stdZassertions_u85(makeNimstrLit("/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jsutils_examples_1.nim(12, 3) `[1].toJs.jsTypeOf == \"object\"` "));
}

if (!((typeof((BigInt("1"))) == "bigint"))) {
F.line = 27;
failedAssertImpl__stdZassertions_u85(makeNimstrLit("/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jsutils_examples_1.nim(13, 3) `big\"1\".toJs.jsTypeOf == \"bigint\"` "));
}

framePtr = F.prev;
var F = {procname: "module jsutils_examples_1", prev: framePtr, filename: "/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jsutils_examples_1.nim", line: 0};
framePtr = F;
framePtr = F.prev;

function jsConstructorName__jsutils95examples9550_u10(a_p0) {
  var result_922746893 = null;

  var F = {procname: "jsConstructorName.jsConstructorName", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/std/private/jsutils.nim", line: 0};
  framePtr = F;
    F.line = 40;
    F.filename = "jsutils.nim";
    result_922746893 = a_p0.constructor.name
  framePtr = F.prev;

  return result_922746893;

}

function jsConstructorName__jsutils95examples9550_u22(a_p0) {
  var result_922746905 = null;

  var F = {procname: "jsConstructorName.jsConstructorName", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/std/private/jsutils.nim", line: 0};
  framePtr = F;
    F.line = 40;
    F.filename = "jsutils.nim";
    result_922746905 = a_p0.constructor.name
  framePtr = F.prev;

  return result_922746905;

}
var F = {procname: "module jsutils_examples_2", prev: framePtr, filename: "/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jsutils_examples_2.nim", line: 0};
framePtr = F;
F.line = 35;
F.filename = "jsutils.nim";
var a_922746889 = new Float64Array(2);
if (!((jsConstructorName__jsutils95examples9550_u10(a_922746889) == "Float64Array"))) {
F.line = 35;
failedAssertImpl__stdZassertions_u85(makeNimstrLit("/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jsutils_examples_2.nim(11, 3) `jsConstructorName(a) == \"Float64Array\"` "));
}

if (!((jsConstructorName__jsutils95examples9550_u22((a_922746889)) == "Float64Array"))) {
F.line = 35;
failedAssertImpl__stdZassertions_u85(makeNimstrLit("/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jsutils_examples_2.nim(12, 3) `jsConstructorName(a.toJs) == \"Float64Array\"` "));
}

framePtr = F.prev;
var F = {procname: "module jsutils_examples_2", prev: framePtr, filename: "/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jsutils_examples_2.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jsutils_examples_3", prev: framePtr, filename: "/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jsutils_examples_3.nim", line: 0};
framePtr = F;
if (!((Object.prototype.toString.call((1)) == "[object Number]"))) {
F.line = 49;
F.filename = "jsutils.nim";
failedAssertImpl__stdZassertions_u85(makeNimstrLit("/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jsutils_examples_3.nim(11, 3) `1.toJs.getProtoName == \"[object Number]\"` "));
}

if (!((Object.prototype.toString.call(("a")) == "[object String]"))) {
F.line = 49;
failedAssertImpl__stdZassertions_u85(makeNimstrLit("/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jsutils_examples_3.nim(12, 3) `\"a\".toJs.getProtoName == \"[object String]\"` "));
}

if (!((Object.prototype.toString.call((BigInt("1"))) == "[object BigInt]"))) {
F.line = 49;
failedAssertImpl__stdZassertions_u85(makeNimstrLit("/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jsutils_examples_3.nim(13, 3) `big\"1\".toJs.getProtoName == \"[object BigInt]\"` "));
}

if (!((Object.prototype.toString.call((false)) == "[object Boolean]"))) {
F.line = 49;
failedAssertImpl__stdZassertions_u85(makeNimstrLit("/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jsutils_examples_3.nim(14, 3) `false.toJs.getProtoName == \"[object Boolean]\"` "));
}

if (!((Object.prototype.toString.call(({Field0: 1})) == "[object Object]"))) {
F.line = 49;
failedAssertImpl__stdZassertions_u85(makeNimstrLit("/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jsutils_examples_3.nim(15, 3) `(a: 1).toJs.getProtoName == \"[object Object]\"` "));
}

if (!((Object.prototype.toString.call((null)) == "[object Null]"))) {
F.line = 49;
failedAssertImpl__stdZassertions_u85(makeNimstrLit("/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jsutils_examples_3.nim(16, 3) `A.default.toJs.getProtoName == \"[object Null]\"` "));
}

if (!((Object.prototype.toString.call((new Int32Array([1]))) == "[object Int32Array]"))) {
F.line = 49;
failedAssertImpl__stdZassertions_u85(makeNimstrLit("/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jsutils_examples_3.nim(17, 3) `[1].toJs.getProtoName == \"[object Int32Array]\"` "));
}

if (!((Object.prototype.toString.call(([1])) == "[object Array]"))) {
F.line = 49;
failedAssertImpl__stdZassertions_u85(makeNimstrLit("/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jsutils_examples_3.nim(18, 3) `@[1].toJs.getProtoName == \"[object Array]\"` "));
}

framePtr = F.prev;
var F = {procname: "module jsutils_examples_3", prev: framePtr, filename: "/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jsutils_examples_3.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jsutils_examples_4", prev: framePtr, filename: "/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jsutils_examples_4.nim", line: 0};
framePtr = F;
if (!((Number.MAX_SAFE_INTEGER == 9007199254740991n))) {
F.line = 64;
F.filename = "jsutils.nim";
failedAssertImpl__stdZassertions_u85(makeNimstrLit("/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jsutils_examples_4.nim(10, 3) `a == maxSafeInteger` "));
}

framePtr = F.prev;
var F = {procname: "module jsutils_examples_4", prev: framePtr, filename: "/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jsutils_examples_4.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jsutils_examples_5", prev: framePtr, filename: "/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jsutils_examples_5.nim", line: 0};
framePtr = F;
if (!(Number.isInteger(1))) {
F.line = 69;
F.filename = "jsutils.nim";
failedAssertImpl__stdZassertions_u85(makeNimstrLit("/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jsutils_examples_5.nim(10, 3) `1.isInteger` "));
}

if (!(!(Number.isInteger(1.5)))) {
F.line = 69;
failedAssertImpl__stdZassertions_u85(makeNimstrLit("/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jsutils_examples_5.nim(11, 3) `not 1.5.isInteger` "));
}

if (!(Number.isInteger((1)))) {
F.line = 69;
failedAssertImpl__stdZassertions_u85(makeNimstrLit("/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jsutils_examples_5.nim(12, 3) `1.toJs.isInteger` "));
}

if (!(!(Number.isInteger((1.5))))) {
F.line = 69;
failedAssertImpl__stdZassertions_u85(makeNimstrLit("/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jsutils_examples_5.nim(13, 3) `not 1.5.toJs.isInteger` "));
}

framePtr = F.prev;
var F = {procname: "module jsutils_examples_5", prev: framePtr, filename: "/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jsutils_examples_5.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jsutils_examples_6", prev: framePtr, filename: "/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jsutils_examples_6.nim", line: 0};
framePtr = F;
if (!(!(Number.isSafeInteger(("123"))))) {
F.line = 77;
F.filename = "jsutils.nim";
failedAssertImpl__stdZassertions_u85(makeNimstrLit("/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jsutils_examples_6.nim(10, 3) `not \"123\".toJs.isSafeInteger` "));
}

if (!(Number.isSafeInteger(123))) {
F.line = 77;
failedAssertImpl__stdZassertions_u85(makeNimstrLit("/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jsutils_examples_6.nim(11, 3) `123.isSafeInteger` "));
}

if (!(Number.isSafeInteger((123)))) {
F.line = 77;
failedAssertImpl__stdZassertions_u85(makeNimstrLit("/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jsutils_examples_6.nim(12, 3) `123.toJs.isSafeInteger` "));
}

framePtr = F.prev;
var F = {procname: "module jsutils_examples_6", prev: framePtr, filename: "/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jsutils_examples_6.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jsutils_group0_examples", prev: framePtr, filename: "/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jsutils_group0_examples.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jsutils_group0_examples", prev: framePtr, filename: "/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jsutils_group0_examples.nim", line: 0};
framePtr = F;
framePtr = F.prev;
