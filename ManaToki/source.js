(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.Sources = f()}})(function(){var define,module,exports;return (function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
/**
 * Request objects hold information for a particular source (see sources for example)
 * This allows us to to use a generic api to make the calls against any source
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.urlEncodeObject = exports.convertTime = exports.Source = void 0;
class Source {
    constructor(cheerio) {
        this.cheerio = cheerio;
    }
    /**
     * @deprecated use {@link Source.getSearchResults getSearchResults} instead
     */
    searchRequest(query, metadata) {
        return this.getSearchResults(query, metadata);
    }
    /**
     * @deprecated use {@link Source.getSearchTags} instead
     */
    async getTags() {
        // @ts-ignore
        return this.getSearchTags?.();
    }
}
exports.Source = Source;
// Many sites use '[x] time ago' - Figured it would be good to handle these cases in general
function convertTime(timeAgo) {
    let time;
    let trimmed = Number((/\d*/.exec(timeAgo) ?? [])[0]);
    trimmed = (trimmed == 0 && timeAgo.includes('a')) ? 1 : trimmed;
    if (timeAgo.includes('minutes')) {
        time = new Date(Date.now() - trimmed * 60000);
    }
    else if (timeAgo.includes('hours')) {
        time = new Date(Date.now() - trimmed * 3600000);
    }
    else if (timeAgo.includes('days')) {
        time = new Date(Date.now() - trimmed * 86400000);
    }
    else if (timeAgo.includes('year') || timeAgo.includes('years')) {
        time = new Date(Date.now() - trimmed * 31556952000);
    }
    else {
        time = new Date(Date.now());
    }
    return time;
}
exports.convertTime = convertTime;
/**
 * When a function requires a POST body, it always should be defined as a JsonObject
 * and then passed through this function to ensure that it's encoded properly.
 * @param obj
 */
function urlEncodeObject(obj) {
    let ret = {};
    for (const entry of Object.entries(obj)) {
        ret[encodeURIComponent(entry[0])] = encodeURIComponent(entry[1]);
    }
    return ret;
}
exports.urlEncodeObject = urlEncodeObject;

},{}],2:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tracker = void 0;
class Tracker {
    constructor(cheerio) {
        this.cheerio = cheerio;
    }
}
exports.Tracker = Tracker;

},{}],3:[function(require,module,exports){
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(require("./Source"), exports);
__exportStar(require("./Tracker"), exports);

},{"./Source":1,"./Tracker":2}],4:[function(require,module,exports){
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(require("./base"), exports);
__exportStar(require("./models"), exports);

},{"./base":3,"./models":47}],5:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],6:[function(require,module,exports){
arguments[4][5][0].apply(exports,arguments)
},{"dup":5}],7:[function(require,module,exports){
arguments[4][5][0].apply(exports,arguments)
},{"dup":5}],8:[function(require,module,exports){
arguments[4][5][0].apply(exports,arguments)
},{"dup":5}],9:[function(require,module,exports){
arguments[4][5][0].apply(exports,arguments)
},{"dup":5}],10:[function(require,module,exports){
arguments[4][5][0].apply(exports,arguments)
},{"dup":5}],11:[function(require,module,exports){
arguments[4][5][0].apply(exports,arguments)
},{"dup":5}],12:[function(require,module,exports){
arguments[4][5][0].apply(exports,arguments)
},{"dup":5}],13:[function(require,module,exports){
arguments[4][5][0].apply(exports,arguments)
},{"dup":5}],14:[function(require,module,exports){
arguments[4][5][0].apply(exports,arguments)
},{"dup":5}],15:[function(require,module,exports){
arguments[4][5][0].apply(exports,arguments)
},{"dup":5}],16:[function(require,module,exports){
arguments[4][5][0].apply(exports,arguments)
},{"dup":5}],17:[function(require,module,exports){
arguments[4][5][0].apply(exports,arguments)
},{"dup":5}],18:[function(require,module,exports){
arguments[4][5][0].apply(exports,arguments)
},{"dup":5}],19:[function(require,module,exports){
arguments[4][5][0].apply(exports,arguments)
},{"dup":5}],20:[function(require,module,exports){
arguments[4][5][0].apply(exports,arguments)
},{"dup":5}],21:[function(require,module,exports){
arguments[4][5][0].apply(exports,arguments)
},{"dup":5}],22:[function(require,module,exports){
arguments[4][5][0].apply(exports,arguments)
},{"dup":5}],23:[function(require,module,exports){
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(require("./Button"), exports);
__exportStar(require("./Form"), exports);
__exportStar(require("./Header"), exports);
__exportStar(require("./InputField"), exports);
__exportStar(require("./Label"), exports);
__exportStar(require("./Link"), exports);
__exportStar(require("./MultilineLabel"), exports);
__exportStar(require("./NavigationButton"), exports);
__exportStar(require("./OAuthButton"), exports);
__exportStar(require("./Section"), exports);
__exportStar(require("./Select"), exports);
__exportStar(require("./Switch"), exports);
__exportStar(require("./WebViewButton"), exports);
__exportStar(require("./FormRow"), exports);
__exportStar(require("./Stepper"), exports);

},{"./Button":8,"./Form":9,"./FormRow":10,"./Header":11,"./InputField":12,"./Label":13,"./Link":14,"./MultilineLabel":15,"./NavigationButton":16,"./OAuthButton":17,"./Section":18,"./Select":19,"./Stepper":20,"./Switch":21,"./WebViewButton":22}],24:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomeSectionType = void 0;
var HomeSectionType;
(function (HomeSectionType) {
    HomeSectionType["singleRowNormal"] = "singleRowNormal";
    HomeSectionType["singleRowLarge"] = "singleRowLarge";
    HomeSectionType["doubleRow"] = "doubleRow";
    HomeSectionType["featured"] = "featured";
})(HomeSectionType = exports.HomeSectionType || (exports.HomeSectionType = {}));

},{}],25:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LanguageCode = void 0;
var LanguageCode;
(function (LanguageCode) {
    LanguageCode["UNKNOWN"] = "_unknown";
    LanguageCode["BENGALI"] = "bd";
    LanguageCode["BULGARIAN"] = "bg";
    LanguageCode["BRAZILIAN"] = "br";
    LanguageCode["CHINEESE"] = "cn";
    LanguageCode["CZECH"] = "cz";
    LanguageCode["GERMAN"] = "de";
    LanguageCode["DANISH"] = "dk";
    LanguageCode["ENGLISH"] = "gb";
    LanguageCode["SPANISH"] = "es";
    LanguageCode["FINNISH"] = "fi";
    LanguageCode["FRENCH"] = "fr";
    LanguageCode["WELSH"] = "gb";
    LanguageCode["GREEK"] = "gr";
    LanguageCode["CHINEESE_HONGKONG"] = "hk";
    LanguageCode["HUNGARIAN"] = "hu";
    LanguageCode["INDONESIAN"] = "id";
    LanguageCode["ISRELI"] = "il";
    LanguageCode["INDIAN"] = "in";
    LanguageCode["IRAN"] = "ir";
    LanguageCode["ITALIAN"] = "it";
    LanguageCode["JAPANESE"] = "jp";
    LanguageCode["KOREAN"] = "kr";
    LanguageCode["LITHUANIAN"] = "lt";
    LanguageCode["MONGOLIAN"] = "mn";
    LanguageCode["MEXIAN"] = "mx";
    LanguageCode["MALAY"] = "my";
    LanguageCode["DUTCH"] = "nl";
    LanguageCode["NORWEGIAN"] = "no";
    LanguageCode["PHILIPPINE"] = "ph";
    LanguageCode["POLISH"] = "pl";
    LanguageCode["PORTUGUESE"] = "pt";
    LanguageCode["ROMANIAN"] = "ro";
    LanguageCode["RUSSIAN"] = "ru";
    LanguageCode["SANSKRIT"] = "sa";
    LanguageCode["SAMI"] = "si";
    LanguageCode["THAI"] = "th";
    LanguageCode["TURKISH"] = "tr";
    LanguageCode["UKRAINIAN"] = "ua";
    LanguageCode["VIETNAMESE"] = "vn";
})(LanguageCode = exports.LanguageCode || (exports.LanguageCode = {}));

},{}],26:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MangaStatus = void 0;
var MangaStatus;
(function (MangaStatus) {
    MangaStatus[MangaStatus["ONGOING"] = 1] = "ONGOING";
    MangaStatus[MangaStatus["COMPLETED"] = 0] = "COMPLETED";
    MangaStatus[MangaStatus["UNKNOWN"] = 2] = "UNKNOWN";
    MangaStatus[MangaStatus["ABANDONED"] = 3] = "ABANDONED";
    MangaStatus[MangaStatus["HIATUS"] = 4] = "HIATUS";
})(MangaStatus = exports.MangaStatus || (exports.MangaStatus = {}));

},{}],27:[function(require,module,exports){
arguments[4][5][0].apply(exports,arguments)
},{"dup":5}],28:[function(require,module,exports){
arguments[4][5][0].apply(exports,arguments)
},{"dup":5}],29:[function(require,module,exports){
arguments[4][5][0].apply(exports,arguments)
},{"dup":5}],30:[function(require,module,exports){
arguments[4][5][0].apply(exports,arguments)
},{"dup":5}],31:[function(require,module,exports){
arguments[4][5][0].apply(exports,arguments)
},{"dup":5}],32:[function(require,module,exports){
arguments[4][5][0].apply(exports,arguments)
},{"dup":5}],33:[function(require,module,exports){
arguments[4][5][0].apply(exports,arguments)
},{"dup":5}],34:[function(require,module,exports){
arguments[4][5][0].apply(exports,arguments)
},{"dup":5}],35:[function(require,module,exports){
arguments[4][5][0].apply(exports,arguments)
},{"dup":5}],36:[function(require,module,exports){
arguments[4][5][0].apply(exports,arguments)
},{"dup":5}],37:[function(require,module,exports){
arguments[4][5][0].apply(exports,arguments)
},{"dup":5}],38:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchOperator = void 0;
var SearchOperator;
(function (SearchOperator) {
    SearchOperator["AND"] = "AND";
    SearchOperator["OR"] = "OR";
})(SearchOperator = exports.SearchOperator || (exports.SearchOperator = {}));

},{}],39:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContentRating = void 0;
/**
 * A content rating to be attributed to each source.
 */
