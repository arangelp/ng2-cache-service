declare module "src/enums/cache-storages.enum" {
    export const enum CacheStoragesEnum {
        LOCAL_STORAGE = 0,
        SESSION_STORAGE = 1,
        MEMORY = 2,
    }
}
declare module "src/interfaces/cache-options.interface" {
    export interface CacheOptionsInterface {
        /**
         * Expires timestamp
         */
        expires?: number;
        /**
         * Max age in seconds
         */
        maxAge?: number;
        /**
         * Tag for this key
         */
        tag?: string;
    }
}
declare module "src/interfaces/storage-value.interface" {
    import { CacheOptionsInterface } from "src/interfaces/cache-options.interface";
    export interface StorageValueInterface {
        /**
         * Cached data
         */
        value: any;
        /**
         * Cached options
         */
        options: CacheOptionsInterface;
    }
}
declare module "src/services/storage/cache-storage-abstract.service" {
    import { CacheStoragesEnum } from "src/enums/cache-storages.enum";
    import { StorageValueInterface } from "src/interfaces/storage-value.interface";
    /**
     * Abstract cache storage
     */
    export abstract class CacheStorageAbstract {
        /**
         * Get item from storage
         * @param key
         */
        abstract getItem(key: string): StorageValueInterface;
        /**
         * Set item to storage
         * @param key
         * @param value
         */
        abstract setItem(key: string, value: StorageValueInterface): void;
        /**
         * Remove item from storage
         * @param key
         */
        abstract removeItem(key: string): void;
        /**
         * Clear item in storage
         */
        abstract clear(): void;
        /**
         * Get current storage type
         */
        abstract type(): CacheStoragesEnum;
        /**
         * Check if storage is enabled
         */
        abstract isEnabled(): boolean;
    }
}
declare module "src/services/storage/session-storage/cache-session-storage.service" {
    import { CacheStorageAbstract } from "src/services/storage/cache-storage-abstract.service";
    import { CacheStoragesEnum } from "src/enums/cache-storages.enum";
    import { StorageValueInterface } from "src/interfaces/storage-value.interface";
    /**
     * Service for storing data in session storage
     */
    export class CacheSessionStorage extends CacheStorageAbstract {
        getItem(key: string): any;
        setItem(key: string, value: StorageValueInterface): void;
        removeItem(key: string): void;
        clear(): void;
        type(): CacheStoragesEnum;
        isEnabled(): boolean;
    }
}
declare module "src/services/storage/local-storage/cache-local-storage.service" {
    import { CacheStorageAbstract } from "src/services/storage/cache-storage-abstract.service";
    import { CacheStoragesEnum } from "src/enums/cache-storages.enum";
    import { StorageValueInterface } from "src/interfaces/storage-value.interface";
    /**
     * Service for storing data in local storage
     */
    export class CacheLocalStorage extends CacheStorageAbstract {
        getItem(key: string): any;
        setItem(key: string, value: StorageValueInterface): void;
        removeItem(key: string): void;
        clear(): void;
        type(): CacheStoragesEnum;
        isEnabled(): boolean;
    }
}
declare module "src/services/storage/memory/cache-memory.service" {
    import { CacheStorageAbstract } from "src/services/storage/cache-storage-abstract.service";
    import { CacheStoragesEnum } from "src/enums/cache-storages.enum";
    import { StorageValueInterface } from "src/interfaces/storage-value.interface";
    /**
     * Service for storing data in local storage
     */
    export class CacheMemoryStorage extends CacheStorageAbstract {
        private _data;
        getItem(key: string): any;
        setItem(key: string, value: StorageValueInterface): void;
        removeItem(key: string): void;
        clear(): void;
        type(): CacheStoragesEnum;
        isEnabled(): boolean;
    }
}
declare module "src/services/cache.service" {
    import { CacheOptionsInterface } from "src/interfaces/cache-options.interface";
    import { CacheStorageAbstract } from "src/services/storage/cache-storage-abstract.service";
    export class CacheService {
        private _storage;
        /**
         * Default cache options
         * @type CacheOptionsInterface
         * @private
         */
        private _defaultOptions;
        /**
         * Cache prefix
         */
        private _prefix;
        constructor(_storage: CacheStorageAbstract);
        /**
         * Set data to cache
         * @param key
         * @param value
         * @param options
         */
        set(key: string, value: any, options?: CacheOptionsInterface): void;
        /**
         * Get data from cache
         * @param key
         * @returns {any}
         */
        get(key: string): any;
        /**
         * Check if value exists
         * @param key
         * @returns {boolean}
         */
        exists(key: string): boolean;
        /**
         * Remove item from cache
         * @param key
         */
        remove(key: string): void;
        /**
         * Remove all from cache
         */
        removeAll(): void;
        /**
         * Get all tag data
         * @param tag
         * @returns {Array}
         */
        getTagData(tag: string): {};
        /**
         * Remove all by tag
         * @param tag
         */
        removeTag(tag: string): void;
        /**
         * Set global cache key prefix
         * @param prefix
         */
        setGlobalPrefix(prefix: string): void;
        /**
         * Validate cache storage
         * @private
         */
        private _validateStorage();
        /**
         * Remove key from tags keys list
         * @param key
         * @private
         */
        private _removeFromTag(key);
        /**
         * Init storage by type
         * @param type
         * @returns {CacheStorageAbstract}
         */
        private _initStorage(type);
        private _toStorageKey(key);
        private _fromStorageKey(key);
        /**
         * Prepare value to set to storage
         * @param value
         * @param options
         * @returns {{value: any, options: CacheOptionsInterface}}
         * @private
         */
        private _toStorageValue(value, options);
        /**
         * Prepare options to set to storage
         * @param options
         * @returns {CacheOptionsInterface}
         * @private
         */
        private _toStorageOptions(options);
        /**
         * Validate storage value
         * @param value
         * @returns {boolean}
         * @private
         */
        private _validateStorageValue(value);
        /**
         * check if its system cache key
         * @param key
         * @returns {boolean}
         * @private
         */
        private _isSystemKey(key);
        /**
         * Save tag to list of tags
         * @param tag
         * @param key
         * @private
         */
        private _saveTag(tag, key);
        /**
         * Get global cache prefix
         * @returns {string}
         * @private
         */
        private _getCachePrefix();
        private _tagsStorageKey();
    }
}
declare module "ng2-cache" {
    export { CacheService } from "src/services/cache.service";
    export { CacheStorageAbstract } from "src/services/storage/cache-storage-abstract.service";
    export { CacheStoragesEnum } from "src/enums/cache-storages.enum";
    export { CacheLocalStorage } from "src/services/storage/local-storage/cache-local-storage.service";
    export { CacheMemoryStorage } from "src/services/storage/memory/cache-memory.service";
    export { CacheOptionsInterface } from "src/interfaces/cache-options.interface";
    export { CacheSessionStorage } from "src/services/storage/session-storage/cache-session-storage.service";
}
