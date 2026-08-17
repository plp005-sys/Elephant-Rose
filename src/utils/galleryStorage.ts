export interface GalleryTemplate {
  id: string;
  title: string;
  galleryTitle: string;
  thumb: string;
  images: string[];
}

const DB_NAME = 'r_gallery_db';
const STORE_NAME = 'templates_store';
const DB_VERSION = 1;

function openDB(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    if (typeof window === 'undefined' || !window.indexedDB) {
      reject(new Error('IndexedDB is not supported'));
      return;
    }

    const request = indexedDB.open(DB_NAME, DB_VERSION);

    request.onupgradeneeded = () => {
      const db = request.result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME, { keyPath: 'id' });
      }
    };

    request.onsuccess = () => {
      resolve(request.result);
    };

    request.onerror = () => {
      reject(request.error);
    };
  });
}

export async function loadGalleryTemplatesFromDB(): Promise<GalleryTemplate[] | null> {
  try {
    const db = await openDB();
    return new Promise((resolve) => {
      const transaction = db.transaction(STORE_NAME, 'readonly');
      const store = transaction.objectStore(STORE_NAME);
      const request = store.getAll();

      request.onsuccess = () => {
        const results = request.result as GalleryTemplate[];
        if (results && results.length > 0) {
          resolve(results);
        } else {
          resolve(null);
        }
      };

      request.onerror = () => {
        resolve(null);
      };
    });
  } catch (err) {
    console.warn('Failed to load gallery from IndexedDB:', err);
    return null;
  }
}

export async function saveGalleryTemplatesToDB(templates: GalleryTemplate[]): Promise<boolean> {
  try {
    const db = await openDB();
    return new Promise((resolve) => {
      const transaction = db.transaction(STORE_NAME, 'readwrite');
      const store = transaction.objectStore(STORE_NAME);

      // Put all templates
      templates.forEach((template) => {
        store.put(template);
      });

      transaction.oncomplete = () => {
        resolve(true);
      };

      transaction.onerror = () => {
        console.warn('Failed to commit gallery templates transaction:', transaction.error);
        resolve(false);
      };
    });
  } catch (err) {
    console.warn('Failed to save gallery to IndexedDB:', err);
    return false;
  }
}
