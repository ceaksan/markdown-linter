# Markdown Linting Tool

This is a repository for a Node.js script that scans directories and subdirectories for Markdown files and checks them for linting errors using the markdownlint package. The script supports custom configuration options for markdownlint and will only scan files that match a specific naming pattern.

The script outputs a message indicating whether any linting errors were found and, if so, provides details on the specific errors, including the file, line number, and description of the issue.

Use this script to quickly identify and correct linting errors in your Markdown files, ensuring consistency and readability across your documentation.

### Installation
1. Clone the repository to your local machine.
2. Install the required packages by running the following command in your terminal:

```bash
npm install
```

## Usage

This is a simple command-line tool that uses the markdownlint library to scan a directory and its subdirectories for Markdown files that match a certain pattern (in this case, files named post.en.md and post.tr.md) and check them for any linting errors.

1. Open markdown-lint.js in a text editor.
2. Edit the dirPath variable to point to the directory you want to scan.
3. (Optional) Edit the config object to specify your desired markdownlint configuration options.
4. Save the changes to markdown-lint.js.
5. Run the following command in your terminal:

```bash
node markdown-lint.js
```

The script will scan the specified directory and output any linting errors it finds.
