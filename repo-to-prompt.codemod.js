/**
 * @param {vscode} vscode 
 * @param {vscode.Uri} selectedFile 
 * @param {vscode.Uri[]} selectedFiles 
 */
async function run(vscode, selectedFile, selectedFiles) {
    const lines = [];
    
    // Helper to recursively walk directories
    async function walkDirectory(uri, basePath = '') {
        const children = await vscode.workspace.fs.readDirectory(uri);
        
        // Sort: folders first, then files, alphabetically
        children.sort((a, b) => {
            if (a[1] === b[1]) return a[0].localeCompare(b[0]);
            return a[1] === vscode.FileType.Directory ? -1 : 1;
        });

        for (const [name, type] of children) {
            // SKIP these folders/files
            if (name === 'node_modules' || name === '.git' || name === '.vscode' || name === 'dist' || name === 'build') {
                continue;
            }
            // SKIP lock files and large binaries
            if (name.endsWith('.lock') || name.endsWith('.png') || name.endsWith('.jpg')) {
                continue;
            }

            const childUri = vscode.Uri.joinPath(uri, name);
            const relativePath = basePath ? `${basePath}/${name}` : name;

            if (type === vscode.FileType.Directory) {
                await walkDirectory(childUri, relativePath);
            } else if (type === vscode.FileType.File) {
                // ONLY include these file types (add more if needed)
                if (name.endsWith('.js') || name.endsWith('.jsx') || name.endsWith('.ts') || name.endsWith('.tsx') || name.endsWith('.json') || name.endsWith('.css') || name.endsWith('.html') || name.endsWith('.md')) {
                    try {
                        const content = new TextDecoder().decode(await vscode.workspace.fs.readFile(childUri));
                        lines.push(`\n### FILE: ${relativePath}`);
                        lines.push("```" + (name.endsWith('json') ? 'json' : name.endsWith('css') ? 'css' : 'javascript'));
                        lines.push(content);
                        lines.push("```");
                    } catch (e) {
                        console.log(`Error reading ${relativePath}: ${e}`);
                    }
                }
            }
        }
    }

    // Start from the first workspace folder
    if (vscode.workspace.workspaceFolders && vscode.workspace.workspaceFolders.length > 0) {
        await walkDirectory(vscode.workspace.workspaceFolders[0].uri);
    }

    // Copy to clipboard
    const finalOutput = lines.join('\n');
    await vscode.env.clipboard.writeText(finalOutput);
    vscode.window.showInformationMessage(`✅ Copied ${lines.filter(l => l.startsWith('### FILE:')).length} files to clipboard!`);
}
await run(vscode, selectedFile, selectedFiles);