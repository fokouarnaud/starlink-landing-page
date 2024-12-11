const fs = require('fs');
const path = require('path');
const archiver = require('archiver');

// Create output directory if it doesn't exist
const outputDir = path.join(__dirname, '../exports');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Create a file to stream archive data to
const output = fs.createWriteStream(path.join(outputDir, 'starlink-landing.zip'));
const archive = archiver('zip', {
  zlib: { level: 9 } // Sets the compression level
});

// Listen for all archive data to be written
output.on('close', () => {
  console.log(`Archive created successfully! Size: ${archive.pointer()} bytes`);
});

// Handle warnings and errors
archive.on('warning', (err) => {
  if (err.code === 'ENOENT') {
    console.warn('Warning:', err);
  } else {
    throw err;
  }
});

archive.on('error', (err) => {
  throw err;
});

// Pipe archive data to the file
archive.pipe(output);

// Add files to the archive
const filesToExclude = [
  'node_modules',
  'dist',
  'exports',
  '.git',
  '.bolt'
];

const addDirectoryToArchive = (dirPath, root = '') => {
  const files = fs.readdirSync(dirPath);
  
  files.forEach(file => {
    const fullPath = path.join(dirPath, file);
    const relativePath = path.join(root, file);
    
    if (filesToExclude.includes(file)) {
      return;
    }
    
    if (fs.statSync(fullPath).isDirectory()) {
      addDirectoryToArchive(fullPath, relativePath);
    } else {
      archive.file(fullPath, { name: relativePath });
    }
  });
};

// Add all project files
addDirectoryToArchive(path.join(__dirname, '..'));

// Finalize the archive
archive.finalize();