# 11ty Starter Kit

This guide is for people who have already written some HTML and want to try out 11ty. You can use 11ty to generate navbars, page titles, next/prev links, basically anything that you might want to copy and paste to a lot of pages. The result is a static website that you can upload to a free host like neocities or nekoweb.

## Install

- Install Node.js on your system. Node.js runs on Windows, Mac, and Linux!
- Download this code. If you're on Github, click Code -> Download ZIP.
- Unzip the code to a folder. Open a command prompt and navigate to that folder.
- Type `npm install`. This will download and install 11ty. Warnings at this stage are fine as long as you see "found 0 vulnerabilities" at the bottom.

## Usage

- In your command prompt, type `npm run start`. This will run the "start" script in *package.json*, which will build the website and host it on <http://localhost:8080>.
- Open that page, and play around! You can make whatever changes you want while the program is running, and it should automatically re-build and appear in your browser.

## What's Included?

**site-static**: Anything placed here will be copied to the output, no changes made. If you have already written a neocities website, you can copy all your html into here and it will just work! You can also place things here like images and css that you want to copy without changes.

**site-source**: Anything placed here will be treated as a source file by 11ty, and it will try to build it into html. Check out *post.md* for an example.

**site-include**: Anything placed here will be treated as a source file by 11ty, but it will *not* try to build it into html. Instead, these are snippets of code that can be used by other source files. Check out *base.njk* for an example.

**site-output**: This is where 11ty will build the completed website. You can delete this folder any time you want, and have 11ty rebuild it from scratch. You can also copy the files in this folder and upload them to neocities when you're ready to put your work on the internet!

**eleventy.config.js**: This is the file where you can tell 11ty where you've placed everything else. You shouldn't have to mess with this, but when you're ready, you can read more about it on <https://www.11ty.dev/docs/config/>.

**package.json**: This is the file that tells Node.js what program we want to run. We tell it that when we type `npm run build` we want to build the site with 11ty, and when we type `npm run start` we want to build the site *and* serve a local preview of it.

**package-lock.json**: This file is used by Node.js to keep track of all the stuff that's changed since the last time 11ty was updated. You don't need to do anything with this.

**.gitignore**: This file is used to tell git which files are safe to delete. It's safe to delete node_modules because we can re-create it by running `npm install`, and it's safe to delete site-output because we can re-create it by running `npm run build`. 

Git is a program used to time travel inside of text files. Think of it like a really long undo history, that can also have branching timelines inside of it. Github is a website where you can upload git files to share them, just like Pornhub is a website where you can upload porn.

## Uninstall

If you want to remove 11ty, just delete the *node_modules* folder. To uninstall Node.js, the steps will be different for each operating system. In Windows, you can uninstall Node.js from the "Add or Remove Programs" menu.
