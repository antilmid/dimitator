function $parcel$defineInteropFlag(a) {
  Object.defineProperty(a, '__esModule', {value: true, configurable: true});
}
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$defineInteropFlag(module.exports);

$parcel$export(module.exports, "default", () => $882b6d93070905b3$export$2e2bcd8739ae039);
$parcel$export(module.exports, "RandOptions", () => $e663b8b6554d25cb$export$bd208f1c9c96e0bf);
$parcel$export(module.exports, "rand", () => $e663b8b6554d25cb$export$2e2bcd8739ae039);
function $9e4149c90bef5084$export$2e2bcd8739ae039(fn) {
    function wrappered(...args) {
        if (args.length) return fn.bind({}, ...Array.from(args || []));
        else return fn(...Array.from(args || []));
    }
    return wrappered;
}


class $e663b8b6554d25cb$export$bd208f1c9c96e0bf {
    max = 92;
    min = 0;
    accuracy = 1;
}
function $e663b8b6554d25cb$export$2e2bcd8739ae039({ max: max = 0 , min: min = 0 , accuracy: accuracy = 0  } = new $e663b8b6554d25cb$export$bd208f1c9c96e0bf()) {
    return Number((Math.floor(Math.random() * (max - min) + min / accuracy) * accuracy).toFixed((accuracy || 0).toString().replace(/.*\./g, "").length)) || 0;
}


var $882b6d93070905b3$export$2e2bcd8739ae039 = {
    rand: (0, $9e4149c90bef5084$export$2e2bcd8739ae039)((0, $e663b8b6554d25cb$export$2e2bcd8739ae039))
};


//# sourceMappingURL=main.js.map
