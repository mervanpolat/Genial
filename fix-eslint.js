#!/usr/bin/env node

/**
 * ESLint Auto-Fix Script
 * Automatically fixes common ESLint issues across the codebase
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Common patterns to fix
const fixes = [
    // Remove unused React imports
    {
        pattern: /import React from ["']react["'];?\n/g,
        replacement: '',
        description: 'Remove unused React imports'
    },
    
    // Fix unescaped quotes in JSX
    {
        pattern: /"([^"]*)"([^"]*)"([^"]*)"/g,
        replacement: (match, p1, p2, p3) => {
            return `&quot;${p1}&quot;${p2}&quot;${p3}&quot;`;
        },
        description: 'Escape quotes in JSX'
    },
    
    // Add missing key props to array elements
    {
        pattern: /\.map\(\(([^,]+), index\) => \(/g,
        replacement: '.map(($1, index) => (',
        description: 'Ensure map functions have index parameter'
    }
];

// File extensions to process
const extensions = ['.jsx', '.js'];

// Directories to skip
const skipDirs = ['node_modules', '.git', 'dist', 'build'];

function shouldSkipDir(dirName) {
    return skipDirs.includes(dirName);
}

function processFile(filePath) {
    try {
        let content = fs.readFileSync(filePath, 'utf8');
        let modified = false;
        
        fixes.forEach(fix => {
            const newContent = content.replace(fix.pattern, fix.replacement);
            if (newContent !== content) {
                content = newContent;
                modified = true;
                console.log(`✅ Fixed: ${fix.description} in ${filePath}`);
            }
        });
        
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
console.log('🔧 Starting ESLint auto-fix...\n');

const srcDir = path.join(__dirname, 'src');
const modifiedFiles = walkDir(srcDir);

console.log(`\n✨ Auto-fix complete! Modified ${modifiedFiles} files.`);
console.log('\n📝 Next steps:');
console.log('1. Run "npm run lint" to check remaining issues');
console.log('2. Manually fix any remaining PropTypes and key prop issues');
console.log('3. Test the application to ensure nothing is broken');
