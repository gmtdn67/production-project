/* const fs = require('fs');

async function deleteCache() {
    const cachePath = '.\\node_modules\\.cache';

    try {
        await fs.rm(cachePath, { recursive: true, force: true });
        console.log('Cache deleted successfully');
    } catch (err) {
        if (err.code === 'ENOENT') {
            console.log('Cahce does not exist');
        } else {
            console.error('Error deleting cache:', err);
        }
    }
}

deleteCache();
 */

console.log('CLEAR CACHE');
