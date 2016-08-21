var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
System.register("src/enums/cache-storages.enum", [], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    return {
        setters:[],
        execute: function() {
        }
    }
});
System.register("src/interfaces/cache-options.interface", [], function(exports_2, context_2) {
    "use strict";
    var __moduleName = context_2 && context_2.id;
    return {
        setters:[],
        execute: function() {
        }
    }
});
System.register("src/interfaces/storage-value.interface", [], function(exports_3, context_3) {
    "use strict";
    var __moduleName = context_3 && context_3.id;
    return {
        setters:[],
        execute: function() {
        }
    }
});
System.register("src/services/storage/cache-storage-abstract.service", [], function(exports_4, context_4) {
    "use strict";
    var __moduleName = context_4 && context_4.id;
    var CacheStorageAbstract;
    return {
        setters:[],
        execute: function() {
            /**
             * Abstract cache storage
             */
            CacheStorageAbstract = (function () {
                function CacheStorageAbstract() {
                }
                return CacheStorageAbstract;
            }());
            exports_4("CacheStorageAbstract", CacheStorageAbstract);
        }
    }
});
System.register("src/services/storage/session-storage/cache-session-storage.service", ['@angular/core', "src/services/storage/cache-storage-abstract.service"], function(exports_5, context_5) {
    "use strict";
    var __moduleName = context_5 && context_5.id;
    var core_1, cache_storage_abstract_service_1;
    var CacheSessionStorage;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (cache_storage_abstract_service_1_1) {
                cache_storage_abstract_service_1 = cache_storage_abstract_service_1_1;
            }],
        execute: function() {
            /**
             * Service for storing data in session storage
             */
            CacheSessionStorage = (function (_super) {
                __extends(CacheSessionStorage, _super);
                function CacheSessionStorage() {
                    _super.apply(this, arguments);
                }
                CacheSessionStorage.prototype.getItem = function (key) {
                    var value = sessionStorage.getItem(key);
                    return value ? JSON.parse(value) : null;
                };
                CacheSessionStorage.prototype.setItem = function (key, value) {
                    sessionStorage.setItem(key, JSON.stringify(value));
                };
                CacheSessionStorage.prototype.removeItem = function (key) {
                    sessionStorage.removeItem(key);
                };
                CacheSessionStorage.prototype.clear = function () {
                    sessionStorage.clear();
                };
                CacheSessionStorage.prototype.type = function () {
                    return 1 /* SESSION_STORAGE */;
                };
                CacheSessionStorage.prototype.isEnabled = function () {
                    try {
                        sessionStorage.setItem('test', 'test');
                        sessionStorage.removeItem('test');
                        return true;
                    }
                    catch (e) {
                        return false;
                    }
                };
                CacheSessionStorage = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], CacheSessionStorage);
                return CacheSessionStorage;
            }(cache_storage_abstract_service_1.CacheStorageAbstract));
            exports_5("CacheSessionStorage", CacheSessionStorage);
        }
    }
});
System.register("src/services/storage/local-storage/cache-local-storage.service", ['@angular/core', "src/services/storage/cache-storage-abstract.service"], function(exports_6, context_6) {
    "use strict";
    var __moduleName = context_6 && context_6.id;
    var core_2, cache_storage_abstract_service_2;
    var CacheLocalStorage;
    return {
        setters:[
            function (core_2_1) {
                core_2 = core_2_1;
            },
            function (cache_storage_abstract_service_2_1) {
                cache_storage_abstract_service_2 = cache_storage_abstract_service_2_1;
            }],
        execute: function() {
            /**
             * Service for storing data in local storage
             */
            CacheLocalStorage = (function (_super) {
                __extends(CacheLocalStorage, _super);
                function CacheLocalStorage() {
                    _super.apply(this, arguments);
                }
                CacheLocalStorage.prototype.getItem = function (key) {
                    var value = localStorage.getItem(key);
                    return value ? JSON.parse(value) : null;
                };
                CacheLocalStorage.prototype.setItem = function (key, value) {
                    localStorage.setItem(key, JSON.stringify(value));
                };
                CacheLocalStorage.prototype.removeItem = function (key) {
                    localStorage.removeItem(key);
                };
                CacheLocalStorage.prototype.clear = function () {
                    localStorage.clear();
                };
                CacheLocalStorage.prototype.type = function () {
                    return 0 /* LOCAL_STORAGE */;
                };
                CacheLocalStorage.prototype.isEnabled = function () {
                    try {
                        localStorage.setItem('test', 'test');
                        localStorage.removeItem('test');
                        return true;
                    }
                    catch (e) {
                        return false;
                    }
                };
                CacheLocalStorage = __decorate([
                    core_2.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], CacheLocalStorage);
                return CacheLocalStorage;
            }(cache_storage_abstract_service_2.CacheStorageAbstract));
            exports_6("CacheLocalStorage", CacheLocalStorage);
        }
    }
});
System.register("src/services/storage/memory/cache-memory.service", ['@angular/core', "src/services/storage/cache-storage-abstract.service"], function(exports_7, context_7) {
    "use strict";
    var __moduleName = context_7 && context_7.id;
    var core_3, cache_storage_abstract_service_3;
    var CacheMemoryStorage;
    return {
        setters:[
            function (core_3_1) {
                core_3 = core_3_1;
            },
            function (cache_storage_abstract_service_3_1) {
                cache_storage_abstract_service_3 = cache_storage_abstract_service_3_1;
            }],
        execute: function() {
            /**
             * Service for storing data in local storage
             */
            CacheMemoryStorage = (function (_super) {
                __extends(CacheMemoryStorage, _super);
                function CacheMemoryStorage() {
                    _super.apply(this, arguments);
                    this._data = {};
                }
                CacheMemoryStorage.prototype.getItem = function (key) {
                    return this._data[key] ? this._data[key] : null;
                };
                CacheMemoryStorage.prototype.setItem = function (key, value) {
                    this._data[key] = value;
                };
                CacheMemoryStorage.prototype.removeItem = function (key) {
                    delete this._data[key];
                };
                CacheMemoryStorage.prototype.clear = function () {
                    this._data = [];
                };
                CacheMemoryStorage.prototype.type = function () {
                    return 2 /* MEMORY */;
                };
                CacheMemoryStorage.prototype.isEnabled = function () {
                    return true;
                };
                CacheMemoryStorage = __decorate([
                    core_3.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], CacheMemoryStorage);
                return CacheMemoryStorage;
            }(cache_storage_abstract_service_3.CacheStorageAbstract));
            exports_7("CacheMemoryStorage", CacheMemoryStorage);
        }
    }
});
System.register("src/services/cache.service", ['@angular/core', "src/services/storage/cache-storage-abstract.service", "src/services/storage/session-storage/cache-session-storage.service", "src/services/storage/local-storage/cache-local-storage.service", "src/services/storage/memory/cache-memory.service"], function(exports_8, context_8) {
    "use strict";
    var __moduleName = context_8 && context_8.id;
    var core_4, cache_storage_abstract_service_4, cache_session_storage_service_1, cache_local_storage_service_1, cache_memory_service_1;
    var CACHE_PREFIX, DEFAULT_STORAGE, DEFAULT_ENABLED_STORAGE, CacheService;
    return {
        setters:[
            function (core_4_1) {
                core_4 = core_4_1;
            },
            function (cache_storage_abstract_service_4_1) {
                cache_storage_abstract_service_4 = cache_storage_abstract_service_4_1;
            },
            function (cache_session_storage_service_1_1) {
                cache_session_storage_service_1 = cache_session_storage_service_1_1;
            },
            function (cache_local_storage_service_1_1) {
                cache_local_storage_service_1 = cache_local_storage_service_1_1;
            },
            function (cache_memory_service_1_1) {
                cache_memory_service_1 = cache_memory_service_1_1;
            }],
        execute: function() {
            CACHE_PREFIX = 'CacheService';
            DEFAULT_STORAGE = 1 /* SESSION_STORAGE */;
            DEFAULT_ENABLED_STORAGE = 2 /* MEMORY */;
            CacheService = (function () {
                function CacheService(_storage) {
                    this._storage = _storage;
                    /**
                     * Default cache options
                     * @type CacheOptionsInterface
                     * @private
                     */
                    this._defaultOptions = {
                        expires: Number.MAX_VALUE,
                        maxAge: Number.MAX_VALUE
                    };
                    /**
                     * Cache prefix
                     */
                    this._prefix = CACHE_PREFIX;
                    this._validateStorage();
                }
                /**
                 * Set data to cache
                 * @param key
                 * @param value
                 * @param options
                 */
                CacheService.prototype.set = function (key, value, options) {
                    var storageKey = this._toStorageKey(key);
                    options = options ? options : this._defaultOptions;
                    this._storage.setItem(storageKey, this._toStorageValue(value, options));
                    if (!this._isSystemKey(key) && options.tag) {
                        this._saveTag(options.tag, storageKey);
                    }
                };
                /**
                 * Get data from cache
                 * @param key
                 * @returns {any}
                 */
                CacheService.prototype.get = function (key) {
                    var storageValue = this._storage.getItem(this._toStorageKey(key)), value = null;
                    if (storageValue) {
                        if (this._validateStorageValue(storageValue)) {
                            value = storageValue.value;
                        }
                        else {
                            this.remove(key);
                        }
                    }
                    return value;
                };
                /**
                 * Check if value exists
                 * @param key
                 * @returns {boolean}
                 */
                CacheService.prototype.exists = function (key) {
                    return !!this.get(key);
                };
                /**
                 * Remove item from cache
                 * @param key
                 */
                CacheService.prototype.remove = function (key) {
                    this._storage.removeItem(this._toStorageKey(key));
                    this._removeFromTag(this._toStorageKey(key));
                };
                /**
                 * Remove all from cache
                 */
                CacheService.prototype.removeAll = function () {
                    this._storage.clear();
                };
                /**
                 * Get all tag data
                 * @param tag
                 * @returns {Array}
                 */
                CacheService.prototype.getTagData = function (tag) {
                    var _this = this;
                    var tags = this.get(this._tagsStorageKey()) || {}, result = {};
                    if (tags[tag]) {
                        tags[tag].forEach(function (key) {
                            var data = _this.get(_this._fromStorageKey(key));
                            if (data) {
                                result[_this._fromStorageKey(key)] = data;
                            }
                        });
                    }
                    return result;
                };
                /**
                 * Remove all by tag
                 * @param tag
                 */
                CacheService.prototype.removeTag = function (tag) {
                    var _this = this;
                    var tags = this.get(this._tagsStorageKey()) || {};
                    if (tags[tag]) {
                        tags[tag].forEach(function (key) {
                            _this._storage.removeItem(key);
                        });
                        delete tags[tag];
                        this.set(this._tagsStorageKey(), tags);
                    }
                };
                /**
                 * Set global cache key prefix
                 * @param prefix
                 */
                CacheService.prototype.setGlobalPrefix = function (prefix) {
                    this._prefix = prefix;
                };
                /**
                 * Validate cache storage
                 * @private
                 */
                CacheService.prototype._validateStorage = function () {
                    if (!this._storage) {
                        this._initStorage(DEFAULT_STORAGE);
                    }
                    if (!this._storage.isEnabled()) {
                        this._initStorage(DEFAULT_ENABLED_STORAGE);
                    }
                };
                /**
                 * Remove key from tags keys list
                 * @param key
                 * @private
                 */
                CacheService.prototype._removeFromTag = function (key) {
                    var tags = this.get(this._tagsStorageKey()) || {}, index;
                    for (var tag in tags) {
                        index = tags[tag].indexOf(key);
                        if (index !== -1) {
                            tags[tag].splice(index, 1);
                            this.set(this._tagsStorageKey(), tags);
                            break;
                        }
                    }
                };
                /**
                 * Init storage by type
                 * @param type
                 * @returns {CacheStorageAbstract}
                 */
                CacheService.prototype._initStorage = function (type) {
                    switch (type) {
                        case 1 /* SESSION_STORAGE */:
                            this._storage = new cache_session_storage_service_1.CacheSessionStorage();
                            break;
                        case 0 /* LOCAL_STORAGE */:
                            this._storage = new cache_local_storage_service_1.CacheLocalStorage();
                            break;
                        default: this._storage = new cache_memory_service_1.CacheMemoryStorage();
                    }
                };
                CacheService.prototype._toStorageKey = function (key) {
                    return this._getCachePrefix() + key;
                };
                CacheService.prototype._fromStorageKey = function (key) {
                    return key.replace(this._getCachePrefix(), '');
                };
                /**
                 * Prepare value to set to storage
                 * @param value
                 * @param options
                 * @returns {{value: any, options: CacheOptionsInterface}}
                 * @private
                 */
                CacheService.prototype._toStorageValue = function (value, options) {
                    return {
                        value: value,
                        options: this._toStorageOptions(options)
                    };
                };
                /**
                 * Prepare options to set to storage
                 * @param options
                 * @returns {CacheOptionsInterface}
                 * @private
                 */
                CacheService.prototype._toStorageOptions = function (options) {
                    var storageOptions = {};
                    storageOptions.expires = options.expires ? options.expires :
                        (options.maxAge ? Date.now() + (options.maxAge * 1000) : this._defaultOptions.expires);
                    storageOptions.maxAge = options.maxAge ? options.maxAge : this._defaultOptions.maxAge;
                    return storageOptions;
                };
                /**
                 * Validate storage value
                 * @param value
                 * @returns {boolean}
                 * @private
                 */
                CacheService.prototype._validateStorageValue = function (value) {
                    return value.options.expires > Date.now();
                };
                /**
                 * check if its system cache key
                 * @param key
                 * @returns {boolean}
                 * @private
                 */
                CacheService.prototype._isSystemKey = function (key) {
                    return [this._tagsStorageKey()].indexOf(key) !== -1;
                };
                /**
                 * Save tag to list of tags
                 * @param tag
                 * @param key
                 * @private
                 */
                CacheService.prototype._saveTag = function (tag, key) {
                    var tags = this.get(this._tagsStorageKey()) || {};
                    if (!tags[tag]) {
                        tags[tag] = [key];
                    }
                    else {
                        tags[tag].push(key);
                    }
                    this.set(this._tagsStorageKey(), tags);
                };
                /**
                 * Get global cache prefix
                 * @returns {string}
                 * @private
                 */
                CacheService.prototype._getCachePrefix = function () {
                    return this._prefix;
                };
                CacheService.prototype._tagsStorageKey = function () {
                    return 'CacheService_tags';
                };
                CacheService = __decorate([
                    core_4.Injectable(),
                    __param(0, core_4.Optional()), 
                    __metadata('design:paramtypes', [cache_storage_abstract_service_4.CacheStorageAbstract])
                ], CacheService);
                return CacheService;
            }());
            exports_8("CacheService", CacheService);
        }
    }
});
System.register("ng2-cache", ["src/services/cache.service", "src/services/storage/cache-storage-abstract.service", "src/services/storage/local-storage/cache-local-storage.service", "src/services/storage/memory/cache-memory.service", "src/services/storage/session-storage/cache-session-storage.service"], function(exports_9, context_9) {
    "use strict";
    var __moduleName = context_9 && context_9.id;
    return {
        setters:[
            function (cache_service_1_1) {
                exports_9({
                    "CacheService": cache_service_1_1["CacheService"]
                });
            },
            function (cache_storage_abstract_service_5_1) {
                exports_9({
                    "CacheStorageAbstract": cache_storage_abstract_service_5_1["CacheStorageAbstract"]
                });
            },
            function (cache_local_storage_service_2_1) {
                exports_9({
                    "CacheLocalStorage": cache_local_storage_service_2_1["CacheLocalStorage"]
                });
            },
            function (cache_memory_service_2_1) {
                exports_9({
                    "CacheMemoryStorage": cache_memory_service_2_1["CacheMemoryStorage"]
                });
            },
            function (cache_session_storage_service_2_1) {
                exports_9({
                    "CacheSessionStorage": cache_session_storage_service_2_1["CacheSessionStorage"]
                });
            }],
        execute: function() {
        }
    }
});