var ContentRating;
(function (ContentRating) {
    ContentRating["EVERYONE"] = "EVERYONE";
    ContentRating["MATURE"] = "MATURE";
    ContentRating["ADULT"] = "ADULT";
})(ContentRating = exports.ContentRating || (exports.ContentRating = {}));

},{}],40:[function(require,module,exports){
arguments[4][5][0].apply(exports,arguments)
},{"dup":5}],41:[function(require,module,exports){
arguments[4][5][0].apply(exports,arguments)
},{"dup":5}],42:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagType = void 0;
/**
 * An enumerator which {@link SourceTags} uses to define the color of the tag rendered on the website.
 * Five types are available: blue, green, grey, yellow and red, the default one is blue.
 * Common colors are red for (Broken), yellow for (+18), grey for (Country-Proof)
 */
var TagType;
(function (TagType) {
    TagType["BLUE"] = "default";
    TagType["GREEN"] = "success";
    TagType["GREY"] = "info";
    TagType["YELLOW"] = "warning";
    TagType["RED"] = "danger";
})(TagType = exports.TagType || (exports.TagType = {}));

},{}],43:[function(require,module,exports){
arguments[4][5][0].apply(exports,arguments)
},{"dup":5}],44:[function(require,module,exports){
arguments[4][5][0].apply(exports,arguments)
},{"dup":5}],45:[function(require,module,exports){
arguments[4][5][0].apply(exports,arguments)
},{"dup":5}],46:[function(require,module,exports){
arguments[4][5][0].apply(exports,arguments)
},{"dup":5}],47:[function(require,module,exports){
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(require("./Chapter"), exports);
__exportStar(require("./HomeSection"), exports);
__exportStar(require("./DynamicUI"), exports);
__exportStar(require("./ChapterDetails"), exports);
__exportStar(require("./Manga"), exports);
__exportStar(require("./MangaTile"), exports);
__exportStar(require("./RequestObject"), exports);
__exportStar(require("./SearchRequest"), exports);
__exportStar(require("./TagSection"), exports);
__exportStar(require("./SourceTag"), exports);
__exportStar(require("./Languages"), exports);
__exportStar(require("./Constants"), exports);
__exportStar(require("./MangaUpdate"), exports);
__exportStar(require("./PagedResults"), exports);
__exportStar(require("./ResponseObject"), exports);
__exportStar(require("./RequestManager"), exports);
__exportStar(require("./RequestHeaders"), exports);
__exportStar(require("./SourceInfo"), exports);
__exportStar(require("./SourceStateManager"), exports);
__exportStar(require("./RequestInterceptor"), exports);
__exportStar(require("./TrackedManga"), exports);
__exportStar(require("./SourceManga"), exports);
__exportStar(require("./TrackedMangaChapterReadAction"), exports);
__exportStar(require("./TrackerActionQueue"), exports);
__exportStar(require("./SearchField"), exports);
__exportStar(require("./RawData"), exports);
__exportStar(require("./SearchFilter"), exports);

},{"./Chapter":5,"./ChapterDetails":6,"./Constants":7,"./DynamicUI":23,"./HomeSection":24,"./Languages":25,"./Manga":26,"./MangaTile":27,"./MangaUpdate":28,"./PagedResults":29,"./RawData":30,"./RequestHeaders":31,"./RequestInterceptor":32,"./RequestManager":33,"./RequestObject":34,"./ResponseObject":35,"./SearchField":36,"./SearchFilter":37,"./SearchRequest":38,"./SourceInfo":39,"./SourceManga":40,"./SourceStateManager":41,"./SourceTag":42,"./TagSection":43,"./TrackedManga":44,"./TrackedMangaChapterReadAction":45,"./TrackerActionQueue":46}],48:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createText = exports.URLBuilder = void 0;
class URLBuilder {
    constructor(base) {
        this.base = base;
        this.params = [];
        this.paths = [];
        this.filterEmptyParamValues = false;
    }
    filterEmptyPramas() {
        this.filterEmptyParamValues = true;
        return this;
    }
    addPath(path) {
        this.paths.push(path);
        return this;
    }
    addParam(key, value) {
        this.params.push({
            key,
            value: value ? value.toString() : '',
        });
        return this;
    }
    build() {
        let url = `${this.base}`;
        if (this.paths.length > 0) {
            url += '/' + this.paths.join('/');
        }
        url = encodeURI(url);
        if (this.params.length > 0) {
            url += '?' + this.params
                .filter((param) => !param.value ||
                !this.filterEmptyParamValues ||
                !param.value)
                .map((param) => encodeURIComponent(param.key) + '=' +
                encodeURIComponent(param.value))
                .join('&');
        }
        return url;
    }
}
exports.URLBuilder = URLBuilder;
// Solely because I'm too lazy to keep writing this every time.
const createText = (text) => createIconText({ text });
exports.createText = createText;

},{}],49:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ManaToki = exports.ManaTokiInfo = exports.DEFAULT_URL = void 0;
const paperback_extensions_common_1 = require("paperback-extensions-common");
const TokiSettings_1 = require("./TokiSettings");
const TokiParser_1 = require("./TokiParser");
const GeneralHelper_1 = require("./GeneralHelper");
exports.DEFAULT_URL = "https://manatoki.net";
const USER_AGENT = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.5005.124 Safari/537.36 Edg/102.0.1245.44';
exports.ManaTokiInfo = {
    name: "ManaToki (마나토끼) (Forked from Nouun's Repo)",
    icon: "icon.png",
    websiteBaseURL: exports.DEFAULT_URL,
    version: "0.1",
    description: "Extension that scrapes webtoons from 마나토끼.",
    author: "Ganial",
    authorWebsite: "https://github.com/nouun/",
    contentRating: paperback_extensions_common_1.ContentRating.EVERYONE,
    language: paperback_extensions_common_1.LanguageCode.KOREAN,
    sourceTags: [
        {
            text: "Korean (한국어)",
            type: paperback_extensions_common_1.TagType.GREY,
        }
    ],
};
class ManaToki extends paperback_extensions_common_1.Source {
    constructor() {
        super(...arguments);
        this.URL = exports.DEFAULT_URL;
        this.requestManager = createRequestManager({
            requestsPerSecond: 0.5,
            requestTimeout: 15000,
            // interceptor: new NewTokiInterceptor(() => this.requestManager),
            interceptor: {
                interceptRequest: async (req) => {
                    req.headers = {
                        ...req.headers,
                        "referer": exports.DEFAULT_URL,
                        "user-agent": USER_AGENT
                    };
                    return req;
                },
                interceptResponse: async (res) => {
                    // FIXME: Test in 0.7
                    // If .jpg returns 404, try .jpeg.
                    const url = res.request.url;
                    if (url.endsWith("jpg") && res.status == 404) {
                        const req = res.request;
                        req.url = url.slice(0, -3) + "jpeg";
                        res = await this.requestManager.schedule(req, 2);
                    }
                    return res;
                }
            }
        });
        this.stateManager = createSourceStateManager({});
        this.updateDomain = async () => this.URL = (await (0, TokiSettings_1.getStateData)(this.stateManager)).domain;
        this.getBaseURL = async () => new GeneralHelper_1.URLBuilder(await this.updateDomain());
        this.getMangaShareUrl = (id) => new GeneralHelper_1.URLBuilder(this.URL)
            .addPath("comic")
            .addPath(id)
            .build();
    }
    async getSourceMenu() {
        return Promise.resolve(createSection({
            id: "main",
            header: "마나토끼 설정",
            rows: () => Promise.resolve([(0, TokiSettings_1.menuGeneralSettings)(this.stateManager)]),
        }));
    }
    // eslint-disable-next-line max-len
    async getSearchResults(query, metadata) {
        const page = metadata?.page || 1;
        const title = query.title || "";
        if (metadata?.end) {
            return createPagedResults({ results: [] });
        }
        const url = (await this.getBaseURL())
            .addPath("comic")
            .addParam("stx", title)
            .addParam("tag", query.includedTags?.map((tag) => tag.id).join(","));
        if (page > 1)
            url.addPath(`p${page}`);
        const req = createRequestObject({
            url: url.build(),
            method: "GET",
        });
        const data = await this.requestManager.schedule(req, 2);
        const cheerio = this.cheerio.load(data.data);
        const [results, end] = (0, TokiParser_1.parseSearchResults)(cheerio, this.URL);
        return createPagedResults({
            results,
            metadata: {
                page: page + (end ? 0 : 1),
                end,
            },
        });
    }
    async getSearchTags() {
        const req = createRequestObject({
            url: (await this.getBaseURL())
                .addPath("comic")
                .build(),
            method: "GET",
        });
        const data = await this.requestManager.schedule(req, 2);
        const cheerio = this.cheerio.load(data.data);
        return (0, TokiParser_1.parseSearchTags)(cheerio);
    }
    async getMangaDetails(mangaId) {
        const req = createRequestObject({
            url: (await this.getBaseURL())
                .addPath("comic")
                .addPath(mangaId)
                .build(),
            method: "GET",
        });
        const data = await this.requestManager.schedule(req, 2);
        const cheerio = this.cheerio.load(data.data);
        return (0, TokiParser_1.parseMangaDetails)(cheerio, mangaId);
    }
    async getChapters(mangaId) {
        const req = createRequestObject({
            url: (await this.getBaseURL())
                .addPath("comic")
                .addPath(mangaId)
                .build(),
            method: "GET",
        });
        const data = await this.requestManager.schedule(req, 2);
        const cheerio = this.cheerio.load(data.data);
        return (0, TokiParser_1.parseChapters)(cheerio, mangaId);
    }
    async getChapterDetails(mangaId, id) {
        const req = createRequestObject({
            url: (await this.getBaseURL())
                .addPath("comic")
                .addPath(id)
                .build(),
            method: "GET",
        });
        const data = await this.requestManager.schedule(req, 2);
        return (0, TokiParser_1.parseChapterDetails)(data.data, this.cheerio, mangaId, id);
    }
    async getHomePageSections(sectionCallback) {
        const sections = [
            {
                request: createRequestObject({
                    url: (await this.getBaseURL())
                        .addPath("bbs")
                        .addPath("page.php")
                        .addParam("hid", "update")
                        .build(),
                    method: 'GET'
                }),
                section: createHomeSection({
                    id: 'updates',
                    title: '최신화',
                    view_more: true,
                }),
            },
            {
                request: createRequestObject({
                    url: (await this.getBaseURL())
                        .addPath("comic")
                        .build(),
                    method: 'GET'
                }),
                section: createHomeSection({
                    id: 'list',
                    title: '만화목록',
                    view_more: true
                }),
            },
        ];
        const promises = [];
        for (const section of sections) {
            sectionCallback(section.section);
            promises.push(this.requestManager.schedule(section.request, 3).then(response => {
                const $ = this.cheerio.load(response.data);
                switch (section.section.id) {
                    case 'updates':
                        section.section.items = (0, TokiParser_1.parseHomeUpdates)($).manga;
                        break;
                    case 'list':
                        section.section.items = (0, TokiParser_1.parseHomeList)($).manga;
                        break;
                }
                sectionCallback(section.section);
            }));
        }
        await Promise.all(promises);
    }
    async getViewMoreItems(homepageSectionId, metadata) {
        const page = metadata?.page ?? 1;
        let collectedIds = metadata?.collectedIds ?? [];
        let manga;
        let mData = undefined;
        switch (homepageSectionId) {
            case 'updates': {
                const request = createRequestObject({
                    url: (await this.getBaseURL())
                        .addPath("bbs")
                        .addPath("page.php")
                        .addParam("hid", "update")
                        .addParam("page", page)
                        .build(),
                    method: 'GET'
                });
                const data = await this.requestManager.schedule(request, 3);
                const $ = this.cheerio.load(data.data);
                const parsedData = (0, TokiParser_1.parseHomeUpdates)($, collectedIds);
                manga = parsedData.manga;
                collectedIds = parsedData.collectedIds;
                if (page <= 9)
                    mData = { page: (page + 1), collectedIds: collectedIds };
                break;
            }
            case 'list': {
                const request = createRequestObject({
                    url: (await this.getBaseURL())
                        .addPath("comic")
                        .addPath(`p${page}`)
                        .build(),
                    method: 'GET'
                });
                const data = await this.requestManager.schedule(request, 3);
                const $ = this.cheerio.load(data.data);
                const parsedData = (0, TokiParser_1.parseHomeList)($, collectedIds);
                manga = parsedData.manga;
                collectedIds = parsedData.collectedIds;
                if (page <= 9)
                    mData = { page: (page + 1), collectedIds: collectedIds };
                break;
            }
            default:
                return createPagedResults({
                    results: [],
                    metadata: mData
                });
        }
        return createPagedResults({
            results: manga,
            metadata: mData
        });
    }
    CloudFlareError(status) {
        if (status == 503 || status == 403) {
            throw new Error(`CLOUDFLARE BYPASS ERROR:\nPlease go to the homepage of <${exports.DEFAULT_URL}> and press the cloud icon.`);
        }
    }
    async getCloudflareBypassRequestAsync() {
        return createRequestObject({
            url: (await this.getBaseURL())
                .build(),
            method: 'GET',
            headers: {
                'referer': exports.DEFAULT_URL,
                'user-agent': USER_AGENT
            }
        });
    }
}
exports.ManaToki = ManaToki;
// class NewTokiInterceptor implements RequestInterceptor {
//   constructor(
//     private requestManager: () => RequestManager,
//   ) { }
//   async interceptRequest(req: Request): Promise<Request> {
//     req.headers = {
//       ...req.headers,
//       "referer": DEFAULT_URL,
//       "user-agent": await this.requestManager().
//     };
//     return req;
//   }
//   async interceptResponse(res: Response): Promise<Response> {
//     // FIXME: Test in 0.7
//     // If .jpg returns 404, try .jpeg.
//     const url = res.request.url;
//     if (url.endsWith("jpg") && res.status == 404) {
//       const req = res.request;
//       req.url = url.slice(0, -3) + "jpeg";
//       res = await this.requestManager().schedule(req, 2);
//     }
//     return res;
//   }
// }

},{"./GeneralHelper":48,"./TokiParser":50,"./TokiSettings":51,"paperback-extensions-common":4}],50:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseHomeList = exports.parseHomeUpdates = exports.parseChapterDetails = exports.parseChapters = exports.parseMangaDetails = exports.parseSearchTags = exports.parseSearchResults = void 0;
const paperback_extensions_common_1 = require("paperback-extensions-common");
const GeneralHelper_1 = require("./GeneralHelper");
const parseTime = (timeString) => {
    if (timeString.includes(":")) {
        const [month, day, year] = new Date()
            .toLocaleDateString("en-US", { timeZone: "Asia/Seoul" })
            .split("/")
            .map((part) => part.padStart(2));
        return new Date([year, month, day].join("-") + "T" + timeString + ":00+09:00");
    }
    else {
        return new Date(timeString.replace(/\./g, "-") + "T00:00:00+09:00");
    }
};
const parseSearchResults = ($, baseDomain) => {
    const results = $("#webtoon-list-all > li > div > div > .imgframe")
        .toArray()
        .map((tile) => {
        const idElement = $(".img-item > a", tile).attr("href");
        const id = idElement ? idElement.match(/comic\/(\d+)/)?.[1] : null;
        if (!id)
            throw Error("Unable to match search result ID");
        let image = $(".img-item > a > img", tile).attr("src");
        const imageParts = image
            ? image.match(/\.[a-zA-Z]*\/(.*)\/thumb-([^.]*)_\d+x\d+\.jpe?g/)
            : null;
        if (imageParts) {
            image = new GeneralHelper_1.URLBuilder(baseDomain)
                .addPath(imageParts[1])
                .addPath(imageParts[2] + ".jpg")
                .build();
        }
        const title = (0, GeneralHelper_1.createText)($(".title", tile).text());
        const subtitleText = (0, GeneralHelper_1.createText)($(".list-date", tile).text());
        return createMangaTile({
            id,
            image,
            title,
            subtitleText,
        });
    });
    const end = $(".disabled > a > .fa-angle-double-right")
        .toArray()
        .length != 0;
    return [
        results,
        end,
    ];
};
exports.parseSearchResults = parseSearchResults;
const parseSearchTags = ($) => {
    const genres = $(".s-genre")
        .toArray()
        .map((el) => $(el).attr("data-value"))
        .filter((tag) => !!tag)
        .map((tag) => createTag({
        id: tag,
        label: tag,
    }));
    return [
        createTagSection({
            id: "tag",
            label: "장르",
            tags: genres,
        }),
    ];
};
exports.parseSearchTags = parseSearchTags;
const parseMangaDetails = ($, id) => {
    const el = $(".view-title > .view-content > .row");
    const image = $("div > .view-content1 > .view-img > img", el).attr("src");
    const titles = [
        $("div > .view-content > span > b", el).text()
            .trim(),
    ];
    const descEl = $("div > .view-content", el).get(1);
    const desc = $(descEl)
        .text()
        .trim();
    return createManga({
        id,
        image,
        titles,
        desc,
        status: paperback_extensions_common_1.MangaStatus.UNKNOWN,
    });
};
exports.parseMangaDetails = parseMangaDetails;
const parseChapters = ($, mangaId) => {
    const chapters = $("#serial-move > .serial-list > .list-body > .list-item").toArray();
    return chapters.map((chapter) => {
        const linkEl = $(".wr-subject > .item-subject", chapter);
        const href = linkEl.attr("href");
        const id = href ? href.match(/comic\/(\d+)/)?.[1] : null;
        if (!id)
            throw Error("Unable to match search result ID");
        const name = linkEl
            .contents()
            .filter(function () {
            return this.nodeType === 3;
        })
            .text()
            .trim();
        const chapNum = parseFloat($(".wr-num", chapter).text()) || 1;
        const timeStr = $(".wr-date", chapter)
            .text()
            .trim();
        const time = parseTime(timeStr);
        return createChapter({
            id,
            mangaId,
            name,
            chapNum,
            time,
            langCode: paperback_extensions_common_1.LanguageCode.KOREAN,
        });
    });
};
exports.parseChapters = parseChapters;
const parseChapterDetails = (data, cheerio, mangaId, id) => {
    let pages = [];
    try {
        const htmlRegex = /var( *html_data *\+?= *'([A-Z0-9]{2}\.)*';? *\n?)+/;
        const scriptRegex = /unescape\('(%[A-Z0-9]{2})+'\)/;
        // @ts-ignore
        const htmlDataScript = data.match(htmlRegex)[0];
        // @ts-ignore
        const htmlData = eval(htmlDataScript);
        // @ts-ignore
        let script = data.match(scriptRegex)[0];
        console.log("Original Script: " + script);
        // @ts-ignore
        script = eval(script);
        // @ts-ignore
        script = script.substr(0, script.lastIndexOf("<"));
        script = script.substr(script.lastIndexOf(">") + 1);
        script = script.replace(/document\..*=/, "return ");
        script = script.replace(/document\..*\((.*)\)/, "return $1");
        const funcName = (script.match(/function +(.*?)\(/) ?? [0, "html_encoder"])[1];
        console.log("parsed: " + script);
        const out = eval("var l;" + script + `${funcName}(htmlData)`);
        console.log("Output: " + out);
        const $ = cheerio.load(out);
        pages = $("img")
            .toArray()
            .map((page) => $(page).get(0)?.attribs)
            .filter((attribs) => attribs && attribs["src"] && attribs["src"].includes("loading"))
            .map((attribs) => attribs?.[Object.keys(attribs).filter((attrib) => attrib.startsWith("data-"))[0] ?? "data"]);
    }
    catch (err) {
        throw Error(`Unable to evaluate server chapter code.\n${err}`);
    }
    return createChapterDetails({
        mangaId,
        id,
        pages,
        longStrip: false,
    });
};
exports.parseChapterDetails = parseChapterDetails;
const parseHomeUpdates = ($, collectedIds) => {
    const mangaTiles = [];
    if (!collectedIds) {
        collectedIds = [];
    }
    for (const item of $('.post-row', '.miso-post-webzine').toArray()) {
        const id = $('a', $('.pull-right.post-info', item)).attr('href')?.split('/').pop() ?? '';
        const title = $('a', $('.post-subject', item)).children().remove().end().text().trim();
        const image = $('img', item).attr('src') ?? '';
        if (!collectedIds.includes(id)) {
            mangaTiles.push(createMangaTile({
                id: id,
                title: createIconText({ text: title }),
                image: image
            }));
            collectedIds.push(id);
        }
    }
    return { manga: mangaTiles, collectedIds: collectedIds };
};
exports.parseHomeUpdates = parseHomeUpdates;
const parseHomeList = ($, collectedIds) => {
    const mangaTiles = [];
    if (!collectedIds) {
        collectedIds = [];
    }
    for (const item of $('li', '#webtoon-list-all').toArray()) {
        const id = $('a', item).attr('href')?.split('/').pop() ?? '';
        const title = $('span.title.white', item).text();
        const image = $('img', item).attr('src') ?? '';
        if (!collectedIds.includes(id)) {
            mangaTiles.push(createMangaTile({
                id: id,
                title: createIconText({ text: title }),
                image: image
            }));
            collectedIds.push(id);
        }
    }
    return { manga: mangaTiles, collectedIds: collectedIds };
};
exports.parseHomeList = parseHomeList;

},{"./GeneralHelper":48,"paperback-extensions-common":4}],51:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.menuGeneralSettings = exports.getStateData = void 0;
const getStateData = async (stateManager) => {
    const domain = await stateManager.retrieve("domain")
        || "https://manatoki.net";
    return { domain };
};
exports.getStateData = getStateData;
const sectionGeneral = (stateManager) => createSection({
    id: "section_general",
    rows: () => (0, exports.getStateData)(stateManager).then(async (values) => [
        createInputField({
            id: "domain",
            label: "도메인",
            value: values.domain,
            maskInput: false,
            placeholder: "",
        }),
    ]),
});
const formGeneralSettings = (stateManager) => createForm({
    onSubmit: (data) => 
    //@ts-ignore
    Promise.all(Object.keys(data).map((key) => stateManager.store(key, data[key]))).then(),
    validate: () => Promise.resolve(true),
    sections: () => Promise.resolve([sectionGeneral(stateManager)]),
});
const menuGeneralSettings = (stateManager) => createNavigationButton({
    id: "btn_settings_general",
    value: "",
    label: "설정",
    form: formGeneralSettings(stateManager),
});
exports.menuGeneralSettings = menuGeneralSettings;

},{}]},{},[49])(49)
});
