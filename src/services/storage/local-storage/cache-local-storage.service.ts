import {Injectable} from '@angular/core';
import {CacheStorageAbstract} from '../cache-storage-abstract.service';
import {CacheStoragesEnum} from '../../../enums/cache-storages.enum';
import {StorageValueInterface} from '../../../interfaces/storage-value.interface';

/**
 * localstorage error interface
 */
interface CACHELOCALSTORAGE_ERROR {
    code: number
    message: string;
}
/**
 * Service for storing data in local storage
 */
@Injectable()
export class CacheLocalStorage extends CacheStorageAbstract {

    public getItem(key: string) {
        let value = localStorage.getItem(key);
        return value ? JSON.parse(value) : null;
    }

    public setItem(key: string, value: StorageValueInterface) {
        try {
            localStorage.setItem(key, JSON.stringify(value));
            return true;
        } catch (e) {
            if(this._isQuotaExceeded(e)) {
                // notifiy user about the error
                throw {
                    code: 22,
                    message: 'Persistent storage maximum size reached'
                };
            } else {
                return false;
            }
        }
    }

    public removeItem(key: string) {
        localStorage.removeItem(key);
    }

    public clear() {
        localStorage.clear();
    }

    public type() {
        return CacheStoragesEnum.LOCAL_STORAGE;
    }

    public isEnabled() {
        try {
            localStorage.setItem('test', 'test');
            localStorage.removeItem('test');
            return true;
        } catch (e) {
            return false;
        }
    }

    private _isQuotaExceeded(e) {
        var quotaExceeded = false;
        if (e) {
          if (e.code) {
            switch (e.code) {
              case 22:
                quotaExceeded = true;
                break;
              case 1014:
                // Firefox
                if (e.name === 'NS_ERROR_DOM_QUOTA_REACHED') {
                  quotaExceeded = true;
                }
                break;
            }
          } else if (e.number === -2147024882) {
            // Internet Explorer 8
            quotaExceeded = true;
          }
        }
        return quotaExceeded;
    }
}
