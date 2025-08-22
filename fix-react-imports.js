#!/usr/bin/env node

/**
 * Fix React Imports Script
 * Safely removes unused React imports from components
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// File extensions to process
const extensions = ['.jsx', '.js'];

// Directories to skip
const skipDirs = ['node_modules', '.git', 'dist', 'build'];

function shouldSkipDir(dirName) {
    return skipDirs.includes(dirName);
}

function hasJSX(content) {
    // Check if file contains JSX elements
    return content.includes('<') && content.includes('>') && 
           (content.includes('return') || content.includes('render') || content.includes('jsx'));
}

function processFile(filePath) {
    try {
        let content = fs.readFileSync(filePath, 'utf8');
        let modified = false;
        
        // Check if file contains JSX
        const containsJSX = hasJSX(content);
        
        // Remove unused React import if no JSX is used
        if (!containsJSX) {
            const reactImportPattern = /import React from ["']react["'];?\n/g;
            const newContent = content.replace(reactImportPattern, '');
            if (newContent !== content) {
                content = newContent;
                modified = true;
                console.log(`✅ Removed unused React import from ${filePath}`);
            }
        }
        
        if (modified) {
            fs.writeFileSync(filePath, content, 'utf8');
        }
        
        return modified;
    } catch (error) {
        console.error(`❌ Error processing ${filePath}:`, error.message);
        return false;
    }
}

function walkDir(dir) {
    const files = fs.readdirSync(dir);
    let modifiedCount = 0;
    
    files.forEach(file => {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);
        
        if (stat.isDirectory()) {
            if (!shouldSkipDir(file)) {
                modifiedCount += walkDir(filePath);
            }
        } else if (extensions.includes(path.extname(file))) {
            if (processFile(filePath)) {
                modifiedCount++;
            }
        }
    });
    
    return modifiedCount;
}

// Main execution
console.log('🔧 Starting React imports cleanup...\n');

const srcDir = path.join(__dirname, 'src');
const modifiedFiles = walkDir(srcDir);

console.log(`\n✨ Cleanup complete! Modified ${modifiedFiles} files.`);
console.log('\n📝 Next steps:');
console.log('1. Run "npm run lint" to check remaining issues');
console.log('2. Test the application to ensure nothing is broken');
