var ft = (() => {
  var Q = typeof document < "u" && document.currentScript ? document.currentScript.src : void 0;
  return typeof __filename < "u" && (Q = Q || __filename), function(Fe = {}) {
    var o = Fe, Pe, ee;
    o.ready = new Promise((e, a) => {
      Pe = e, ee = a;
    }), o.expectedDataFileDownloads || (o.expectedDataFileDownloads = 0), o.expectedDataFileDownloads++, function() {
      if (!(o.ENVIRONMENT_IS_PTHREAD || o.$ww)) {
        var e = function(a) {
          typeof window == "object" ? window.encodeURIComponent(
            window.location.pathname.toString().substring(0, window.location.pathname.toString().lastIndexOf("/")) + "/"
          ) : typeof process > "u" && typeof location < "u" && encodeURIComponent(
            location.pathname.toString().substring(0, location.pathname.toString().lastIndexOf("/")) + "/"
          );
          var t = "piper_phonemize.data", r = "piper_phonemize.data";
          typeof o.locateFilePackage == "function" && !o.locateFile && (o.locateFile = o.locateFilePackage, C(
            "warning: you defined Module.locateFilePackage, that has been renamed to Module.locateFile (using your locateFilePackage for now)"
          ));
          var s = o.locateFile ? o.locateFile(r, "") : r, i = a.remote_package_size;
          function d(h, g, p, _) {
            if (typeof process == "object" && typeof process.versions == "object" && typeof process.versions.node == "string") {
              require("fs").readFile(h, function(b, S) {
                b ? _(b) : p(S.buffer);
              });
              return;
            }
            var E = new XMLHttpRequest();
            E.open("GET", h, !0), E.responseType = "arraybuffer", E.onprogress = function(b) {
              var S = h, f = g;
              if (b.total && (f = b.total), b.loaded) {
                E.addedTotal ? o.dataFileDownloads[S].loaded = b.loaded : (E.addedTotal = !0, o.dataFileDownloads || (o.dataFileDownloads = {}), o.dataFileDownloads[S] = { loaded: b.loaded, total: f });
                var c = 0, z = 0, D = 0;
                for (var x in o.dataFileDownloads) {
                  var R = o.dataFileDownloads[x];
                  c += R.total, z += R.loaded, D++;
                }
                c = Math.ceil(c * o.expectedDataFileDownloads / D), o.setStatus && o.setStatus(`Downloading data... (${z}/${c})`);
              } else o.dataFileDownloads || o.setStatus && o.setStatus("Downloading data...");
            }, E.onerror = function(b) {
              throw new Error("NetworkError for: " + h);
            }, E.onload = function(b) {
              if (E.status == 200 || E.status == 304 || E.status == 206 || E.status == 0 && E.response) {
                var S = E.response;
                p(S);
              } else
                throw new Error(E.statusText + " : " + E.responseURL);
            }, E.send(null);
          }
          function l(h) {
            console.error("package error:", h);
          }
          var m = null, v = o.getPreloadedPackage ? o.getPreloadedPackage(s, i) : null;
          v || d(
            s,
            i,
            function(h) {
              m ? (m(h), m = null) : v = h;
            },
            l
          );
          function y() {
            function h(b, S) {
              if (!b) throw S + new Error().stack;
            }
            o.FS_createPath("/", "espeak-ng-data", !0, !0), o.FS_createPath("/espeak-ng-data", "lang", !0, !0), o.FS_createPath("/espeak-ng-data/lang", "aav", !0, !0), o.FS_createPath("/espeak-ng-data/lang", "art", !0, !0), o.FS_createPath("/espeak-ng-data/lang", "azc", !0, !0), o.FS_createPath("/espeak-ng-data/lang", "bat", !0, !0), o.FS_createPath("/espeak-ng-data/lang", "bnt", !0, !0), o.FS_createPath("/espeak-ng-data/lang", "ccs", !0, !0), o.FS_createPath("/espeak-ng-data/lang", "cel", !0, !0), o.FS_createPath("/espeak-ng-data/lang", "cus", !0, !0), o.FS_createPath("/espeak-ng-data/lang", "dra", !0, !0), o.FS_createPath("/espeak-ng-data/lang", "esx", !0, !0), o.FS_createPath("/espeak-ng-data/lang", "gmq", !0, !0), o.FS_createPath("/espeak-ng-data/lang", "gmw", !0, !0), o.FS_createPath("/espeak-ng-data/lang", "grk", !0, !0), o.FS_createPath("/espeak-ng-data/lang", "inc", !0, !0), o.FS_createPath("/espeak-ng-data/lang", "ine", !0, !0), o.FS_createPath("/espeak-ng-data/lang", "ira", !0, !0), o.FS_createPath("/espeak-ng-data/lang", "iro", !0, !0), o.FS_createPath("/espeak-ng-data/lang", "itc", !0, !0), o.FS_createPath("/espeak-ng-data/lang", "jpx", !0, !0), o.FS_createPath("/espeak-ng-data/lang", "map", !0, !0), o.FS_createPath("/espeak-ng-data/lang", "miz", !0, !0), o.FS_createPath("/espeak-ng-data/lang", "myn", !0, !0), o.FS_createPath("/espeak-ng-data/lang", "poz", !0, !0), o.FS_createPath("/espeak-ng-data/lang", "roa", !0, !0), o.FS_createPath("/espeak-ng-data/lang", "sai", !0, !0), o.FS_createPath("/espeak-ng-data/lang", "sem", !0, !0), o.FS_createPath("/espeak-ng-data/lang", "sit", !0, !0), o.FS_createPath("/espeak-ng-data/lang", "tai", !0, !0), o.FS_createPath("/espeak-ng-data/lang", "trk", !0, !0), o.FS_createPath("/espeak-ng-data/lang", "urj", !0, !0), o.FS_createPath("/espeak-ng-data/lang", "zle", !0, !0), o.FS_createPath("/espeak-ng-data/lang", "zls", !0, !0), o.FS_createPath("/espeak-ng-data/lang", "zlw", !0, !0), o.FS_createPath("/espeak-ng-data", "mbrola_ph", !0, !0), o.FS_createPath("/espeak-ng-data", "voices", !0, !0), o.FS_createPath("/espeak-ng-data/voices", "!v", !0, !0), o.FS_createPath("/espeak-ng-data/voices", "mb", !0, !0);
            function g(b, S, f) {
              this.start = b, this.end = S, this.audio = f;
            }
            g.prototype = {
              requests: {},
              open: function(b, S) {
                this.name = S, this.requests[S] = this, o.addRunDependency(`fp ${this.name}`);
              },
              send: function() {
              },
              onload: function() {
                var b = this.byteArray.subarray(this.start, this.end);
                this.finish(b);
              },
              finish: function(b) {
                var S = this;
                o.FS_createDataFile(this.name, null, b, !0, !0, !0), o.removeRunDependency(`fp ${S.name}`), this.requests[this.name] = null;
              }
            };
            for (var p = a.files, _ = 0; _ < p.length; ++_)
              new g(p[_].start, p[_].end, p[_].audio || 0).open(
                "GET",
                p[_].filename
              );
            function E(b) {
              h(b, "Loading data file failed."), h(
                b.constructor.name === ArrayBuffer.name,
                "bad input to processPackageData"
              );
              var S = new Uint8Array(b);
              g.prototype.byteArray = S;
              for (var f = a.files, c = 0; c < f.length; ++c)
                g.prototype.requests[f[c].filename].onload();
              o.removeRunDependency("datafile_piper_phonemize.data");
            }
            o.addRunDependency("datafile_piper_phonemize.data"), o.preloadResults || (o.preloadResults = {}), o.preloadResults[t] = { fromCache: !1 }, v ? (E(v), v = null) : m = E;
          }
          o.calledRun ? y() : (o.preRun || (o.preRun = []), o.preRun.push(y));
        };
        e({
          files: [{ filename: "/espeak-ng-data/en_dict", start: 0, end: 166944 }, { filename: "/espeak-ng-data/intonations", start: 166944, end: 168984 }, { filename: "/espeak-ng-data/lang/aav/vi", start: 168984, end: 169095 }, { filename: "/espeak-ng-data/lang/aav/vi-VN-x-central", start: 169095, end: 169238 }, { filename: "/espeak-ng-data/lang/aav/vi-VN-x-south", start: 169238, end: 169380 }, { filename: "/espeak-ng-data/lang/art/eo", start: 169380, end: 169421 }, { filename: "/espeak-ng-data/lang/art/ia", start: 169421, end: 169450 }, { filename: "/espeak-ng-data/lang/art/io", start: 169450, end: 169500 }, { filename: "/espeak-ng-data/lang/art/jbo", start: 169500, end: 169569 }, { filename: "/espeak-ng-data/lang/art/lfn", start: 169569, end: 169704 }, { filename: "/espeak-ng-data/lang/art/piqd", start: 169704, end: 169760 }, { filename: "/espeak-ng-data/lang/art/py", start: 169760, end: 169900 }, { filename: "/espeak-ng-data/lang/art/qdb", start: 169900, end: 169957 }, { filename: "/espeak-ng-data/lang/art/qya", start: 169957, end: 170130 }, { filename: "/espeak-ng-data/lang/art/sjn", start: 170130, end: 170305 }, { filename: "/espeak-ng-data/lang/azc/nci", start: 170305, end: 170419 }, { filename: "/espeak-ng-data/lang/bat/lt", start: 170419, end: 170447 }, { filename: "/espeak-ng-data/lang/bat/ltg", start: 170447, end: 170759 }, { filename: "/espeak-ng-data/lang/bat/lv", start: 170759, end: 170988 }, { filename: "/espeak-ng-data/lang/bnt/sw", start: 170988, end: 171029 }, { filename: "/espeak-ng-data/lang/bnt/tn", start: 171029, end: 171071 }, { filename: "/espeak-ng-data/lang/ccs/ka", start: 171071, end: 171195 }, { filename: "/espeak-ng-data/lang/cel/cy", start: 171195, end: 171232 }, { filename: "/espeak-ng-data/lang/cel/ga", start: 171232, end: 171298 }, { filename: "/espeak-ng-data/lang/cel/gd", start: 171298, end: 171349 }, { filename: "/espeak-ng-data/lang/cus/om", start: 171349, end: 171388 }, { filename: "/espeak-ng-data/lang/dra/kn", start: 171388, end: 171443 }, { filename: "/espeak-ng-data/lang/dra/ml", start: 171443, end: 171500 }, { filename: "/espeak-ng-data/lang/dra/ta", start: 171500, end: 171551 }, { filename: "/espeak-ng-data/lang/dra/te", start: 171551, end: 171621 }, { filename: "/espeak-ng-data/lang/esx/kl", start: 171621, end: 171651 }, { filename: "/espeak-ng-data/lang/eu", start: 171651, end: 171705 }, { filename: "/espeak-ng-data/lang/gmq/da", start: 171705, end: 171748 }, { filename: "/espeak-ng-data/lang/gmq/is", start: 171748, end: 171775 }, { filename: "/espeak-ng-data/lang/gmq/nb", start: 171775, end: 171862 }, { filename: "/espeak-ng-data/lang/gmq/sv", start: 171862, end: 171887 }, { filename: "/espeak-ng-data/lang/gmw/af", start: 171887, end: 172010 }, { filename: "/espeak-ng-data/lang/gmw/de", start: 172010, end: 172052 }, { filename: "/espeak-ng-data/lang/gmw/en", start: 172052, end: 172192 }, { filename: "/espeak-ng-data/lang/gmw/en-029", start: 172192, end: 172527 }, { filename: "/espeak-ng-data/lang/gmw/en-GB-scotland", start: 172527, end: 172822 }, { filename: "/espeak-ng-data/lang/gmw/en-GB-x-gbclan", start: 172822, end: 173060 }, { filename: "/espeak-ng-data/lang/gmw/en-GB-x-gbcwmd", start: 173060, end: 173248 }, { filename: "/espeak-ng-data/lang/gmw/en-GB-x-rp", start: 173248, end: 173497 }, { filename: "/espeak-ng-data/lang/gmw/en-US", start: 173497, end: 173754 }, { filename: "/espeak-ng-data/lang/gmw/en-US-nyc", start: 173754, end: 174025 }, { filename: "/espeak-ng-data/lang/gmw/lb", start: 174025, end: 174056 }, { filename: "/espeak-ng-data/lang/gmw/nl", start: 174056, end: 174079 }, { filename: "/espeak-ng-data/lang/grk/el", start: 174079, end: 174102 }, { filename: "/espeak-ng-data/lang/grk/grc", start: 174102, end: 174201 }, { filename: "/espeak-ng-data/lang/inc/as", start: 174201, end: 174243 }, { filename: "/espeak-ng-data/lang/inc/bn", start: 174243, end: 174268 }, { filename: "/espeak-ng-data/lang/inc/bpy", start: 174268, end: 174307 }, { filename: "/espeak-ng-data/lang/inc/gu", start: 174307, end: 174349 }, { filename: "/espeak-ng-data/lang/inc/hi", start: 174349, end: 174372 }, { filename: "/espeak-ng-data/lang/inc/kok", start: 174372, end: 174398 }, { filename: "/espeak-ng-data/lang/inc/mr", start: 174398, end: 174439 }, { filename: "/espeak-ng-data/lang/inc/ne", start: 174439, end: 174476 }, { filename: "/espeak-ng-data/lang/inc/or", start: 174476, end: 174515 }, { filename: "/espeak-ng-data/lang/inc/pa", start: 174515, end: 174540 }, { filename: "/espeak-ng-data/lang/inc/sd", start: 174540, end: 174606 }, { filename: "/espeak-ng-data/lang/inc/si", start: 174606, end: 174661 }, { filename: "/espeak-ng-data/lang/inc/ur", start: 174661, end: 174755 }, { filename: "/espeak-ng-data/lang/ine/hy", start: 174755, end: 174816 }, { filename: "/espeak-ng-data/lang/ine/hyw", start: 174816, end: 175181 }, { filename: "/espeak-ng-data/lang/ine/sq", start: 175181, end: 175284 }, { filename: "/espeak-ng-data/lang/ira/fa", start: 175284, end: 175374 }, { filename: "/espeak-ng-data/lang/ira/fa-Latn", start: 175374, end: 175643 }, { filename: "/espeak-ng-data/lang/ira/ku", start: 175643, end: 175683 }, { filename: "/espeak-ng-data/lang/iro/chr", start: 175683, end: 176252 }, { filename: "/espeak-ng-data/lang/itc/la", start: 176252, end: 176549 }, { filename: "/espeak-ng-data/lang/jpx/ja", start: 176549, end: 176601 }, { filename: "/espeak-ng-data/lang/ko", start: 176601, end: 176652 }, { filename: "/espeak-ng-data/lang/map/haw", start: 176652, end: 176694 }, { filename: "/espeak-ng-data/lang/miz/mto", start: 176694, end: 176877 }, { filename: "/espeak-ng-data/lang/myn/quc", start: 176877, end: 177087 }, { filename: "/espeak-ng-data/lang/poz/id", start: 177087, end: 177221 }, { filename: "/espeak-ng-data/lang/poz/mi", start: 177221, end: 177588 }, { filename: "/espeak-ng-data/lang/poz/ms", start: 177588, end: 178018 }, { filename: "/espeak-ng-data/lang/qu", start: 178018, end: 178106 }, { filename: "/espeak-ng-data/lang/roa/an", start: 178106, end: 178133 }, { filename: "/espeak-ng-data/lang/roa/ca", start: 178133, end: 178158 }, { filename: "/espeak-ng-data/lang/roa/es", start: 178158, end: 178221 }, { filename: "/espeak-ng-data/lang/roa/es-419", start: 178221, end: 178388 }, { filename: "/espeak-ng-data/lang/roa/fr", start: 178388, end: 178467 }, { filename: "/espeak-ng-data/lang/roa/fr-BE", start: 178467, end: 178551 }, { filename: "/espeak-ng-data/lang/roa/fr-CH", start: 178551, end: 178637 }, { filename: "/espeak-ng-data/lang/roa/ht", start: 178637, end: 178777 }, { filename: "/espeak-ng-data/lang/roa/it", start: 178777, end: 178886 }, { filename: "/espeak-ng-data/lang/roa/pap", start: 178886, end: 178948 }, { filename: "/espeak-ng-data/lang/roa/pt", start: 178948, end: 179043 }, { filename: "/espeak-ng-data/lang/roa/pt-BR", start: 179043, end: 179152 }, { filename: "/espeak-ng-data/lang/roa/ro", start: 179152, end: 179178 }, { filename: "/espeak-ng-data/lang/sai/gn", start: 179178, end: 179225 }, { filename: "/espeak-ng-data/lang/sem/am", start: 179225, end: 179266 }, { filename: "/espeak-ng-data/lang/sem/ar", start: 179266, end: 179316 }, { filename: "/espeak-ng-data/lang/sem/he", start: 179316, end: 179356 }, { filename: "/espeak-ng-data/lang/sem/mt", start: 179356, end: 179397 }, { filename: "/espeak-ng-data/lang/sit/cmn", start: 179397, end: 180083 }, { filename: "/espeak-ng-data/lang/sit/cmn-Latn-pinyin", start: 180083, end: 180244 }, { filename: "/espeak-ng-data/lang/sit/hak", start: 180244, end: 180372 }, { filename: "/espeak-ng-data/lang/sit/my", start: 180372, end: 180428 }, { filename: "/espeak-ng-data/lang/sit/yue", start: 180428, end: 180622 }, { filename: "/espeak-ng-data/lang/sit/yue-Latn-jyutping", start: 180622, end: 180835 }, { filename: "/espeak-ng-data/lang/tai/shn", start: 180835, end: 180927 }, { filename: "/espeak-ng-data/lang/tai/th", start: 180927, end: 180964 }, { filename: "/espeak-ng-data/lang/trk/az", start: 180964, end: 181009 }, { filename: "/espeak-ng-data/lang/trk/ba", start: 181009, end: 181034 }, { filename: "/espeak-ng-data/lang/trk/cv", start: 181034, end: 181074 }, { filename: "/espeak-ng-data/lang/trk/kk", start: 181074, end: 181114 }, { filename: "/espeak-ng-data/lang/trk/ky", start: 181114, end: 181157 }, { filename: "/espeak-ng-data/lang/trk/nog", start: 181157, end: 181196 }, { filename: "/espeak-ng-data/lang/trk/tk", start: 181196, end: 181221 }, { filename: "/espeak-ng-data/lang/trk/tr", start: 181221, end: 181246 }, { filename: "/espeak-ng-data/lang/trk/tt", start: 181246, end: 181269 }, { filename: "/espeak-ng-data/lang/trk/ug", start: 181269, end: 181293 }, { filename: "/espeak-ng-data/lang/trk/uz", start: 181293, end: 181332 }, { filename: "/espeak-ng-data/lang/urj/et", start: 181332, end: 181569 }, { filename: "/espeak-ng-data/lang/urj/fi", start: 181569, end: 181806 }, { filename: "/espeak-ng-data/lang/urj/hu", start: 181806, end: 181879 }, { filename: "/espeak-ng-data/lang/urj/smj", start: 181879, end: 181924 }, { filename: "/espeak-ng-data/lang/zle/be", start: 181924, end: 181976 }, { filename: "/espeak-ng-data/lang/zle/ru", start: 181976, end: 182033 }, { filename: "/espeak-ng-data/lang/zle/ru-LV", start: 182033, end: 182313 }, { filename: "/espeak-ng-data/lang/zle/ru-cl", start: 182313, end: 182404 }, { filename: "/espeak-ng-data/lang/zle/uk", start: 182404, end: 182501 }, { filename: "/espeak-ng-data/lang/zls/bg", start: 182501, end: 182612 }, { filename: "/espeak-ng-data/lang/zls/bs", start: 182612, end: 182842 }, { filename: "/espeak-ng-data/lang/zls/hr", start: 182842, end: 183104 }, { filename: "/espeak-ng-data/lang/zls/mk", start: 183104, end: 183132 }, { filename: "/espeak-ng-data/lang/zls/sl", start: 183132, end: 183175 }, { filename: "/espeak-ng-data/lang/zls/sr", start: 183175, end: 183425 }, { filename: "/espeak-ng-data/lang/zlw/cs", start: 183425, end: 183448 }, { filename: "/espeak-ng-data/lang/zlw/pl", start: 183448, end: 183486 }, { filename: "/espeak-ng-data/lang/zlw/sk", start: 183486, end: 183510 }, { filename: "/espeak-ng-data/mbrola_ph/af1_phtrans", start: 183510, end: 185146 }, { filename: "/espeak-ng-data/mbrola_ph/ar1_phtrans", start: 185146, end: 186758 }, { filename: "/espeak-ng-data/mbrola_ph/ar2_phtrans", start: 186758, end: 188370 }, { filename: "/espeak-ng-data/mbrola_ph/ca_phtrans", start: 188370, end: 190366 }, { filename: "/espeak-ng-data/mbrola_ph/cmn_phtrans", start: 190366, end: 191858 }, { filename: "/espeak-ng-data/mbrola_ph/cr1_phtrans", start: 191858, end: 194022 }, { filename: "/espeak-ng-data/mbrola_ph/cs_phtrans", start: 194022, end: 194602 }, { filename: "/espeak-ng-data/mbrola_ph/de2_phtrans", start: 194602, end: 196334 }, { filename: "/espeak-ng-data/mbrola_ph/de4_phtrans", start: 196334, end: 198138 }, { filename: "/espeak-ng-data/mbrola_ph/de6_phtrans", start: 198138, end: 199534 }, { filename: "/espeak-ng-data/mbrola_ph/de8_phtrans", start: 199534, end: 200690 }, { filename: "/espeak-ng-data/mbrola_ph/ee1_phtrans", start: 200690, end: 202134 }, { filename: "/espeak-ng-data/mbrola_ph/en1_phtrans", start: 202134, end: 202930 }, { filename: "/espeak-ng-data/mbrola_ph/es3_phtrans", start: 202930, end: 203990 }, { filename: "/espeak-ng-data/mbrola_ph/es4_phtrans", start: 203990, end: 205098 }, { filename: "/espeak-ng-data/mbrola_ph/es_phtrans", start: 205098, end: 206830 }, { filename: "/espeak-ng-data/mbrola_ph/fr_phtrans", start: 206830, end: 208802 }, { filename: "/espeak-ng-data/mbrola_ph/gr1_phtrans", start: 208802, end: 211014 }, { filename: "/espeak-ng-data/mbrola_ph/gr2_phtrans", start: 211014, end: 213226 }, { filename: "/espeak-ng-data/mbrola_ph/grc-de6_phtrans", start: 213226, end: 213710 }, { filename: "/espeak-ng-data/mbrola_ph/he_phtrans", start: 213710, end: 214458 }, { filename: "/espeak-ng-data/mbrola_ph/hn1_phtrans", start: 214458, end: 214990 }, { filename: "/espeak-ng-data/mbrola_ph/hu1_phtrans", start: 214990, end: 216434 }, { filename: "/espeak-ng-data/mbrola_ph/ic1_phtrans", start: 216434, end: 217566 }, { filename: "/espeak-ng-data/mbrola_ph/id1_phtrans", start: 217566, end: 219274 }, { filename: "/espeak-ng-data/mbrola_ph/in_phtrans", start: 219274, end: 220718 }, { filename: "/espeak-ng-data/mbrola_ph/ir1_phtrans", start: 220718, end: 226530 }, { filename: "/espeak-ng-data/mbrola_ph/it1_phtrans", start: 226530, end: 227854 }, { filename: "/espeak-ng-data/mbrola_ph/it3_phtrans", start: 227854, end: 228746 }, { filename: "/espeak-ng-data/mbrola_ph/jp_phtrans", start: 228746, end: 229782 }, { filename: "/espeak-ng-data/mbrola_ph/la1_phtrans", start: 229782, end: 230530 }, { filename: "/espeak-ng-data/mbrola_ph/lt_phtrans", start: 230530, end: 231590 }, { filename: "/espeak-ng-data/mbrola_ph/ma1_phtrans", start: 231590, end: 232530 }, { filename: "/espeak-ng-data/mbrola_ph/mx1_phtrans", start: 232530, end: 234334 }, { filename: "/espeak-ng-data/mbrola_ph/mx2_phtrans", start: 234334, end: 236162 }, { filename: "/espeak-ng-data/mbrola_ph/nl_phtrans", start: 236162, end: 237846 }, { filename: "/espeak-ng-data/mbrola_ph/nz1_phtrans", start: 237846, end: 238570 }, { filename: "/espeak-ng-data/mbrola_ph/pl1_phtrans", start: 238570, end: 240158 }, { filename: "/espeak-ng-data/mbrola_ph/pt1_phtrans", start: 240158, end: 242250 }, { filename: "/espeak-ng-data/mbrola_ph/ptbr4_phtrans", start: 242250, end: 244606 }, { filename: "/espeak-ng-data/mbrola_ph/ptbr_phtrans", start: 244606, end: 247130 }, { filename: "/espeak-ng-data/mbrola_ph/ro1_phtrans", start: 247130, end: 249294 }, { filename: "/espeak-ng-data/mbrola_ph/sv2_phtrans", start: 249294, end: 250882 }, { filename: "/espeak-ng-data/mbrola_ph/sv_phtrans", start: 250882, end: 252470 }, { filename: "/espeak-ng-data/mbrola_ph/tl1_phtrans", start: 252470, end: 253242 }, { filename: "/espeak-ng-data/mbrola_ph/tr1_phtrans", start: 253242, end: 253606 }, { filename: "/espeak-ng-data/mbrola_ph/us3_phtrans", start: 253606, end: 254762 }, { filename: "/espeak-ng-data/mbrola_ph/us_phtrans", start: 254762, end: 255990 }, { filename: "/espeak-ng-data/mbrola_ph/vz_phtrans", start: 255990, end: 258274 }, { filename: "/espeak-ng-data/phondata", start: 258274, end: 808698 }, { filename: "/espeak-ng-data/phondata-manifest", start: 808698, end: 830519 }, { filename: "/espeak-ng-data/phonindex", start: 830519, end: 869593 }, { filename: "/espeak-ng-data/phontab", start: 869593, end: 925389 }, { filename: "/espeak-ng-data/voices/!v/Alex", start: 925389, end: 925517 }, { filename: "/espeak-ng-data/voices/!v/Alicia", start: 925517, end: 925991 }, { filename: "/espeak-ng-data/voices/!v/Andrea", start: 925991, end: 926348 }, { filename: "/espeak-ng-data/voices/!v/Andy", start: 926348, end: 926668 }, { filename: "/espeak-ng-data/voices/!v/Annie", start: 926668, end: 926983 }, { filename: "/espeak-ng-data/voices/!v/AnxiousAndy", start: 926983, end: 927344 }, { filename: "/espeak-ng-data/voices/!v/Demonic", start: 927344, end: 931202 }, { filename: "/espeak-ng-data/voices/!v/Denis", start: 931202, end: 931507 }, { filename: "/espeak-ng-data/voices/!v/Diogo", start: 931507, end: 931886 }, { filename: "/espeak-ng-data/voices/!v/Gene", start: 931886, end: 932167 }, { filename: "/espeak-ng-data/voices/!v/Gene2", start: 932167, end: 932450 }, { filename: "/espeak-ng-data/voices/!v/Henrique", start: 932450, end: 932831 }, { filename: "/espeak-ng-data/voices/!v/Hugo", start: 932831, end: 933209 }, { filename: "/espeak-ng-data/voices/!v/Jacky", start: 933209, end: 933476 }, { filename: "/espeak-ng-data/voices/!v/Lee", start: 933476, end: 933814 }, { filename: "/espeak-ng-data/voices/!v/Marco", start: 933814, end: 934281 }, { filename: "/espeak-ng-data/voices/!v/Mario", start: 934281, end: 934551 }, { filename: "/espeak-ng-data/voices/!v/Michael", start: 934551, end: 934821 }, { filename: "/espeak-ng-data/voices/!v/Mike", start: 934821, end: 934933 }, { filename: "/espeak-ng-data/voices/!v/Mr serious", start: 934933, end: 938126 }, { filename: "/espeak-ng-data/voices/!v/Nguyen", start: 938126, end: 938406 }, { filename: "/espeak-ng-data/voices/!v/Reed", start: 938406, end: 938608 }, { filename: "/espeak-ng-data/voices/!v/RicishayMax", start: 938608, end: 938841 }, { filename: "/espeak-ng-data/voices/!v/RicishayMax2", start: 938841, end: 939276 }, { filename: "/espeak-ng-data/voices/!v/RicishayMax3", start: 939276, end: 939711 }, { filename: "/espeak-ng-data/voices/!v/Storm", start: 939711, end: 940131 }, { filename: "/espeak-ng-data/voices/!v/Tweaky", start: 940131, end: 943320 }, { filename: "/espeak-ng-data/voices/!v/UniRobot", start: 943320, end: 943737 }, { filename: "/espeak-ng-data/voices/!v/adam", start: 943737, end: 943812 }, { filename: "/espeak-ng-data/voices/!v/anika", start: 943812, end: 944305 }, { filename: "/espeak-ng-data/voices/!v/anikaRobot", start: 944305, end: 944817 }, { filename: "/espeak-ng-data/voices/!v/announcer", start: 944817, end: 945117 }, { filename: "/espeak-ng-data/voices/!v/antonio", start: 945117, end: 945498 }, { filename: "/espeak-ng-data/voices/!v/aunty", start: 945498, end: 945856 }, { filename: "/espeak-ng-data/voices/!v/belinda", start: 945856, end: 946196 }, { filename: "/espeak-ng-data/voices/!v/benjamin", start: 946196, end: 946397 }, { filename: "/espeak-ng-data/voices/!v/boris", start: 946397, end: 946621 }, { filename: "/espeak-ng-data/voices/!v/caleb", start: 946621, end: 946678 }, { filename: "/espeak-ng-data/voices/!v/croak", start: 946678, end: 946771 }, { filename: "/espeak-ng-data/voices/!v/david", start: 946771, end: 946883 }, { filename: "/espeak-ng-data/voices/!v/ed", start: 946883, end: 947170 }, { filename: "/espeak-ng-data/voices/!v/edward", start: 947170, end: 947321 }, { filename: "/espeak-ng-data/voices/!v/edward2", start: 947321, end: 947473 }, { filename: "/espeak-ng-data/voices/!v/f1", start: 947473, end: 947797 }, { filename: "/espeak-ng-data/voices/!v/f2", start: 947797, end: 948154 }, { filename: "/espeak-ng-data/voices/!v/f3", start: 948154, end: 948529 }, { filename: "/espeak-ng-data/voices/!v/f4", start: 948529, end: 948879 }, { filename: "/espeak-ng-data/voices/!v/f5", start: 948879, end: 949311 }, { filename: "/espeak-ng-data/voices/!v/fast", start: 949311, end: 949460 }, { filename: "/espeak-ng-data/voices/!v/grandma", start: 949460, end: 949723 }, { filename: "/espeak-ng-data/voices/!v/grandpa", start: 949723, end: 949979 }, { filename: "/espeak-ng-data/voices/!v/gustave", start: 949979, end: 950232 }, { filename: "/espeak-ng-data/voices/!v/ian", start: 950232, end: 953400 }, { filename: "/espeak-ng-data/voices/!v/iven", start: 953400, end: 953661 }, { filename: "/espeak-ng-data/voices/!v/iven2", start: 953661, end: 953940 }, { filename: "/espeak-ng-data/voices/!v/iven3", start: 953940, end: 954202 }, { filename: "/espeak-ng-data/voices/!v/iven4", start: 954202, end: 954463 }, { filename: "/espeak-ng-data/voices/!v/john", start: 954463, end: 957649 }, { filename: "/espeak-ng-data/voices/!v/kaukovalta", start: 957649, end: 958010 }, { filename: "/espeak-ng-data/voices/!v/klatt", start: 958010, end: 958048 }, { filename: "/espeak-ng-data/voices/!v/klatt2", start: 958048, end: 958086 }, { filename: "/espeak-ng-data/voices/!v/klatt3", start: 958086, end: 958125 }, { filename: "/espeak-ng-data/voices/!v/klatt4", start: 958125, end: 958164 }, { filename: "/espeak-ng-data/voices/!v/klatt5", start: 958164, end: 958203 }, { filename: "/espeak-ng-data/voices/!v/klatt6", start: 958203, end: 958242 }, { filename: "/espeak-ng-data/voices/!v/linda", start: 958242, end: 958592 }, { filename: "/espeak-ng-data/voices/!v/m1", start: 958592, end: 958927 }, { filename: "/espeak-ng-data/voices/!v/m2", start: 958927, end: 959191 }, { filename: "/espeak-ng-data/voices/!v/m3", start: 959191, end: 959491 }, { filename: "/espeak-ng-data/voices/!v/m4", start: 959491, end: 959781 }, { filename: "/espeak-ng-data/voices/!v/m5", start: 959781, end: 960043 }, { filename: "/espeak-ng-data/voices/!v/m6", start: 960043, end: 960231 }, { filename: "/espeak-ng-data/voices/!v/m7", start: 960231, end: 960485 }, { filename: "/espeak-ng-data/voices/!v/m8", start: 960485, end: 960769 }, { filename: "/espeak-ng-data/voices/!v/marcelo", start: 960769, end: 961020 }, { filename: "/espeak-ng-data/voices/!v/max", start: 961020, end: 961245 }, { filename: "/espeak-ng-data/voices/!v/michel", start: 961245, end: 961649 }, { filename: "/espeak-ng-data/voices/!v/miguel", start: 961649, end: 962031 }, { filename: "/espeak-ng-data/voices/!v/mike2", start: 962031, end: 962219 }, { filename: "/espeak-ng-data/voices/!v/norbert", start: 962219, end: 965408 }, { filename: "/espeak-ng-data/voices/!v/pablo", start: 965408, end: 968550 }, { filename: "/espeak-ng-data/voices/!v/paul", start: 968550, end: 968834 }, { filename: "/espeak-ng-data/voices/!v/pedro", start: 968834, end: 969186 }, { filename: "/espeak-ng-data/voices/!v/quincy", start: 969186, end: 969540 }, { filename: "/espeak-ng-data/voices/!v/rob", start: 969540, end: 969805 }, { filename: "/espeak-ng-data/voices/!v/robert", start: 969805, end: 970079 }, { filename: "/espeak-ng-data/voices/!v/robosoft", start: 970079, end: 970530 }, { filename: "/espeak-ng-data/voices/!v/robosoft2", start: 970530, end: 970984 }, { filename: "/espeak-ng-data/voices/!v/robosoft3", start: 970984, end: 971439 }, { filename: "/espeak-ng-data/voices/!v/robosoft4", start: 971439, end: 971886 }, { filename: "/espeak-ng-data/voices/!v/robosoft5", start: 971886, end: 972331 }, { filename: "/espeak-ng-data/voices/!v/robosoft6", start: 972331, end: 972618 }, { filename: "/espeak-ng-data/voices/!v/robosoft7", start: 972618, end: 973028 }, { filename: "/espeak-ng-data/voices/!v/robosoft8", start: 973028, end: 973271 }, { filename: "/espeak-ng-data/voices/!v/sandro", start: 973271, end: 973801 }, { filename: "/espeak-ng-data/voices/!v/shelby", start: 973801, end: 974081 }, { filename: "/espeak-ng-data/voices/!v/steph", start: 974081, end: 974445 }, { filename: "/espeak-ng-data/voices/!v/steph2", start: 974445, end: 974812 }, { filename: "/espeak-ng-data/voices/!v/steph3", start: 974812, end: 975189 }, { filename: "/espeak-ng-data/voices/!v/travis", start: 975189, end: 975572 }, { filename: "/espeak-ng-data/voices/!v/victor", start: 975572, end: 975825 }, { filename: "/espeak-ng-data/voices/!v/whisper", start: 975825, end: 976011 }, { filename: "/espeak-ng-data/voices/!v/whisperf", start: 976011, end: 976403 }, { filename: "/espeak-ng-data/voices/!v/zac", start: 976403, end: 976678 }, { filename: "/espeak-ng-data/voices/mb/mb-af1", start: 976678, end: 976766 }, { filename: "/espeak-ng-data/voices/mb/mb-af1-en", start: 976766, end: 976849 }, { filename: "/espeak-ng-data/voices/mb/mb-ar1", start: 976849, end: 976933 }, { filename: "/espeak-ng-data/voices/mb/mb-ar2", start: 976933, end: 977017 }, { filename: "/espeak-ng-data/voices/mb/mb-br1", start: 977017, end: 977149 }, { filename: "/espeak-ng-data/voices/mb/mb-br2", start: 977149, end: 977285 }, { filename: "/espeak-ng-data/voices/mb/mb-br3", start: 977285, end: 977417 }, { filename: "/espeak-ng-data/voices/mb/mb-br4", start: 977417, end: 977553 }, { filename: "/espeak-ng-data/voices/mb/mb-ca1", start: 977553, end: 977658 }, { filename: "/espeak-ng-data/voices/mb/mb-ca2", start: 977658, end: 977763 }, { filename: "/espeak-ng-data/voices/mb/mb-cn1", start: 977763, end: 977855 }, { filename: "/espeak-ng-data/voices/mb/mb-cr1", start: 977855, end: 977966 }, { filename: "/espeak-ng-data/voices/mb/mb-cz1", start: 977966, end: 978036 }, { filename: "/espeak-ng-data/voices/mb/mb-cz2", start: 978036, end: 978118 }, { filename: "/espeak-ng-data/voices/mb/mb-de1", start: 978118, end: 978262 }, { filename: "/espeak-ng-data/voices/mb/mb-de1-en", start: 978262, end: 978358 }, { filename: "/espeak-ng-data/voices/mb/mb-de2", start: 978358, end: 978486 }, { filename: "/espeak-ng-data/voices/mb/mb-de2-en", start: 978486, end: 978566 }, { filename: "/espeak-ng-data/voices/mb/mb-de3", start: 978566, end: 978665 }, { filename: "/espeak-ng-data/voices/mb/mb-de3-en", start: 978665, end: 978761 }, { filename: "/espeak-ng-data/voices/mb/mb-de4", start: 978761, end: 978890 }, { filename: "/espeak-ng-data/voices/mb/mb-de4-en", start: 978890, end: 978971 }, { filename: "/espeak-ng-data/voices/mb/mb-de5", start: 978971, end: 979207 }, { filename: "/espeak-ng-data/voices/mb/mb-de5-en", start: 979207, end: 979297 }, { filename: "/espeak-ng-data/voices/mb/mb-de6", start: 979297, end: 979419 }, { filename: "/espeak-ng-data/voices/mb/mb-de6-en", start: 979419, end: 979493 }, { filename: "/espeak-ng-data/voices/mb/mb-de6-grc", start: 979493, end: 979576 }, { filename: "/espeak-ng-data/voices/mb/mb-de7", start: 979576, end: 979726 }, { filename: "/espeak-ng-data/voices/mb/mb-de8", start: 979726, end: 979797 }, { filename: "/espeak-ng-data/voices/mb/mb-ee1", start: 979797, end: 979894 }, { filename: "/espeak-ng-data/voices/mb/mb-en1", start: 979894, end: 980025 }, { filename: "/espeak-ng-data/voices/mb/mb-es1", start: 980025, end: 980139 }, { filename: "/espeak-ng-data/voices/mb/mb-es2", start: 980139, end: 980247 }, { filename: "/espeak-ng-data/voices/mb/mb-es3", start: 980247, end: 980351 }, { filename: "/espeak-ng-data/voices/mb/mb-es4", start: 980351, end: 980439 }, { filename: "/espeak-ng-data/voices/mb/mb-fr1", start: 980439, end: 980605 }, { filename: "/espeak-ng-data/voices/mb/mb-fr1-en", start: 980605, end: 980709 }, { filename: "/espeak-ng-data/voices/mb/mb-fr2", start: 980709, end: 980812 }, { filename: "/espeak-ng-data/voices/mb/mb-fr3", start: 980812, end: 980912 }, { filename: "/espeak-ng-data/voices/mb/mb-fr4", start: 980912, end: 981039 }, { filename: "/espeak-ng-data/voices/mb/mb-fr4-en", start: 981039, end: 981146 }, { filename: "/espeak-ng-data/voices/mb/mb-fr5", start: 981146, end: 981246 }, { filename: "/espeak-ng-data/voices/mb/mb-fr6", start: 981246, end: 981346 }, { filename: "/espeak-ng-data/voices/mb/mb-fr7", start: 981346, end: 981429 }, { filename: "/espeak-ng-data/voices/mb/mb-gr1", start: 981429, end: 981523 }, { filename: "/espeak-ng-data/voices/mb/mb-gr2", start: 981523, end: 981617 }, { filename: "/espeak-ng-data/voices/mb/mb-gr2-en", start: 981617, end: 981705 }, { filename: "/espeak-ng-data/voices/mb/mb-hb1", start: 981705, end: 981773 }, { filename: "/espeak-ng-data/voices/mb/mb-hb2", start: 981773, end: 981856 }, { filename: "/espeak-ng-data/voices/mb/mb-hu1", start: 981856, end: 981958 }, { filename: "/espeak-ng-data/voices/mb/mb-hu1-en", start: 981958, end: 982055 }, { filename: "/espeak-ng-data/voices/mb/mb-ic1", start: 982055, end: 982143 }, { filename: "/espeak-ng-data/voices/mb/mb-id1", start: 982143, end: 982244 }, { filename: "/espeak-ng-data/voices/mb/mb-in1", start: 982244, end: 982313 }, { filename: "/espeak-ng-data/voices/mb/mb-in2", start: 982313, end: 982398 }, { filename: "/espeak-ng-data/voices/mb/mb-ir1", start: 982398, end: 983151 }, { filename: "/espeak-ng-data/voices/mb/mb-it1", start: 983151, end: 983235 }, { filename: "/espeak-ng-data/voices/mb/mb-it2", start: 983235, end: 983322 }, { filename: "/espeak-ng-data/voices/mb/mb-it3", start: 983322, end: 983464 }, { filename: "/espeak-ng-data/voices/mb/mb-it4", start: 983464, end: 983609 }, { filename: "/espeak-ng-data/voices/mb/mb-jp1", start: 983609, end: 983680 }, { filename: "/espeak-ng-data/voices/mb/mb-jp2", start: 983680, end: 983781 }, { filename: "/espeak-ng-data/voices/mb/mb-jp3", start: 983781, end: 983868 }, { filename: "/espeak-ng-data/voices/mb/mb-la1", start: 983868, end: 983951 }, { filename: "/espeak-ng-data/voices/mb/mb-lt1", start: 983951, end: 984038 }, { filename: "/espeak-ng-data/voices/mb/mb-lt2", start: 984038, end: 984125 }, { filename: "/espeak-ng-data/voices/mb/mb-ma1", start: 984125, end: 984223 }, { filename: "/espeak-ng-data/voices/mb/mb-mx1", start: 984223, end: 984343 }, { filename: "/espeak-ng-data/voices/mb/mb-mx2", start: 984343, end: 984463 }, { filename: "/espeak-ng-data/voices/mb/mb-nl1", start: 984463, end: 984532 }, { filename: "/espeak-ng-data/voices/mb/mb-nl2", start: 984532, end: 984628 }, { filename: "/espeak-ng-data/voices/mb/mb-nl2-en", start: 984628, end: 984719 }, { filename: "/espeak-ng-data/voices/mb/mb-nl3", start: 984719, end: 984804 }, { filename: "/espeak-ng-data/voices/mb/mb-nz1", start: 984804, end: 984872 }, { filename: "/espeak-ng-data/voices/mb/mb-pl1", start: 984872, end: 984971 }, { filename: "/espeak-ng-data/voices/mb/mb-pl1-en", start: 984971, end: 985053 }, { filename: "/espeak-ng-data/voices/mb/mb-pt1", start: 985053, end: 985184 }, { filename: "/espeak-ng-data/voices/mb/mb-ro1", start: 985184, end: 985271 }, { filename: "/espeak-ng-data/voices/mb/mb-ro1-en", start: 985271, end: 985352 }, { filename: "/espeak-ng-data/voices/mb/mb-sw1", start: 985352, end: 985450 }, { filename: "/espeak-ng-data/voices/mb/mb-sw1-en", start: 985450, end: 985543 }, { filename: "/espeak-ng-data/voices/mb/mb-sw2", start: 985543, end: 985645 }, { filename: "/espeak-ng-data/voices/mb/mb-sw2-en", start: 985645, end: 985744 }, { filename: "/espeak-ng-data/voices/mb/mb-tl1", start: 985744, end: 985829 }, { filename: "/espeak-ng-data/voices/mb/mb-tr1", start: 985829, end: 985914 }, { filename: "/espeak-ng-data/voices/mb/mb-tr2", start: 985914, end: 986028 }, { filename: "/espeak-ng-data/voices/mb/mb-us1", start: 986028, end: 986198 }, { filename: "/espeak-ng-data/voices/mb/mb-us2", start: 986198, end: 986376 }, { filename: "/espeak-ng-data/voices/mb/mb-us3", start: 986376, end: 986556 }, { filename: "/espeak-ng-data/voices/mb/mb-vz1", start: 986556, end: 986700 }],
          remote_package_size: 986700
        });
      }
    }();
    var De = Object.assign({}, o), ge = [], ae = "./this.program", te = (e, a) => {
      throw a;
    }, Ae = typeof window == "object", q = typeof importScripts == "function", ne = typeof process == "object" && typeof process.versions == "object" && typeof process.versions.node == "string", N = "";
    function Ze(e) {
      return o.locateFile ? o.locateFile(e, N) : N + e;
    }
    var G, $, re;
    if (ne) {
      var ue = require("fs"), ve = require("path");
      q ? N = ve.dirname(N) + "/" : N = __dirname + "/", G = (e, a) => (e = oe(e) ? new URL(e) : ve.normalize(e), ue.readFileSync(e, a ? void 0 : "utf8")), re = (e) => {
        var a = G(e, !0);
        return a.buffer || (a = new Uint8Array(a)), a;
      }, $ = (e, a, t, r = !0) => {
        e = oe(e) ? new URL(e) : ve.normalize(e), ue.readFile(e, r ? void 0 : "utf8", (s, i) => {
          s ? t(s) : a(r ? i.buffer : i);
        });
      }, !o.thisProgram && process.argv.length > 1 && (ae = process.argv[1].replace(/\\/g, "/")), ge = process.argv.slice(2), te = (e, a) => {
        throw process.exitCode = e, a;
      }, o.inspect = () => "[Emscripten Module object]";
    } else (Ae || q) && (q ? N = self.location.href : typeof document < "u" && document.currentScript && (N = document.currentScript.src), Q && (N = Q), N.indexOf("blob:") !== 0 ? N = N.substr(
      0,
      N.replace(/[?#].*/, "").lastIndexOf("/") + 1
    ) : N = "", G = (e) => {
      var a = new XMLHttpRequest();
      return a.open("GET", e, !1), a.send(null), a.responseText;
    }, q && (re = (e) => {
      var a = new XMLHttpRequest();
      return a.open("GET", e, !1), a.responseType = "arraybuffer", a.send(null), new Uint8Array(a.response);
    }), $ = (e, a, t) => {
      var r = new XMLHttpRequest();
      r.open("GET", e, !0), r.responseType = "arraybuffer", r.onload = () => {
        if (r.status == 200 || r.status == 0 && r.response) {
          a(r.response);
          return;
        }
        t();
      }, r.onerror = t, r.send(null);
    });
    var ke = o.print || console.log.bind(console), C = o.printErr || console.error.bind(console);
    Object.assign(o, De), De = null, o.arguments && (ge = o.arguments), o.thisProgram && (ae = o.thisProgram), o.quit && (te = o.quit);
    var X;
    o.wasmBinary && (X = o.wasmBinary), typeof WebAssembly != "object" && L("no native wasm support detected");
    var Me, he = !1, se;
    function Qe(e, a) {
      e || L(a);
    }
    var T, H, V, k, A;
    function ea() {
      var e = Me.buffer;
      o.HEAP8 = T = new Int8Array(e), o.HEAP16 = V = new Int16Array(e), o.HEAPU8 = H = new Uint8Array(e), o.HEAPU16 = new Uint16Array(e), o.HEAP32 = k = new Int32Array(e), o.HEAPU32 = A = new Uint32Array(e), o.HEAPF32 = new Float32Array(e), o.HEAPF64 = new Float64Array(e);
    }
    var Re = [], ze = [], aa = [], Te = [];
    function ta() {
      if (o.preRun)
        for (typeof o.preRun == "function" && (o.preRun = [o.preRun]); o.preRun.length; )
          ia(o.preRun.shift());
      de(Re);
    }
    function na() {
      !o.noFSInit && !n.init.initialized && n.init(), n.ignorePermissions = !1, de(ze);
    }
    function ra() {
      de(aa);
    }
    function sa() {
      if (o.postRun)
        for (typeof o.postRun == "function" && (o.postRun = [o.postRun]); o.postRun.length; )
          da(o.postRun.shift());
      de(Te);
    }
    function ia(e) {
      Re.unshift(e);
    }
    function oa(e) {
      ze.unshift(e);
    }
    function da(e) {
      Te.unshift(e);
    }
    var U = 0, K = null;
    function lt(e) {
      return e;
    }
    function ie(e) {
      U++, o.monitorRunDependencies && o.monitorRunDependencies(U);
    }
    function J(e) {
      if (U--, o.monitorRunDependencies && o.monitorRunDependencies(U), U == 0 && K) {
        var a = K;
        K = null, a();
      }
    }
    function L(e) {
      o.onAbort && o.onAbort(e), e = "Aborted(" + e + ")", C(e), he = !0, se = 1, e += ". Build with -sASSERTIONS for more info.";
      var a = new WebAssembly.RuntimeError(e);
      throw ee(a), a;
    }
    var la = "data:application/octet-stream;base64,", Ne = (e) => e.startsWith(la), oe = (e) => e.startsWith("file://"), I;
    I = "piper_phonemize.wasm", Ne(I) || (I = Ze(I));
    function xe(e) {
      if (e == I && X)
        return new Uint8Array(X);
      if (re)
        return re(e);
      throw "both async and sync fetching of the wasm failed";
    }
    function fa(e) {
      if (!X && (Ae || q)) {
        if (typeof fetch == "function" && !oe(e))
          return fetch(e, { credentials: "same-origin" }).then((a) => {
            if (!a.ok)
              throw "failed to load wasm binary file at '" + e + "'";
            return a.arrayBuffer();
          }).catch(() => xe(e));
        if ($)
          return new Promise((a, t) => {
            $(e, (r) => a(new Uint8Array(r)), t);
          });
      }
      return Promise.resolve().then(() => xe(e));
    }
    function Ce(e, a, t) {
      return fa(e).then((r) => WebAssembly.instantiate(r, a)).then((r) => r).then(t, (r) => {
        C(`failed to asynchronously prepare wasm: ${r}`), L(r);
      });
    }
    function ma(e, a, t, r) {
      return !e && typeof WebAssembly.instantiateStreaming == "function" && !Ne(a) && !oe(a) && !ne && typeof fetch == "function" ? fetch(a, { credentials: "same-origin" }).then((s) => {
        var i = WebAssembly.instantiateStreaming(s, t);
        return i.then(r, function(d) {
          return C(`wasm streaming compile failed: ${d}`), C("falling back to ArrayBuffer instantiation"), Ce(a, t, r);
        });
      }) : Ce(a, t, r);
    }
    function ca() {
      var e = { a: dt };
      function a(r, s) {
        return j = r.exports, Me = j.w, ea(), oa(j.x), J(), j;
      }
      ie();
      function t(r) {
        a(r.instance);
      }
      if (o.instantiateWasm)
        try {
          return o.instantiateWasm(e, a);
        } catch (r) {
          C(`Module.instantiateWasm callback failed with error: ${r}`), ee(r);
        }
      return ma(X, I, e, t).catch(
        ee
      ), {};
    }
    var u, M;
    function Le(e) {
      this.name = "ExitStatus", this.message = `Program terminated with exit(${e})`, this.status = e;
    }
    var de = (e) => {
      for (; e.length > 0; )
        e.shift()(o);
    }, pa = o.noExitRuntime || !0, Oe = typeof TextDecoder < "u" ? new TextDecoder("utf8") : void 0, Y = (e, a, t) => {
      for (var r = a + t, s = a; e[s] && !(s >= r); ) ++s;
      if (s - a > 16 && e.buffer && Oe)
        return Oe.decode(e.subarray(a, s));
      for (var i = ""; a < s; ) {
        var d = e[a++];
        if (!(d & 128)) {
          i += String.fromCharCode(d);
          continue;
        }
        var l = e[a++] & 63;
        if ((d & 224) == 192) {
          i += String.fromCharCode((d & 31) << 6 | l);
          continue;
        }
        var m = e[a++] & 63;
        if ((d & 240) == 224 ? d = (d & 15) << 12 | l << 6 | m : d = (d & 7) << 18 | l << 12 | m << 6 | e[a++] & 63, d < 65536)
          i += String.fromCharCode(d);
        else {
          var v = d - 65536;
          i += String.fromCharCode(55296 | v >> 10, 56320 | v & 1023);
        }
      }
      return i;
    }, W = (e, a) => e ? Y(H, e, a) : "", ga = (e, a, t, r) => {
      L(
        `Assertion failed: ${W(e)}, at: ` + [
          a ? W(a) : "unknown filename",
          t,
          r ? W(r) : "unknown function"
        ]
      );
    };
    function ua(e) {
      this.excPtr = e, this.ptr = e - 24, this.set_type = function(a) {
        A[this.ptr + 4 >> 2] = a;
      }, this.get_type = function() {
        return A[this.ptr + 4 >> 2];
      }, this.set_destructor = function(a) {
        A[this.ptr + 8 >> 2] = a;
      }, this.get_destructor = function() {
        return A[this.ptr + 8 >> 2];
      }, this.set_caught = function(a) {
        a = a ? 1 : 0, T[this.ptr + 12 >> 0] = a;
      }, this.get_caught = function() {
        return T[this.ptr + 12 >> 0] != 0;
      }, this.set_rethrown = function(a) {
        a = a ? 1 : 0, T[this.ptr + 13 >> 0] = a;
      }, this.get_rethrown = function() {
        return T[this.ptr + 13 >> 0] != 0;
      }, this.init = function(a, t) {
        this.set_adjusted_ptr(0), this.set_type(a), this.set_destructor(t);
      }, this.set_adjusted_ptr = function(a) {
        A[this.ptr + 16 >> 2] = a;
      }, this.get_adjusted_ptr = function() {
        return A[this.ptr + 16 >> 2];
      }, this.get_exception_ptr = function() {
        var a = Xe(this.get_type());
        if (a)
          return A[this.excPtr >> 2];
        var t = this.get_adjusted_ptr();
        return t !== 0 ? t : this.excPtr;
      };
    }
    var je = 0, va = (e, a, t) => {
      var r = new ua(e);
      throw r.init(a, t), je = e, je;
    }, ka = (e) => (k[$e() >> 2] = e, e), P = {
      isAbs: (e) => e.charAt(0) === "/",
      splitPath: (e) => {
        var a = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
        return a.exec(e).slice(1);
      },
      normalizeArray: (e, a) => {
        for (var t = 0, r = e.length - 1; r >= 0; r--) {
          var s = e[r];
          s === "." ? e.splice(r, 1) : s === ".." ? (e.splice(r, 1), t++) : t && (e.splice(r, 1), t--);
        }
        if (a)
          for (; t; t--)
            e.unshift("..");
        return e;
      },
      normalize: (e) => {
        var a = P.isAbs(e), t = e.substr(-1) === "/";
        return e = P.normalizeArray(
          e.split("/").filter((r) => !!r),
          !a
        ).join("/"), !e && !a && (e = "."), e && t && (e += "/"), (a ? "/" : "") + e;
      },
      dirname: (e) => {
        var a = P.splitPath(e), t = a[0], r = a[1];
        return !t && !r ? "." : (r && (r = r.substr(0, r.length - 1)), t + r);
      },
      basename: (e) => {
        if (e === "/") return "/";
        e = P.normalize(e), e = e.replace(/\/$/, "");
        var a = e.lastIndexOf("/");
        return a === -1 ? e : e.substr(a + 1);
      },
      join: function() {
        var e = Array.prototype.slice.call(arguments);
        return P.normalize(e.join("/"));
      },
      join2: (e, a) => P.normalize(e + "/" + a)
    }, ha = () => {
      if (typeof crypto == "object" && typeof crypto.getRandomValues == "function")
        return (r) => crypto.getRandomValues(r);
      if (ne)
        try {
          var e = require("crypto"), a = e.randomFillSync;
          if (a)
            return (r) => e.randomFillSync(r);
          var t = e.randomBytes;
          return (r) => (r.set(t(r.byteLength)), r);
        } catch {
        }
      L("initRandomDevice");
    }, Ue = (e) => (Ue = ha())(e), O = {
      resolve: function() {
        for (var e = "", a = !1, t = arguments.length - 1; t >= -1 && !a; t--) {
          var r = t >= 0 ? arguments[t] : n.cwd();
          if (typeof r != "string")
            throw new TypeError("Arguments to path.resolve must be strings");
          if (!r)
            return "";
          e = r + "/" + e, a = P.isAbs(r);
        }
        return e = P.normalizeArray(
          e.split("/").filter((s) => !!s),
          !a
        ).join("/"), (a ? "/" : "") + e || ".";
      },
      relative: (e, a) => {
        e = O.resolve(e).substr(1), a = O.resolve(a).substr(1);
        function t(v) {
          for (var y = 0; y < v.length && v[y] === ""; y++)
            ;
          for (var h = v.length - 1; h >= 0 && v[h] === ""; h--)
            ;
          return y > h ? [] : v.slice(y, h - y + 1);
        }
        for (var r = t(e.split("/")), s = t(a.split("/")), i = Math.min(r.length, s.length), d = i, l = 0; l < i; l++)
          if (r[l] !== s[l]) {
            d = l;
            break;
          }
        for (var m = [], l = d; l < r.length; l++)
          m.push("..");
        return m = m.concat(s.slice(d)), m.join("/");
      }
    }, _e = [], we = (e) => {
      for (var a = 0, t = 0; t < e.length; ++t) {
        var r = e.charCodeAt(t);
        r <= 127 ? a++ : r <= 2047 ? a += 2 : r >= 55296 && r <= 57343 ? (a += 4, ++t) : a += 3;
      }
      return a;
    }, ye = (e, a, t, r) => {
      if (!(r > 0)) return 0;
      for (var s = t, i = t + r - 1, d = 0; d < e.length; ++d) {
        var l = e.charCodeAt(d);
        if (l >= 55296 && l <= 57343) {
          var m = e.charCodeAt(++d);
          l = 65536 + ((l & 1023) << 10) | m & 1023;
        }
        if (l <= 127) {
          if (t >= i) break;
          a[t++] = l;
        } else if (l <= 2047) {
          if (t + 1 >= i) break;
          a[t++] = 192 | l >> 6, a[t++] = 128 | l & 63;
        } else if (l <= 65535) {
          if (t + 2 >= i) break;
          a[t++] = 224 | l >> 12, a[t++] = 128 | l >> 6 & 63, a[t++] = 128 | l & 63;
        } else {
          if (t + 3 >= i) break;
          a[t++] = 240 | l >> 18, a[t++] = 128 | l >> 12 & 63, a[t++] = 128 | l >> 6 & 63, a[t++] = 128 | l & 63;
        }
      }
      return a[t] = 0, t - s;
    };
    function le(e, a, t) {
      var r = we(e) + 1, s = new Array(r), i = ye(e, s, 0, s.length);
      return a && (s.length = i), s;
    }
    var _a = () => {
      if (!_e.length) {
        var e = null;
        if (ne) {
          var a = 256, t = Buffer.alloc(a), r = 0, s = process.stdin.fd;
          try {
            r = ue.readSync(s, t);
          } catch (i) {
            if (i.toString().includes("EOF")) r = 0;
            else throw i;
          }
          r > 0 ? e = t.slice(0, r).toString("utf-8") : e = null;
        } else typeof window < "u" && typeof window.prompt == "function" ? (e = window.prompt("Input: "), e !== null && (e += `
`)) : typeof readline == "function" && (e = readline(), e !== null && (e += `
`));
        if (!e)
          return null;
        _e = le(e, !0);
      }
      return _e.shift();
    }, B = {
      ttys: [],
      init() {
      },
      shutdown() {
      },
      register(e, a) {
        B.ttys[e] = { input: [], output: [], ops: a }, n.registerDevice(e, B.stream_ops);
      },
      stream_ops: {
        open(e) {
          var a = B.ttys[e.node.rdev];
          if (!a)
            throw new n.ErrnoError(43);
          e.tty = a, e.seekable = !1;
        },
        close(e) {
          e.tty.ops.fsync(e.tty);
        },
        fsync(e) {
          e.tty.ops.fsync(e.tty);
        },
        read(e, a, t, r, s) {
          if (!e.tty || !e.tty.ops.get_char)
            throw new n.ErrnoError(60);
          for (var i = 0, d = 0; d < r; d++) {
            var l;
            try {
              l = e.tty.ops.get_char(e.tty);
            } catch {
              throw new n.ErrnoError(29);
            }
            if (l === void 0 && i === 0)
              throw new n.ErrnoError(6);
            if (l == null) break;
            i++, a[t + d] = l;
          }
          return i && (e.node.timestamp = Date.now()), i;
        },
        write(e, a, t, r, s) {
          if (!e.tty || !e.tty.ops.put_char)
            throw new n.ErrnoError(60);
          try {
            for (var i = 0; i < r; i++)
              e.tty.ops.put_char(e.tty, a[t + i]);
          } catch {
            throw new n.ErrnoError(29);
          }
          return r && (e.node.timestamp = Date.now()), i;
        }
      },
      default_tty_ops: {
        get_char(e) {
          return _a();
        },
        put_char(e, a) {
          a === null || a === 10 ? (ke(Y(e.output, 0)), e.output = []) : a != 0 && e.output.push(a);
        },
        fsync(e) {
          e.output && e.output.length > 0 && (ke(Y(e.output, 0)), e.output = []);
        },
        ioctl_tcgets(e) {
          return {
            c_iflag: 25856,
            c_oflag: 5,
            c_cflag: 191,
            c_lflag: 35387,
            c_cc: [
              3,
              28,
              127,
              21,
              4,
              0,
              1,
              0,
              17,
              19,
              26,
              0,
              18,
              15,
              23,
              22,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0
            ]
          };
        },
        ioctl_tcsets(e, a, t) {
          return 0;
        },
        ioctl_tiocgwinsz(e) {
          return [24, 80];
        }
      },
      default_tty1_ops: {
        put_char(e, a) {
          a === null || a === 10 ? (C(Y(e.output, 0)), e.output = []) : a != 0 && e.output.push(a);
        },
        fsync(e) {
          e.output && e.output.length > 0 && (C(Y(e.output, 0)), e.output = []);
        }
      }
    }, Be = (e) => {
      L();
    }, w = {
      ops_table: null,
      mount(e) {
        return w.createNode(null, "/", 16895, 0);
      },
      createNode(e, a, t, r) {
        if (n.isBlkdev(t) || n.isFIFO(t))
          throw new n.ErrnoError(63);
        w.ops_table || (w.ops_table = {
          dir: {
            node: {
              getattr: w.node_ops.getattr,
              setattr: w.node_ops.setattr,
              lookup: w.node_ops.lookup,
              mknod: w.node_ops.mknod,
              rename: w.node_ops.rename,
              unlink: w.node_ops.unlink,
              rmdir: w.node_ops.rmdir,
              readdir: w.node_ops.readdir,
              symlink: w.node_ops.symlink
            },
            stream: { llseek: w.stream_ops.llseek }
          },
          file: {
            node: { getattr: w.node_ops.getattr, setattr: w.node_ops.setattr },
            stream: {
              llseek: w.stream_ops.llseek,
              read: w.stream_ops.read,
              write: w.stream_ops.write,
              allocate: w.stream_ops.allocate,
              mmap: w.stream_ops.mmap,
              msync: w.stream_ops.msync
            }
          },
          link: {
            node: {
              getattr: w.node_ops.getattr,
              setattr: w.node_ops.setattr,
              readlink: w.node_ops.readlink
            },
            stream: {}
          },
          chrdev: {
            node: { getattr: w.node_ops.getattr, setattr: w.node_ops.setattr },
            stream: n.chrdev_stream_ops
          }
        });
        var s = n.createNode(e, a, t, r);
        return n.isDir(s.mode) ? (s.node_ops = w.ops_table.dir.node, s.stream_ops = w.ops_table.dir.stream, s.contents = {}) : n.isFile(s.mode) ? (s.node_ops = w.ops_table.file.node, s.stream_ops = w.ops_table.file.stream, s.usedBytes = 0, s.contents = null) : n.isLink(s.mode) ? (s.node_ops = w.ops_table.link.node, s.stream_ops = w.ops_table.link.stream) : n.isChrdev(s.mode) && (s.node_ops = w.ops_table.chrdev.node, s.stream_ops = w.ops_table.chrdev.stream), s.timestamp = Date.now(), e && (e.contents[a] = s, e.timestamp = s.timestamp), s;
      },
      getFileDataAsTypedArray(e) {
        return e.contents ? e.contents.subarray ? e.contents.subarray(0, e.usedBytes) : new Uint8Array(e.contents) : new Uint8Array(0);
      },
      expandFileStorage(e, a) {
        var t = e.contents ? e.contents.length : 0;
        if (!(t >= a)) {
          var r = 1024 * 1024;
          a = Math.max(
            a,
            t * (t < r ? 2 : 1.125) >>> 0
          ), t != 0 && (a = Math.max(a, 256));
          var s = e.contents;
          e.contents = new Uint8Array(a), e.usedBytes > 0 && e.contents.set(s.subarray(0, e.usedBytes), 0);
        }
      },
      resizeFileStorage(e, a) {
        if (e.usedBytes != a)
          if (a == 0)
            e.contents = null, e.usedBytes = 0;
          else {
            var t = e.contents;
            e.contents = new Uint8Array(a), t && e.contents.set(t.subarray(0, Math.min(a, e.usedBytes))), e.usedBytes = a;
          }
      },
      node_ops: {
        getattr(e) {
          var a = {};
          return a.dev = n.isChrdev(e.mode) ? e.id : 1, a.ino = e.id, a.mode = e.mode, a.nlink = 1, a.uid = 0, a.gid = 0, a.rdev = e.rdev, n.isDir(e.mode) ? a.size = 4096 : n.isFile(e.mode) ? a.size = e.usedBytes : n.isLink(e.mode) ? a.size = e.link.length : a.size = 0, a.atime = new Date(e.timestamp), a.mtime = new Date(e.timestamp), a.ctime = new Date(e.timestamp), a.blksize = 4096, a.blocks = Math.ceil(a.size / a.blksize), a;
        },
        setattr(e, a) {
          a.mode !== void 0 && (e.mode = a.mode), a.timestamp !== void 0 && (e.timestamp = a.timestamp), a.size !== void 0 && w.resizeFileStorage(e, a.size);
        },
        lookup(e, a) {
          throw n.genericErrors[44];
        },
        mknod(e, a, t, r) {
          return w.createNode(e, a, t, r);
        },
        rename(e, a, t) {
          if (n.isDir(e.mode)) {
            var r;
            try {
              r = n.lookupNode(a, t);
            } catch {
            }
            if (r)
              for (var s in r.contents)
                throw new n.ErrnoError(55);
          }
          delete e.parent.contents[e.name], e.parent.timestamp = Date.now(), e.name = t, a.contents[t] = e, a.timestamp = e.parent.timestamp, e.parent = a;
        },
        unlink(e, a) {
          delete e.contents[a], e.timestamp = Date.now();
        },
        rmdir(e, a) {
          var t = n.lookupNode(e, a);
          for (var r in t.contents)
            throw new n.ErrnoError(55);
          delete e.contents[a], e.timestamp = Date.now();
        },
        readdir(e) {
          var a = [".", ".."];
          for (var t in e.contents)
            e.contents.hasOwnProperty(t) && a.push(t);
          return a;
        },
        symlink(e, a, t) {
          var r = w.createNode(e, a, 41471, 0);
          return r.link = t, r;
        },
        readlink(e) {
          if (!n.isLink(e.mode))
            throw new n.ErrnoError(28);
          return e.link;
        }
      },
      stream_ops: {
        read(e, a, t, r, s) {
          var i = e.node.contents;
          if (s >= e.node.usedBytes) return 0;
          var d = Math.min(e.node.usedBytes - s, r);
          if (d > 8 && i.subarray)
            a.set(i.subarray(s, s + d), t);
          else
            for (var l = 0; l < d; l++) a[t + l] = i[s + l];
          return d;
        },
        write(e, a, t, r, s, i) {
          if (!r) return 0;
          var d = e.node;
          if (d.timestamp = Date.now(), a.subarray && (!d.contents || d.contents.subarray)) {
            if (i)
              return d.contents = a.subarray(t, t + r), d.usedBytes = r, r;
            if (d.usedBytes === 0 && s === 0)
              return d.contents = a.slice(t, t + r), d.usedBytes = r, r;
            if (s + r <= d.usedBytes)
              return d.contents.set(a.subarray(t, t + r), s), r;
          }
          if (w.expandFileStorage(d, s + r), d.contents.subarray && a.subarray)
            d.contents.set(a.subarray(t, t + r), s);
          else
            for (var l = 0; l < r; l++)
              d.contents[s + l] = a[t + l];
          return d.usedBytes = Math.max(d.usedBytes, s + r), r;
        },
        llseek(e, a, t) {
          var r = a;
          if (t === 1 ? r += e.position : t === 2 && n.isFile(e.node.mode) && (r += e.node.usedBytes), r < 0)
            throw new n.ErrnoError(28);
          return r;
        },
        allocate(e, a, t) {
          w.expandFileStorage(e.node, a + t), e.node.usedBytes = Math.max(e.node.usedBytes, a + t);
        },
        mmap(e, a, t, r, s) {
          if (!n.isFile(e.node.mode))
            throw new n.ErrnoError(43);
          var i, d, l = e.node.contents;
          if (!(s & 2) && l.buffer === T.buffer)
            d = !1, i = l.byteOffset;
          else {
            if ((t > 0 || t + a < l.length) && (l.subarray ? l = l.subarray(t, t + a) : l = Array.prototype.slice.call(l, t, t + a)), d = !0, i = Be(), !i)
              throw new n.ErrnoError(48);
            T.set(l, i);
          }
          return { ptr: i, allocated: d };
        },
        msync(e, a, t, r, s) {
          return w.stream_ops.write(e, a, 0, r, t, !1), 0;
        }
      }
    }, wa = (e, a, t, r) => {
      var s = `al ${e}`;
      $(
        e,
        (i) => {
          Qe(i, `Loading data file "${e}" failed (no arrayBuffer).`), a(new Uint8Array(i)), s && J();
        },
        (i) => {
          if (t)
            t();
          else
            throw `Loading data file "${e}" failed.`;
        }
      ), s && ie();
    }, ya = (e, a, t, r, s, i) => n.createDataFile(e, a, t, r, s, i), ba = o.preloadPlugins || [], Ea = (e, a, t, r) => {
      typeof Browser < "u" && Browser.init();
      var s = !1;
      return ba.forEach((i) => {
        s || i.canHandle(a) && (i.handle(e, a, t, r), s = !0);
      }), s;
    }, Sa = (e, a, t, r, s, i, d, l, m, v) => {
      var y = a ? O.resolve(P.join2(e, a)) : e;
      function h(g) {
        function p(_) {
          v && v(), l || ya(e, a, _, r, s, m), i && i(), J();
        }
        Ea(g, y, p, () => {
          d && d(), J();
        }) || p(g);
      }
      ie(), typeof t == "string" ? wa(t, (g) => h(g), d) : h(t);
    }, Fa = (e) => {
      var a = {
        r: 0,
        "r+": 2,
        w: 577,
        "w+": 578,
        a: 1089,
        "a+": 1090
      }, t = a[e];
      if (typeof t > "u")
        throw new Error(`Unknown file open mode: ${e}`);
      return t;
    }, be = (e, a) => {
      var t = 0;
      return e && (t |= 365), a && (t |= 146), t;
    }, n = {
      root: null,
      mounts: [],
      devices: {},
      streams: [],
      nextInode: 1,
      nameTable: null,
      currentPath: "/",
      initialized: !1,
      ignorePermissions: !0,
      ErrnoError: null,
      genericErrors: {},
      filesystems: null,
      syncFSRequests: 0,
      lookupPath(e, a = {}) {
        if (e = O.resolve(e), !e) return { path: "", node: null };
        var t = { follow_mount: !0, recurse_count: 0 };
        if (a = Object.assign(t, a), a.recurse_count > 8)
          throw new n.ErrnoError(32);
        for (var r = e.split("/").filter((h) => !!h), s = n.root, i = "/", d = 0; d < r.length; d++) {
          var l = d === r.length - 1;
          if (l && a.parent)
            break;
          if (s = n.lookupNode(s, r[d]), i = P.join2(i, r[d]), n.isMountpoint(s) && (!l || l && a.follow_mount) && (s = s.mounted.root), !l || a.follow)
            for (var m = 0; n.isLink(s.mode); ) {
              var v = n.readlink(i);
              i = O.resolve(P.dirname(i), v);
              var y = n.lookupPath(i, { recurse_count: a.recurse_count + 1 });
              if (s = y.node, m++ > 40)
                throw new n.ErrnoError(32);
            }
        }
        return { path: i, node: s };
      },
      getPath(e) {
        for (var a; ; ) {
          if (n.isRoot(e)) {
            var t = e.mount.mountpoint;
            return a ? t[t.length - 1] !== "/" ? `${t}/${a}` : t + a : t;
          }
          a = a ? `${e.name}/${a}` : e.name, e = e.parent;
        }
      },
      hashName(e, a) {
        for (var t = 0, r = 0; r < a.length; r++)
          t = (t << 5) - t + a.charCodeAt(r) | 0;
        return (e + t >>> 0) % n.nameTable.length;
      },
      hashAddNode(e) {
        var a = n.hashName(e.parent.id, e.name);
        e.name_next = n.nameTable[a], n.nameTable[a] = e;
      },
      hashRemoveNode(e) {
        var a = n.hashName(e.parent.id, e.name);
        if (n.nameTable[a] === e)
          n.nameTable[a] = e.name_next;
        else
          for (var t = n.nameTable[a]; t; ) {
            if (t.name_next === e) {
              t.name_next = e.name_next;
              break;
            }
            t = t.name_next;
          }
      },
      lookupNode(e, a) {
        var t = n.mayLookup(e);
        if (t)
          throw new n.ErrnoError(t, e);
        for (var r = n.hashName(e.id, a), s = n.nameTable[r]; s; s = s.name_next) {
          var i = s.name;
          if (s.parent.id === e.id && i === a)
            return s;
        }
        return n.lookup(e, a);
      },
      createNode(e, a, t, r) {
        var s = new n.FSNode(e, a, t, r);
        return n.hashAddNode(s), s;
      },
      destroyNode(e) {
        n.hashRemoveNode(e);
      },
      isRoot(e) {
        return e === e.parent;
      },
      isMountpoint(e) {
        return !!e.mounted;
      },
      isFile(e) {
        return (e & 61440) === 32768;
      },
      isDir(e) {
        return (e & 61440) === 16384;
      },
      isLink(e) {
        return (e & 61440) === 40960;
      },
      isChrdev(e) {
        return (e & 61440) === 8192;
      },
      isBlkdev(e) {
        return (e & 61440) === 24576;
      },
      isFIFO(e) {
        return (e & 61440) === 4096;
      },
      isSocket(e) {
        return (e & 49152) === 49152;
      },
      flagsToPermissionString(e) {
        var a = ["r", "w", "rw"][e & 3];
        return e & 512 && (a += "w"), a;
      },
      nodePermissions(e, a) {
        return n.ignorePermissions ? 0 : a.includes("r") && !(e.mode & 292) || a.includes("w") && !(e.mode & 146) || a.includes("x") && !(e.mode & 73) ? 2 : 0;
      },
      mayLookup(e) {
        var a = n.nodePermissions(e, "x");
        return a || (e.node_ops.lookup ? 0 : 2);
      },
      mayCreate(e, a) {
        try {
          var t = n.lookupNode(e, a);
          return 20;
        } catch {
        }
        return n.nodePermissions(e, "wx");
      },
      mayDelete(e, a, t) {
        var r;
        try {
          r = n.lookupNode(e, a);
        } catch (i) {
          return i.errno;
        }
        var s = n.nodePermissions(e, "wx");
        if (s)
          return s;
        if (t) {
          if (!n.isDir(r.mode))
            return 54;
          if (n.isRoot(r) || n.getPath(r) === n.cwd())
            return 10;
        } else if (n.isDir(r.mode))
          return 31;
        return 0;
      },
      mayOpen(e, a) {
        return e ? n.isLink(e.mode) ? 32 : n.isDir(e.mode) && (n.flagsToPermissionString(a) !== "r" || a & 512) ? 31 : n.nodePermissions(e, n.flagsToPermissionString(a)) : 44;
      },
      MAX_OPEN_FDS: 4096,
      nextfd() {
        for (var e = 0; e <= n.MAX_OPEN_FDS; e++)
          if (!n.streams[e])
            return e;
        throw new n.ErrnoError(33);
      },
      getStreamChecked(e) {
        var a = n.getStream(e);
        if (!a)
          throw new n.ErrnoError(8);
        return a;
      },
      getStream: (e) => n.streams[e],
      createStream(e, a = -1) {
        return n.FSStream || (n.FSStream = function() {
          this.shared = {};
        }, n.FSStream.prototype = {}, Object.defineProperties(n.FSStream.prototype, {
          object: {
            get() {
              return this.node;
            },
            set(t) {
              this.node = t;
            }
          },
          isRead: {
            get() {
              return (this.flags & 2097155) !== 1;
            }
          },
          isWrite: {
            get() {
              return (this.flags & 2097155) !== 0;
            }
          },
          isAppend: {
            get() {
              return this.flags & 1024;
            }
          },
          flags: {
            get() {
              return this.shared.flags;
            },
            set(t) {
              this.shared.flags = t;
            }
          },
          position: {
            get() {
              return this.shared.position;
            },
            set(t) {
              this.shared.position = t;
            }
          }
        })), e = Object.assign(new n.FSStream(), e), a == -1 && (a = n.nextfd()), e.fd = a, n.streams[a] = e, e;
      },
      closeStream(e) {
        n.streams[e] = null;
      },
      chrdev_stream_ops: {
        open(e) {
          var a = n.getDevice(e.node.rdev);
          e.stream_ops = a.stream_ops, e.stream_ops.open && e.stream_ops.open(e);
        },
        llseek() {
          throw new n.ErrnoError(70);
        }
      },
      major: (e) => e >> 8,
      minor: (e) => e & 255,
      makedev: (e, a) => e << 8 | a,
      registerDevice(e, a) {
        n.devices[e] = { stream_ops: a };
      },
      getDevice: (e) => n.devices[e],
      getMounts(e) {
        for (var a = [], t = [e]; t.length; ) {
          var r = t.pop();
          a.push(r), t.push.apply(t, r.mounts);
        }
        return a;
      },
      syncfs(e, a) {
        typeof e == "function" && (a = e, e = !1), n.syncFSRequests++, n.syncFSRequests > 1 && C(
          `warning: ${n.syncFSRequests} FS.syncfs operations in flight at once, probably just doing extra work`
        );
        var t = n.getMounts(n.root.mount), r = 0;
        function s(d) {
          return n.syncFSRequests--, a(d);
        }
        function i(d) {
          if (d)
            return i.errored ? void 0 : (i.errored = !0, s(d));
          ++r >= t.length && s(null);
        }
        t.forEach((d) => {
          if (!d.type.syncfs)
            return i(null);
          d.type.syncfs(d, e, i);
        });
      },
      mount(e, a, t) {
        var r = t === "/", s = !t, i;
        if (r && n.root)
          throw new n.ErrnoError(10);
        if (!r && !s) {
          var d = n.lookupPath(t, { follow_mount: !1 });
          if (t = d.path, i = d.node, n.isMountpoint(i))
            throw new n.ErrnoError(10);
          if (!n.isDir(i.mode))
            throw new n.ErrnoError(54);
        }
        var l = { type: e, opts: a, mountpoint: t, mounts: [] }, m = e.mount(l);
        return m.mount = l, l.root = m, r ? n.root = m : i && (i.mounted = l, i.mount && i.mount.mounts.push(l)), m;
      },
      unmount(e) {
        var a = n.lookupPath(e, { follow_mount: !1 });
        if (!n.isMountpoint(a.node))
          throw new n.ErrnoError(28);
        var t = a.node, r = t.mounted, s = n.getMounts(r);
        Object.keys(n.nameTable).forEach((d) => {
          for (var l = n.nameTable[d]; l; ) {
            var m = l.name_next;
            s.includes(l.mount) && n.destroyNode(l), l = m;
          }
        }), t.mounted = null;
        var i = t.mount.mounts.indexOf(r);
        t.mount.mounts.splice(i, 1);
      },
      lookup(e, a) {
        return e.node_ops.lookup(e, a);
      },
      mknod(e, a, t) {
        var r = n.lookupPath(e, { parent: !0 }), s = r.node, i = P.basename(e);
        if (!i || i === "." || i === "..")
          throw new n.ErrnoError(28);
        var d = n.mayCreate(s, i);
        if (d)
          throw new n.ErrnoError(d);
        if (!s.node_ops.mknod)
          throw new n.ErrnoError(63);
        return s.node_ops.mknod(s, i, a, t);
      },
      create(e, a) {
        return a = a !== void 0 ? a : 438, a &= 4095, a |= 32768, n.mknod(e, a, 0);
      },
      mkdir(e, a) {
        return a = a !== void 0 ? a : 511, a &= 1023, a |= 16384, n.mknod(e, a, 0);
      },
      mkdirTree(e, a) {
        for (var t = e.split("/"), r = "", s = 0; s < t.length; ++s)
          if (t[s]) {
            r += "/" + t[s];
            try {
              n.mkdir(r, a);
            } catch (i) {
              if (i.errno != 20) throw i;
            }
          }
      },
      mkdev(e, a, t) {
        return typeof t > "u" && (t = a, a = 438), a |= 8192, n.mknod(e, a, t);
      },
      symlink(e, a) {
        if (!O.resolve(e))
          throw new n.ErrnoError(44);
        var t = n.lookupPath(a, { parent: !0 }), r = t.node;
        if (!r)
          throw new n.ErrnoError(44);
        var s = P.basename(a), i = n.mayCreate(r, s);
        if (i)
          throw new n.ErrnoError(i);
        if (!r.node_ops.symlink)
          throw new n.ErrnoError(63);
        return r.node_ops.symlink(r, s, e);
      },
      rename(e, a) {
        var t = P.dirname(e), r = P.dirname(a), s = P.basename(e), i = P.basename(a), d, l, m;
        if (d = n.lookupPath(e, { parent: !0 }), l = d.node, d = n.lookupPath(a, { parent: !0 }), m = d.node, !l || !m) throw new n.ErrnoError(44);
        if (l.mount !== m.mount)
          throw new n.ErrnoError(75);
        var v = n.lookupNode(l, s), y = O.relative(e, r);
        if (y.charAt(0) !== ".")
          throw new n.ErrnoError(28);
        if (y = O.relative(a, t), y.charAt(0) !== ".")
          throw new n.ErrnoError(55);
        var h;
        try {
          h = n.lookupNode(m, i);
        } catch {
        }
        if (v !== h) {
          var g = n.isDir(v.mode), p = n.mayDelete(l, s, g);
          if (p)
            throw new n.ErrnoError(p);
          if (p = h ? n.mayDelete(m, i, g) : n.mayCreate(m, i), p)
            throw new n.ErrnoError(p);
          if (!l.node_ops.rename)
            throw new n.ErrnoError(63);
          if (n.isMountpoint(v) || h && n.isMountpoint(h))
            throw new n.ErrnoError(10);
          if (m !== l && (p = n.nodePermissions(l, "w"), p))
            throw new n.ErrnoError(p);
          n.hashRemoveNode(v);
          try {
            l.node_ops.rename(v, m, i);
          } catch (_) {
            throw _;
          } finally {
            n.hashAddNode(v);
          }
        }
      },
      rmdir(e) {
        var a = n.lookupPath(e, { parent: !0 }), t = a.node, r = P.basename(e), s = n.lookupNode(t, r), i = n.mayDelete(t, r, !0);
        if (i)
          throw new n.ErrnoError(i);
        if (!t.node_ops.rmdir)
          throw new n.ErrnoError(63);
        if (n.isMountpoint(s))
          throw new n.ErrnoError(10);
        t.node_ops.rmdir(t, r), n.destroyNode(s);
      },
      readdir(e) {
        var a = n.lookupPath(e, { follow: !0 }), t = a.node;
        if (!t.node_ops.readdir)
          throw new n.ErrnoError(54);
        return t.node_ops.readdir(t);
      },
      unlink(e) {
        var a = n.lookupPath(e, { parent: !0 }), t = a.node;
        if (!t)
          throw new n.ErrnoError(44);
        var r = P.basename(e), s = n.lookupNode(t, r), i = n.mayDelete(t, r, !1);
        if (i)
          throw new n.ErrnoError(i);
        if (!t.node_ops.unlink)
          throw new n.ErrnoError(63);
        if (n.isMountpoint(s))
          throw new n.ErrnoError(10);
        t.node_ops.unlink(t, r), n.destroyNode(s);
      },
      readlink(e) {
        var a = n.lookupPath(e), t = a.node;
        if (!t)
          throw new n.ErrnoError(44);
        if (!t.node_ops.readlink)
          throw new n.ErrnoError(28);
        return O.resolve(n.getPath(t.parent), t.node_ops.readlink(t));
      },
      stat(e, a) {
        var t = n.lookupPath(e, { follow: !a }), r = t.node;
        if (!r)
          throw new n.ErrnoError(44);
        if (!r.node_ops.getattr)
          throw new n.ErrnoError(63);
        return r.node_ops.getattr(r);
      },
      lstat(e) {
        return n.stat(e, !0);
      },
      chmod(e, a, t) {
        var r;
        if (typeof e == "string") {
          var s = n.lookupPath(e, { follow: !t });
          r = s.node;
        } else
          r = e;
        if (!r.node_ops.setattr)
          throw new n.ErrnoError(63);
        r.node_ops.setattr(r, {
          mode: a & 4095 | r.mode & -4096,
          timestamp: Date.now()
        });
      },
      lchmod(e, a) {
        n.chmod(e, a, !0);
      },
      fchmod(e, a) {
        var t = n.getStreamChecked(e);
        n.chmod(t.node, a);
      },
      chown(e, a, t, r) {
        var s;
        if (typeof e == "string") {
          var i = n.lookupPath(e, { follow: !r });
          s = i.node;
        } else
          s = e;
        if (!s.node_ops.setattr)
          throw new n.ErrnoError(63);
        s.node_ops.setattr(s, { timestamp: Date.now() });
      },
      lchown(e, a, t) {
        n.chown(e, a, t, !0);
      },
      fchown(e, a, t) {
        var r = n.getStreamChecked(e);
        n.chown(r.node, a, t);
      },
      truncate(e, a) {
        if (a < 0)
          throw new n.ErrnoError(28);
        var t;
        if (typeof e == "string") {
          var r = n.lookupPath(e, { follow: !0 });
          t = r.node;
        } else
          t = e;
        if (!t.node_ops.setattr)
          throw new n.ErrnoError(63);
        if (n.isDir(t.mode))
          throw new n.ErrnoError(31);
        if (!n.isFile(t.mode))
          throw new n.ErrnoError(28);
        var s = n.nodePermissions(t, "w");
        if (s)
          throw new n.ErrnoError(s);
        t.node_ops.setattr(t, { size: a, timestamp: Date.now() });
      },
      ftruncate(e, a) {
        var t = n.getStreamChecked(e);
        if (!(t.flags & 2097155))
          throw new n.ErrnoError(28);
        n.truncate(t.node, a);
      },
      utime(e, a, t) {
        var r = n.lookupPath(e, { follow: !0 }), s = r.node;
        s.node_ops.setattr(s, { timestamp: Math.max(a, t) });
      },
      open(e, a, t) {
        if (e === "")
          throw new n.ErrnoError(44);
        a = typeof a == "string" ? Fa(a) : a, t = typeof t > "u" ? 438 : t, a & 64 ? t = t & 4095 | 32768 : t = 0;
        var r;
        if (typeof e == "object")
          r = e;
        else {
          e = P.normalize(e);
          try {
            var s = n.lookupPath(e, { follow: !(a & 131072) });
            r = s.node;
          } catch {
          }
        }
        var i = !1;
        if (a & 64)
          if (r) {
            if (a & 128)
              throw new n.ErrnoError(20);
          } else
            r = n.mknod(e, t, 0), i = !0;
        if (!r)
          throw new n.ErrnoError(44);
        if (n.isChrdev(r.mode) && (a &= -513), a & 65536 && !n.isDir(r.mode))
          throw new n.ErrnoError(54);
        if (!i) {
          var d = n.mayOpen(r, a);
          if (d)
            throw new n.ErrnoError(d);
        }
        a & 512 && !i && n.truncate(r, 0), a &= -131713;
        var l = n.createStream({
          node: r,
          path: n.getPath(r),
          flags: a,
          seekable: !0,
          position: 0,
          stream_ops: r.stream_ops,
          ungotten: [],
          error: !1
        });
        return l.stream_ops.open && l.stream_ops.open(l), o.logReadFiles && !(a & 1) && (n.readFiles || (n.readFiles = {}), e in n.readFiles || (n.readFiles[e] = 1)), l;
      },
      close(e) {
        if (n.isClosed(e))
          throw new n.ErrnoError(8);
        e.getdents && (e.getdents = null);
        try {
          e.stream_ops.close && e.stream_ops.close(e);
        } catch (a) {
          throw a;
        } finally {
          n.closeStream(e.fd);
        }
        e.fd = null;
      },
      isClosed(e) {
        return e.fd === null;
      },
      llseek(e, a, t) {
        if (n.isClosed(e))
          throw new n.ErrnoError(8);
        if (!e.seekable || !e.stream_ops.llseek)
          throw new n.ErrnoError(70);
        if (t != 0 && t != 1 && t != 2)
          throw new n.ErrnoError(28);
        return e.position = e.stream_ops.llseek(e, a, t), e.ungotten = [], e.position;
      },
      read(e, a, t, r, s) {
        if (r < 0 || s < 0)
          throw new n.ErrnoError(28);
        if (n.isClosed(e))
          throw new n.ErrnoError(8);
        if ((e.flags & 2097155) === 1)
          throw new n.ErrnoError(8);
        if (n.isDir(e.node.mode))
          throw new n.ErrnoError(31);
        if (!e.stream_ops.read)
          throw new n.ErrnoError(28);
        var i = typeof s < "u";
        if (!i)
          s = e.position;
        else if (!e.seekable)
          throw new n.ErrnoError(70);
        var d = e.stream_ops.read(e, a, t, r, s);
        return i || (e.position += d), d;
      },
      write(e, a, t, r, s, i) {
        if (r < 0 || s < 0)
          throw new n.ErrnoError(28);
        if (n.isClosed(e))
          throw new n.ErrnoError(8);
        if (!(e.flags & 2097155))
          throw new n.ErrnoError(8);
        if (n.isDir(e.node.mode))
          throw new n.ErrnoError(31);
        if (!e.stream_ops.write)
          throw new n.ErrnoError(28);
        e.seekable && e.flags & 1024 && n.llseek(e, 0, 2);
        var d = typeof s < "u";
        if (!d)
          s = e.position;
        else if (!e.seekable)
          throw new n.ErrnoError(70);
        var l = e.stream_ops.write(
          e,
          a,
          t,
          r,
          s,
          i
        );
        return d || (e.position += l), l;
      },
      allocate(e, a, t) {
        if (n.isClosed(e))
          throw new n.ErrnoError(8);
        if (a < 0 || t <= 0)
          throw new n.ErrnoError(28);
        if (!(e.flags & 2097155))
          throw new n.ErrnoError(8);
        if (!n.isFile(e.node.mode) && !n.isDir(e.node.mode))
          throw new n.ErrnoError(43);
        if (!e.stream_ops.allocate)
          throw new n.ErrnoError(138);
        e.stream_ops.allocate(e, a, t);
      },
      mmap(e, a, t, r, s) {
        if (r & 2 && !(s & 2) && (e.flags & 2097155) !== 2)
          throw new n.ErrnoError(2);
        if ((e.flags & 2097155) === 1)
          throw new n.ErrnoError(2);
        if (!e.stream_ops.mmap)
          throw new n.ErrnoError(43);
        return e.stream_ops.mmap(e, a, t, r, s);
      },
      msync(e, a, t, r, s) {
        return e.stream_ops.msync ? e.stream_ops.msync(e, a, t, r, s) : 0;
      },
      munmap: (e) => 0,
      ioctl(e, a, t) {
        if (!e.stream_ops.ioctl)
          throw new n.ErrnoError(59);
        return e.stream_ops.ioctl(e, a, t);
      },
      readFile(e, a = {}) {
        if (a.flags = a.flags || 0, a.encoding = a.encoding || "binary", a.encoding !== "utf8" && a.encoding !== "binary")
          throw new Error(`Invalid encoding type "${a.encoding}"`);
        var t, r = n.open(e, a.flags), s = n.stat(e), i = s.size, d = new Uint8Array(i);
        return n.read(r, d, 0, i, 0), a.encoding === "utf8" ? t = Y(d, 0) : a.encoding === "binary" && (t = d), n.close(r), t;
      },
      writeFile(e, a, t = {}) {
        t.flags = t.flags || 577;
        var r = n.open(e, t.flags, t.mode);
        if (typeof a == "string") {
          var s = new Uint8Array(we(a) + 1), i = ye(a, s, 0, s.length);
          n.write(r, s, 0, i, void 0, t.canOwn);
        } else if (ArrayBuffer.isView(a))
          n.write(r, a, 0, a.byteLength, void 0, t.canOwn);
        else
          throw new Error("Unsupported data type");
        n.close(r);
      },
      cwd: () => n.currentPath,
      chdir(e) {
        var a = n.lookupPath(e, { follow: !0 });
        if (a.node === null)
          throw new n.ErrnoError(44);
        if (!n.isDir(a.node.mode))
          throw new n.ErrnoError(54);
        var t = n.nodePermissions(a.node, "x");
        if (t)
          throw new n.ErrnoError(t);
        n.currentPath = a.path;
      },
      createDefaultDirectories() {
        n.mkdir("/tmp"), n.mkdir("/home"), n.mkdir("/home/web_user");
      },
      createDefaultDevices() {
        n.mkdir("/dev"), n.registerDevice(n.makedev(1, 3), {
          read: () => 0,
          write: (r, s, i, d, l) => d
        }), n.mkdev("/dev/null", n.makedev(1, 3)), B.register(n.makedev(5, 0), B.default_tty_ops), B.register(n.makedev(6, 0), B.default_tty1_ops), n.mkdev("/dev/tty", n.makedev(5, 0)), n.mkdev("/dev/tty1", n.makedev(6, 0));
        var e = new Uint8Array(1024), a = 0, t = () => (a === 0 && (a = Ue(e).byteLength), e[--a]);
        n.createDevice("/dev", "random", t), n.createDevice("/dev", "urandom", t), n.mkdir("/dev/shm"), n.mkdir("/dev/shm/tmp");
      },
      createSpecialDirectories() {
        n.mkdir("/proc");
        var e = n.mkdir("/proc/self");
        n.mkdir("/proc/self/fd"), n.mount(
          {
            mount() {
              var a = n.createNode(e, "fd", 16895, 73);
              return a.node_ops = {
                lookup(t, r) {
                  var s = +r, i = n.getStreamChecked(s), d = {
                    parent: null,
                    mount: { mountpoint: "fake" },
                    node_ops: { readlink: () => i.path }
                  };
                  return d.parent = d, d;
                }
              }, a;
            }
          },
          {},
          "/proc/self/fd"
        );
      },
      createStandardStreams() {
        o.stdin ? n.createDevice("/dev", "stdin", o.stdin) : n.symlink("/dev/tty", "/dev/stdin"), o.stdout ? n.createDevice("/dev", "stdout", null, o.stdout) : n.symlink("/dev/tty", "/dev/stdout"), o.stderr ? n.createDevice("/dev", "stderr", null, o.stderr) : n.symlink("/dev/tty1", "/dev/stderr"), n.open("/dev/stdin", 0), n.open("/dev/stdout", 1), n.open("/dev/stderr", 1);
      },
      ensureErrnoError() {
        n.ErrnoError || (n.ErrnoError = function(a, t) {
          this.name = "ErrnoError", this.node = t, this.setErrno = function(r) {
            this.errno = r;
          }, this.setErrno(a), this.message = "FS error";
        }, n.ErrnoError.prototype = new Error(), n.ErrnoError.prototype.constructor = n.ErrnoError, [44].forEach((e) => {
          n.genericErrors[e] = new n.ErrnoError(e), n.genericErrors[e].stack = "<generic error, no stack>";
        }));
      },
      staticInit() {
        n.ensureErrnoError(), n.nameTable = new Array(4096), n.mount(w, {}, "/"), n.createDefaultDirectories(), n.createDefaultDevices(), n.createSpecialDirectories(), n.filesystems = { MEMFS: w };
      },
      init(e, a, t) {
        n.init.initialized = !0, n.ensureErrnoError(), o.stdin = e || o.stdin, o.stdout = a || o.stdout, o.stderr = t || o.stderr, n.createStandardStreams();
      },
      quit() {
        n.init.initialized = !1;
        for (var e = 0; e < n.streams.length; e++) {
          var a = n.streams[e];
          a && n.close(a);
        }
      },
      findObject(e, a) {
        var t = n.analyzePath(e, a);
        return t.exists ? t.object : null;
      },
      analyzePath(e, a) {
        try {
          var t = n.lookupPath(e, { follow: !a });
          e = t.path;
        } catch {
        }
        var r = {
          isRoot: !1,
          exists: !1,
          error: 0,
          name: null,
          path: null,
          object: null,
          parentExists: !1,
          parentPath: null,
          parentObject: null
        };
        try {
          var t = n.lookupPath(e, { parent: !0 });
          r.parentExists = !0, r.parentPath = t.path, r.parentObject = t.node, r.name = P.basename(e), t = n.lookupPath(e, { follow: !a }), r.exists = !0, r.path = t.path, r.object = t.node, r.name = t.node.name, r.isRoot = t.path === "/";
        } catch (s) {
          r.error = s.errno;
        }
        return r;
      },
      createPath(e, a, t, r) {
        e = typeof e == "string" ? e : n.getPath(e);
        for (var s = a.split("/").reverse(); s.length; ) {
          var i = s.pop();
          if (i) {
            var d = P.join2(e, i);
            try {
              n.mkdir(d);
            } catch {
            }
            e = d;
          }
        }
        return d;
      },
      createFile(e, a, t, r, s) {
        var i = P.join2(typeof e == "string" ? e : n.getPath(e), a), d = be(r, s);
        return n.create(i, d);
      },
      createDataFile(e, a, t, r, s, i) {
        var d = a;
        e && (e = typeof e == "string" ? e : n.getPath(e), d = a ? P.join2(e, a) : e);
        var l = be(r, s), m = n.create(d, l);
        if (t) {
          if (typeof t == "string") {
            for (var v = new Array(t.length), y = 0, h = t.length; y < h; ++y) v[y] = t.charCodeAt(y);
            t = v;
          }
          n.chmod(m, l | 146);
          var g = n.open(m, 577);
          n.write(g, t, 0, t.length, 0, i), n.close(g), n.chmod(m, l);
        }
        return m;
      },
      createDevice(e, a, t, r) {
        var s = P.join2(typeof e == "string" ? e : n.getPath(e), a), i = be(!!t, !!r);
        n.createDevice.major || (n.createDevice.major = 64);
        var d = n.makedev(n.createDevice.major++, 0);
        return n.registerDevice(d, {
          open(l) {
            l.seekable = !1;
          },
          close(l) {
            r && r.buffer && r.buffer.length && r(10);
          },
          read(l, m, v, y, h) {
            for (var g = 0, p = 0; p < y; p++) {
              var _;
              try {
                _ = t();
              } catch {
                throw new n.ErrnoError(29);
              }
              if (_ === void 0 && g === 0)
                throw new n.ErrnoError(6);
              if (_ == null) break;
              g++, m[v + p] = _;
            }
            return g && (l.node.timestamp = Date.now()), g;
          },
          write(l, m, v, y, h) {
            for (var g = 0; g < y; g++)
              try {
                r(m[v + g]);
              } catch {
                throw new n.ErrnoError(29);
              }
            return y && (l.node.timestamp = Date.now()), g;
          }
        }), n.mkdev(s, i, d);
      },
      forceLoadFile(e) {
        if (e.isDevice || e.isFolder || e.link || e.contents) return !0;
        if (typeof XMLHttpRequest < "u")
          throw new Error(
            "Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread."
          );
        if (G)
          try {
            e.contents = le(G(e.url), !0), e.usedBytes = e.contents.length;
          } catch {
            throw new n.ErrnoError(29);
          }
        else
          throw new Error("Cannot load without read() or XMLHttpRequest.");
      },
      createLazyFile(e, a, t, r, s) {
        function i() {
          this.lengthKnown = !1, this.chunks = [];
        }
        if (i.prototype.get = function(p) {
          if (!(p > this.length - 1 || p < 0)) {
            var _ = p % this.chunkSize, E = p / this.chunkSize | 0;
            return this.getter(E)[_];
          }
        }, i.prototype.setDataGetter = function(p) {
          this.getter = p;
        }, i.prototype.cacheLength = function() {
          var p = new XMLHttpRequest();
          if (p.open("HEAD", t, !1), p.send(null), !(p.status >= 200 && p.status < 300 || p.status === 304))
            throw new Error("Couldn't load " + t + ". Status: " + p.status);
          var _ = Number(p.getResponseHeader("Content-length")), E, b = (E = p.getResponseHeader("Accept-Ranges")) && E === "bytes", S = (E = p.getResponseHeader("Content-Encoding")) && E === "gzip", f = 1024 * 1024;
          b || (f = _);
          var c = (D, x) => {
            if (D > x)
              throw new Error("invalid range (" + D + ", " + x + ") or no bytes requested!");
            if (x > _ - 1)
              throw new Error("only " + _ + " bytes available! programmer error!");
            var R = new XMLHttpRequest();
            if (R.open("GET", t, !1), _ !== f && R.setRequestHeader("Range", "bytes=" + D + "-" + x), R.responseType = "arraybuffer", R.overrideMimeType && R.overrideMimeType("text/plain; charset=x-user-defined"), R.send(null), !(R.status >= 200 && R.status < 300 || R.status === 304))
              throw new Error("Couldn't load " + t + ". Status: " + R.status);
            return R.response !== void 0 ? new Uint8Array(R.response || []) : le(R.responseText || "", !0);
          }, z = this;
          z.setDataGetter((D) => {
            var x = D * f, R = (D + 1) * f - 1;
            if (R = Math.min(R, _ - 1), typeof z.chunks[D] > "u" && (z.chunks[D] = c(x, R)), typeof z.chunks[D] > "u") throw new Error("doXHR failed!");
            return z.chunks[D];
          }), (S || !_) && (f = _ = 1, _ = this.getter(0).length, f = _, ke("LazyFiles on gzip forces download of the whole file when length is accessed")), this._length = _, this._chunkSize = f, this.lengthKnown = !0;
        }, typeof XMLHttpRequest < "u") {
          if (!q)
            throw "Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc";
          var d = new i();
          Object.defineProperties(d, {
            length: {
              get: function() {
                return this.lengthKnown || this.cacheLength(), this._length;
              }
            },
            chunkSize: {
              get: function() {
                return this.lengthKnown || this.cacheLength(), this._chunkSize;
              }
            }
          });
          var l = { isDevice: !1, contents: d };
        } else
          var l = { isDevice: !1, url: t };
        var m = n.createFile(e, a, l, r, s);
        l.contents ? m.contents = l.contents : l.url && (m.contents = null, m.url = l.url), Object.defineProperties(m, {
          usedBytes: {
            get: function() {
              return this.contents.length;
            }
          }
        });
        var v = {}, y = Object.keys(m.stream_ops);
        y.forEach((g) => {
          var p = m.stream_ops[g];
          v[g] = function() {
            return n.forceLoadFile(m), p.apply(null, arguments);
          };
        });
        function h(g, p, _, E, b) {
          var S = g.node.contents;
          if (b >= S.length) return 0;
          var f = Math.min(S.length - b, E);
          if (S.slice)
            for (var c = 0; c < f; c++)
              p[_ + c] = S[b + c];
          else
            for (var c = 0; c < f; c++)
              p[_ + c] = S.get(b + c);
          return f;
        }
        return v.read = (g, p, _, E, b) => (n.forceLoadFile(m), h(g, p, _, E, b)), v.mmap = (g, p, _, E, b) => {
          n.forceLoadFile(m);
          var S = Be();
          if (!S)
            throw new n.ErrnoError(48);
          return h(g, T, S, p, _), { ptr: S, allocated: !0 };
        }, m.stream_ops = v, m;
      }
    }, F = {
      DEFAULT_POLLMASK: 5,
      calculateAt(e, a, t) {
        if (P.isAbs(a))
          return a;
        var r;
        if (e === -100)
          r = n.cwd();
        else {
          var s = F.getStreamFromFD(e);
          r = s.path;
        }
        if (a.length == 0) {
          if (!t)
            throw new n.ErrnoError(44);
          return r;
        }
        return P.join2(r, a);
      },
      doStat(e, a, t) {
        try {
          var r = e(a);
        } catch (l) {
          if (l && l.node && P.normalize(a) !== P.normalize(n.getPath(l.node)))
            return -54;
          throw l;
        }
        k[t >> 2] = r.dev, k[t + 4 >> 2] = r.mode, A[t + 8 >> 2] = r.nlink, k[t + 12 >> 2] = r.uid, k[t + 16 >> 2] = r.gid, k[t + 20 >> 2] = r.rdev, M = [
          r.size >>> 0,
          (u = r.size, +Math.abs(u) >= 1 ? u > 0 ? +Math.floor(u / 4294967296) >>> 0 : ~~+Math.ceil((u - +(~~u >>> 0)) / 4294967296) >>> 0 : 0)
        ], k[t + 24 >> 2] = M[0], k[t + 28 >> 2] = M[1], k[t + 32 >> 2] = 4096, k[t + 36 >> 2] = r.blocks;
        var s = r.atime.getTime(), i = r.mtime.getTime(), d = r.ctime.getTime();
        return M = [
          Math.floor(s / 1e3) >>> 0,
          (u = Math.floor(s / 1e3), +Math.abs(u) >= 1 ? u > 0 ? +Math.floor(u / 4294967296) >>> 0 : ~~+Math.ceil((u - +(~~u >>> 0)) / 4294967296) >>> 0 : 0)
        ], k[t + 40 >> 2] = M[0], k[t + 44 >> 2] = M[1], A[t + 48 >> 2] = s % 1e3 * 1e3, M = [
          Math.floor(i / 1e3) >>> 0,
          (u = Math.floor(i / 1e3), +Math.abs(u) >= 1 ? u > 0 ? +Math.floor(u / 4294967296) >>> 0 : ~~+Math.ceil((u - +(~~u >>> 0)) / 4294967296) >>> 0 : 0)
        ], k[t + 56 >> 2] = M[0], k[t + 60 >> 2] = M[1], A[t + 64 >> 2] = i % 1e3 * 1e3, M = [
          Math.floor(d / 1e3) >>> 0,
          (u = Math.floor(d / 1e3), +Math.abs(u) >= 1 ? u > 0 ? +Math.floor(u / 4294967296) >>> 0 : ~~+Math.ceil((u - +(~~u >>> 0)) / 4294967296) >>> 0 : 0)
        ], k[t + 72 >> 2] = M[0], k[t + 76 >> 2] = M[1], A[t + 80 >> 2] = d % 1e3 * 1e3, M = [
          r.ino >>> 0,
          (u = r.ino, +Math.abs(u) >= 1 ? u > 0 ? +Math.floor(u / 4294967296) >>> 0 : ~~+Math.ceil((u - +(~~u >>> 0)) / 4294967296) >>> 0 : 0)
        ], k[t + 88 >> 2] = M[0], k[t + 92 >> 2] = M[1], 0;
      },
      doMsync(e, a, t, r, s) {
        if (!n.isFile(a.node.mode))
          throw new n.ErrnoError(43);
        if (r & 2)
          return 0;
        var i = H.slice(e, e + t);
        n.msync(a, i, s, t, r);
      },
      varargs: void 0,
      get() {
        var e = k[+F.varargs >> 2];
        return F.varargs += 4, e;
      },
      getp() {
        return F.get();
      },
      getStr(e) {
        var a = W(e);
        return a;
      },
      getStreamFromFD(e) {
        var a = n.getStreamChecked(e);
        return a;
      }
    };
    function Pa(e, a, t) {
      F.varargs = t;
      try {
        var r = F.getStreamFromFD(e);
        switch (a) {
          case 0: {
            var s = F.get();
            if (s < 0)
              return -28;
            for (; n.streams[s]; )
              s++;
            var i;
            return i = n.createStream(r, s), i.fd;
          }
          case 1:
          case 2:
            return 0;
          case 3:
            return r.flags;
          case 4: {
            var s = F.get();
            return r.flags |= s, 0;
          }
          case 5: {
            var s = F.getp(), d = 0;
            return V[s + d >> 1] = 2, 0;
          }
          case 6:
          case 7:
            return 0;
          case 16:
          case 8:
            return -28;
          case 9:
            return ka(28), -1;
          default:
            return -28;
        }
      } catch (l) {
        if (typeof n > "u" || l.name !== "ErrnoError") throw l;
        return -l.errno;
      }
    }
    var qe = (e, a, t) => ye(e, H, a, t);
    function Da(e, a, t) {
      try {
        var r = F.getStreamFromFD(e);
        r.getdents || (r.getdents = n.readdir(r.path));
        for (var s = 280, i = 0, d = n.llseek(r, 0, 1), l = Math.floor(d / s); l < r.getdents.length && i + s <= t; ) {
          var m, v, y = r.getdents[l];
          if (y === ".")
            m = r.node.id, v = 4;
          else if (y === "..") {
            var h = n.lookupPath(r.path, { parent: !0 });
            m = h.node.id, v = 4;
          } else {
            var g = n.lookupNode(r.node, y);
            m = g.id, v = n.isChrdev(g.mode) ? 2 : n.isDir(g.mode) ? 4 : n.isLink(g.mode) ? 10 : 8;
          }
          M = [
            m >>> 0,
            (u = m, +Math.abs(u) >= 1 ? u > 0 ? +Math.floor(u / 4294967296) >>> 0 : ~~+Math.ceil((u - +(~~u >>> 0)) / 4294967296) >>> 0 : 0)
          ], k[a + i >> 2] = M[0], k[a + i + 4 >> 2] = M[1], M = [
            (l + 1) * s >>> 0,
            (u = (l + 1) * s, +Math.abs(u) >= 1 ? u > 0 ? +Math.floor(u / 4294967296) >>> 0 : ~~+Math.ceil((u - +(~~u >>> 0)) / 4294967296) >>> 0 : 0)
          ], k[a + i + 8 >> 2] = M[0], k[a + i + 12 >> 2] = M[1], V[a + i + 16 >> 1] = 280, T[a + i + 18 >> 0] = v, qe(y, a + i + 19, 256), i += s, l += 1;
        }
        return n.llseek(r, l * s, 0), i;
      } catch (p) {
        if (typeof n > "u" || p.name !== "ErrnoError") throw p;
        return -p.errno;
      }
    }
    function Aa(e, a, t) {
      F.varargs = t;
      try {
        var r = F.getStreamFromFD(e);
        switch (a) {
          case 21509:
            return r.tty ? 0 : -59;
          case 21505: {
            if (!r.tty) return -59;
            if (r.tty.ops.ioctl_tcgets) {
              var s = r.tty.ops.ioctl_tcgets(r), i = F.getp();
              k[i >> 2] = s.c_iflag || 0, k[i + 4 >> 2] = s.c_oflag || 0, k[i + 8 >> 2] = s.c_cflag || 0, k[i + 12 >> 2] = s.c_lflag || 0;
              for (var d = 0; d < 32; d++)
                T[i + d + 17 >> 0] = s.c_cc[d] || 0;
              return 0;
            }
            return 0;
          }
          case 21510:
          case 21511:
          case 21512:
            return r.tty ? 0 : -59;
          case 21506:
          case 21507:
          case 21508: {
            if (!r.tty) return -59;
            if (r.tty.ops.ioctl_tcsets) {
              for (var i = F.getp(), l = k[i >> 2], m = k[i + 4 >> 2], v = k[i + 8 >> 2], y = k[i + 12 >> 2], h = [], d = 0; d < 32; d++)
                h.push(T[i + d + 17 >> 0]);
              return r.tty.ops.ioctl_tcsets(r.tty, a, {
                c_iflag: l,
                c_oflag: m,
                c_cflag: v,
                c_lflag: y,
                c_cc: h
              });
            }
            return 0;
          }
          case 21519: {
            if (!r.tty) return -59;
            var i = F.getp();
            return k[i >> 2] = 0, 0;
          }
          case 21520:
            return r.tty ? -28 : -59;
          case 21531: {
            var i = F.getp();
            return n.ioctl(r, a, i);
          }
          case 21523: {
            if (!r.tty) return -59;
            if (r.tty.ops.ioctl_tiocgwinsz) {
              var g = r.tty.ops.ioctl_tiocgwinsz(r.tty), i = F.getp();
              V[i >> 1] = g[0], V[i + 2 >> 1] = g[1];
            }
            return 0;
          }
          case 21524:
            return r.tty ? 0 : -59;
          case 21515:
            return r.tty ? 0 : -59;
          default:
            return -28;
        }
      } catch (p) {
        if (typeof n > "u" || p.name !== "ErrnoError") throw p;
        return -p.errno;
      }
    }
    function Ma(e, a, t, r) {
      F.varargs = r;
      try {
        a = F.getStr(a), a = F.calculateAt(e, a);
        var s = r ? F.get() : 0;
        return n.open(a, t, s).fd;
      } catch (i) {
        if (typeof n > "u" || i.name !== "ErrnoError") throw i;
        return -i.errno;
      }
    }
    function Ra(e) {
      try {
        return e = F.getStr(e), n.rmdir(e), 0;
      } catch (a) {
        if (typeof n > "u" || a.name !== "ErrnoError") throw a;
        return -a.errno;
      }
    }
    function za(e, a) {
      try {
        return e = F.getStr(e), F.doStat(n.stat, e, a);
      } catch (t) {
        if (typeof n > "u" || t.name !== "ErrnoError") throw t;
        return -t.errno;
      }
    }
    function Ta(e, a, t) {
      try {
        return a = F.getStr(a), a = F.calculateAt(e, a), t === 0 ? n.unlink(a) : t === 512 ? n.rmdir(a) : L("Invalid flags passed to unlinkat"), 0;
      } catch (r) {
        if (typeof n > "u" || r.name !== "ErrnoError") throw r;
        return -r.errno;
      }
    }
    var Na = !0, xa = () => Na, Ca = () => {
      L("");
    }, La = () => Date.now(), Oa = (e, a, t) => H.copyWithin(e, a, a + t), ja = (e) => {
      L("OOM");
    }, Ua = (e) => {
      H.length, ja();
    }, Ee = {}, Ba = () => ae || "./this.program", Z = () => {
      if (!Z.strings) {
        var e = (typeof navigator == "object" && navigator.languages && navigator.languages[0] || "C").replace("-", "_") + ".UTF-8", a = {
          USER: "web_user",
          LOGNAME: "web_user",
          PATH: "/",
          PWD: "/",
          HOME: "/home/web_user",
          LANG: e,
          _: Ba()
        };
        for (var t in Ee)
          Ee[t] === void 0 ? delete a[t] : a[t] = Ee[t];
        var r = [];
        for (var t in a)
          r.push(`${t}=${a[t]}`);
        Z.strings = r;
      }
      return Z.strings;
    }, qa = (e, a) => {
      for (var t = 0; t < e.length; ++t)
        T[a++ >> 0] = e.charCodeAt(t);
      T[a >> 0] = 0;
    }, Ha = (e, a) => {
      var t = 0;
      return Z().forEach((r, s) => {
        var i = a + t;
        A[e + s * 4 >> 2] = i, qa(r, i), t += r.length + 1;
      }), 0;
    }, Ia = (e, a) => {
      var t = Z();
      A[e >> 2] = t.length;
      var r = 0;
      return t.forEach((s) => r += s.length + 1), A[a >> 2] = r, 0;
    }, Ya = 0, Wa = () => pa || Ya > 0, Ga = (e) => {
      se = e, Wa() || (o.onExit && o.onExit(e), he = !0), te(e, new Le(e));
    }, He = (e, a) => {
      se = e, Ga(e);
    }, $a = He;
    function Xa(e) {
      try {
        var a = F.getStreamFromFD(e);
        return n.close(a), 0;
      } catch (t) {
        if (typeof n > "u" || t.name !== "ErrnoError") throw t;
        return t.errno;
      }
    }
    var Va = (e, a, t, r) => {
      for (var s = 0, i = 0; i < t; i++) {
        var d = A[a >> 2], l = A[a + 4 >> 2];
        a += 8;
        var m = n.read(e, T, d, l, r);
        if (m < 0) return -1;
        if (s += m, m < l) break;
      }
      return s;
    };
    function Ka(e, a, t, r) {
      try {
        var s = F.getStreamFromFD(e), i = Va(s, a, t);
        return A[r >> 2] = i, 0;
      } catch (d) {
        if (typeof n > "u" || d.name !== "ErrnoError") throw d;
        return d.errno;
      }
    }
    var Ja = (e, a) => a + 2097152 >>> 0 < 4194305 - !!e ? (e >>> 0) + a * 4294967296 : NaN;
    function Za(e, a, t, r, s) {
      var i = Ja(a, t);
      try {
        if (isNaN(i)) return 61;
        var d = F.getStreamFromFD(e);
        return n.llseek(d, i, r), M = [
          d.position >>> 0,
          (u = d.position, +Math.abs(u) >= 1 ? u > 0 ? +Math.floor(u / 4294967296) >>> 0 : ~~+Math.ceil((u - +(~~u >>> 0)) / 4294967296) >>> 0 : 0)
        ], k[s >> 2] = M[0], k[s + 4 >> 2] = M[1], d.getdents && i === 0 && r === 0 && (d.getdents = null), 0;
      } catch (l) {
        if (typeof n > "u" || l.name !== "ErrnoError") throw l;
        return l.errno;
      }
    }
    var Qa = (e, a, t, r) => {
      for (var s = 0, i = 0; i < t; i++) {
        var d = A[a >> 2], l = A[a + 4 >> 2];
        a += 8;
        var m = n.write(e, T, d, l, r);
        if (m < 0) return -1;
        s += m;
      }
      return s;
    };
    function et(e, a, t, r) {
      try {
        var s = F.getStreamFromFD(e), i = Qa(s, a, t);
        return A[r >> 2] = i, 0;
      } catch (d) {
        if (typeof n > "u" || d.name !== "ErrnoError") throw d;
        return d.errno;
      }
    }
    var fe = (e) => e % 4 === 0 && (e % 100 !== 0 || e % 400 === 0), at = (e, a) => {
      for (var t = 0, r = 0; r <= a; t += e[r++])
        ;
      return t;
    }, Ie = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], Ye = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], tt = (e, a) => {
      for (var t = new Date(e.getTime()); a > 0; ) {
        var r = fe(t.getFullYear()), s = t.getMonth(), i = (r ? Ie : Ye)[s];
        if (a > i - t.getDate())
          a -= i - t.getDate() + 1, t.setDate(1), s < 11 ? t.setMonth(s + 1) : (t.setMonth(0), t.setFullYear(t.getFullYear() + 1));
        else
          return t.setDate(t.getDate() + a), t;
      }
      return t;
    }, nt = (e, a) => {
      T.set(e, a);
    }, rt = (e, a, t, r) => {
      var s = A[r + 40 >> 2], i = {
        tm_sec: k[r >> 2],
        tm_min: k[r + 4 >> 2],
        tm_hour: k[r + 8 >> 2],
        tm_mday: k[r + 12 >> 2],
        tm_mon: k[r + 16 >> 2],
        tm_year: k[r + 20 >> 2],
        tm_wday: k[r + 24 >> 2],
        tm_yday: k[r + 28 >> 2],
        tm_isdst: k[r + 32 >> 2],
        tm_gmtoff: k[r + 36 >> 2],
        tm_zone: s ? W(s) : ""
      }, d = W(t), l = {
        "%c": "%a %b %d %H:%M:%S %Y",
        "%D": "%m/%d/%y",
        "%F": "%Y-%m-%d",
        "%h": "%b",
        "%r": "%I:%M:%S %p",
        "%R": "%H:%M",
        "%T": "%H:%M:%S",
        "%x": "%m/%d/%y",
        "%X": "%H:%M:%S",
        "%Ec": "%c",
        "%EC": "%C",
        "%Ex": "%m/%d/%y",
        "%EX": "%H:%M:%S",
        "%Ey": "%y",
        "%EY": "%Y",
        "%Od": "%d",
        "%Oe": "%e",
        "%OH": "%H",
        "%OI": "%I",
        "%Om": "%m",
        "%OM": "%M",
        "%OS": "%S",
        "%Ou": "%u",
        "%OU": "%U",
        "%OV": "%V",
        "%Ow": "%w",
        "%OW": "%W",
        "%Oy": "%y"
      };
      for (var m in l)
        d = d.replace(new RegExp(m, "g"), l[m]);
      var v = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], y = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
      ];
      function h(f, c, z) {
        for (var D = typeof f == "number" ? f.toString() : f || ""; D.length < c; )
          D = z[0] + D;
        return D;
      }
      function g(f, c) {
        return h(f, c, "0");
      }
      function p(f, c) {
        function z(x) {
          return x < 0 ? -1 : x > 0 ? 1 : 0;
        }
        var D;
        return (D = z(f.getFullYear() - c.getFullYear())) === 0 && (D = z(f.getMonth() - c.getMonth())) === 0 && (D = z(f.getDate() - c.getDate())), D;
      }
      function _(f) {
        switch (f.getDay()) {
          case 0:
            return new Date(f.getFullYear() - 1, 11, 29);
          case 1:
            return f;
          case 2:
            return new Date(f.getFullYear(), 0, 3);
          case 3:
            return new Date(f.getFullYear(), 0, 2);
          case 4:
            return new Date(f.getFullYear(), 0, 1);
          case 5:
            return new Date(f.getFullYear() - 1, 11, 31);
          case 6:
            return new Date(f.getFullYear() - 1, 11, 30);
        }
      }
      function E(f) {
        var c = tt(new Date(f.tm_year + 1900, 0, 1), f.tm_yday), z = new Date(c.getFullYear(), 0, 4), D = new Date(c.getFullYear() + 1, 0, 4), x = _(z), R = _(D);
        return p(x, c) <= 0 ? p(R, c) <= 0 ? c.getFullYear() + 1 : c.getFullYear() : c.getFullYear() - 1;
      }
      var b = {
        "%a": (f) => v[f.tm_wday].substring(0, 3),
        "%A": (f) => v[f.tm_wday],
        "%b": (f) => y[f.tm_mon].substring(0, 3),
        "%B": (f) => y[f.tm_mon],
        "%C": (f) => {
          var c = f.tm_year + 1900;
          return g(c / 100 | 0, 2);
        },
        "%d": (f) => g(f.tm_mday, 2),
        "%e": (f) => h(f.tm_mday, 2, " "),
        "%g": (f) => E(f).toString().substring(2),
        "%G": (f) => E(f),
        "%H": (f) => g(f.tm_hour, 2),
        "%I": (f) => {
          var c = f.tm_hour;
          return c == 0 ? c = 12 : c > 12 && (c -= 12), g(c, 2);
        },
        "%j": (f) => g(
          f.tm_mday + at(
            fe(f.tm_year + 1900) ? Ie : Ye,
            f.tm_mon - 1
          ),
          3
        ),
        "%m": (f) => g(f.tm_mon + 1, 2),
        "%M": (f) => g(f.tm_min, 2),
        "%n": () => `
`,
        "%p": (f) => f.tm_hour >= 0 && f.tm_hour < 12 ? "AM" : "PM",
        "%S": (f) => g(f.tm_sec, 2),
        "%t": () => "	",
        "%u": (f) => f.tm_wday || 7,
        "%U": (f) => {
          var c = f.tm_yday + 7 - f.tm_wday;
          return g(Math.floor(c / 7), 2);
        },
        "%V": (f) => {
          var c = Math.floor((f.tm_yday + 7 - (f.tm_wday + 6) % 7) / 7);
          if ((f.tm_wday + 371 - f.tm_yday - 2) % 7 <= 2 && c++, c) {
            if (c == 53) {
              var D = (f.tm_wday + 371 - f.tm_yday) % 7;
              D != 4 && (D != 3 || !fe(f.tm_year)) && (c = 1);
            }
          } else {
            c = 52;
            var z = (f.tm_wday + 7 - f.tm_yday - 1) % 7;
            (z == 4 || z == 5 && fe(f.tm_year % 400 - 1)) && c++;
          }
          return g(c, 2);
        },
        "%w": (f) => f.tm_wday,
        "%W": (f) => {
          var c = f.tm_yday + 7 - (f.tm_wday + 6) % 7;
          return g(Math.floor(c / 7), 2);
        },
        "%y": (f) => (f.tm_year + 1900).toString().substring(2),
        "%Y": (f) => f.tm_year + 1900,
        "%z": (f) => {
          var c = f.tm_gmtoff, z = c >= 0;
          return c = Math.abs(c) / 60, c = c / 60 * 100 + c % 60, (z ? "+" : "-") + ("0000" + c).slice(-4);
        },
        "%Z": (f) => f.tm_zone,
        "%%": () => "%"
      };
      d = d.replace(/%%/g, "\0\0");
      for (var m in b)
        d.includes(m) && (d = d.replace(new RegExp(m, "g"), b[m](i)));
      d = d.replace(/\0\0/g, "%");
      var S = le(d, !1);
      return S.length > a ? 0 : (nt(S, e), S.length - 1);
    }, st = (e, a, t, r, s) => rt(e, a, t, r), it = (e) => {
      if (e instanceof Le || e == "unwind")
        return se;
      te(1, e);
    }, ot = (e) => {
      var a = we(e) + 1, t = Se(a);
      return qe(e, t, a), t;
    }, We = function(e, a, t, r) {
      e || (e = this), this.parent = e, this.mount = e.mount, this.mounted = null, this.id = n.nextInode++, this.name = a, this.mode = t, this.node_ops = {}, this.stream_ops = {}, this.rdev = r;
    }, me = 365, ce = 146;
    Object.defineProperties(We.prototype, {
      read: {
        get: function() {
          return (this.mode & me) === me;
        },
        set: function(e) {
          e ? this.mode |= me : this.mode &= ~me;
        }
      },
      write: {
        get: function() {
          return (this.mode & ce) === ce;
        },
        set: function(e) {
          e ? this.mode |= ce : this.mode &= ~ce;
        }
      },
      isFolder: {
        get: function() {
          return n.isDir(this.mode);
        }
      },
      isDevice: {
        get: function() {
          return n.isChrdev(this.mode);
        }
      }
    }), n.FSNode = We, n.createPreloadedFile = Sa, n.staticInit(), o.FS_createPath = n.createPath, o.FS_createDataFile = n.createDataFile, o.FS_createPreloadedFile = n.createPreloadedFile, o.FS_unlink = n.unlink, o.FS_createLazyFile = n.createLazyFile, o.FS_createDevice = n.createDevice;
    var dt = {
      a: ga,
      b: va,
      e: Pa,
      r: Da,
      v: Aa,
      f: Ma,
      p: Ra,
      o: za,
      q: Ta,
      j: xa,
      h: Ca,
      g: La,
      k: Oa,
      n: Ua,
      s: Ha,
      t: Ia,
      d: $a,
      c: Xa,
      u: Ka,
      l: Za,
      i: et,
      m: st
    }, j = ca(), Ge = o._main = (e, a) => (Ge = o._main = j.y)(e, a), $e = () => ($e = j.z)(), Se = (e) => (Se = j.B)(e), Xe = (e) => (Xe = j.C)(e);
    o.addRunDependency = ie, o.removeRunDependency = J, o.FS_createPath = n.createPath, o.FS_createLazyFile = n.createLazyFile, o.FS_createDevice = n.createDevice, o.callMain = Ve, o.FS_createPreloadedFile = n.createPreloadedFile, o.FS = n, o.FS_createDataFile = n.createDataFile, o.FS_unlink = n.unlink;
    var pe;
    K = function e() {
      pe || Ke(), pe || (K = e);
    };
    function Ve(e = []) {
      var a = Ge;
      e.unshift(ae);
      var t = e.length, r = Se((t + 1) * 4), s = r;
      e.forEach((d) => {
        A[s >> 2] = ot(d), s += 4;
      }), A[s >> 2] = 0;
      try {
        var i = a(t, r);
        return He(i, !0), i;
      } catch (d) {
        return it(d);
      }
    }
    function Ke(e = ge) {
      if (U > 0 || (ta(), U > 0))
        return;
      function a() {
        pe || (pe = !0, o.calledRun = !0, !he && (na(), ra(), Pe(o), o.onRuntimeInitialized && o.onRuntimeInitialized(), Je && Ve(e), sa()));
      }
      o.setStatus ? (o.setStatus("Running..."), setTimeout(function() {
        setTimeout(function() {
          o.setStatus("");
        }, 1), a();
      }, 1)) : a();
    }
    if (o.preInit)
      for (typeof o.preInit == "function" && (o.preInit = [o.preInit]); o.preInit.length > 0; )
        o.preInit.pop()();
    var Je = !1;
    return o.noInitialRun && (Je = !1), Ke(), Fe.ready;
  };
})();
export {
  ft as createPiperPhonemize
};
