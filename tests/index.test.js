import { expect } from 'chai'; // Used for unit testing
import jsdom from 'jsdom'; // Used for thesting dom elements within node env
import fs from 'fs'; // Using the file system node library

describe('Our first test', () => {
    it('should pass', () => {
        expect(true).to.equal(true);
    });
});

// Tesing h1 element in index.html
describe('Testing index.html', () => {
    it('should have h1 that says Users', (done) => {
        const index = fs.readFileSync('./src/index.html', 'utf-8');
        jsdom.env(index, (err, window) => {
            const h1 = window.document.getElementsByTagName('h1')[0];
            expect(h1.innerHTML).to.equal("Users");
            done();
            window.close();
        });
    });
});
