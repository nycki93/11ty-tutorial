/** @import {UserConfig} from '@11ty/eleventy' */

// This is the config file! Here is where we can tell 11ty where our files are
// stored and what to do with them. These four options should be all you need
// to get started.

/** @param {UserConfig} eleventyConfig */
export default async function(eleventyConfig) {
    // 11ty will look in site-source for markdown and other non-html files to
    // convert.
    eleventyConfig.setInputDirectory('site-source');

    // 11ty writes the converted files to site-output.
    // If you make a mistake, you can delete the 'site-output' folder
    // and generate a new one. Just run 'npm run build' again.
    eleventyConfig.setOutputDirectory('site-output');
    
    // Passthrough copy tells 11ty to copy these files directly to the output.
    // So, if you want to write simple html, just place it in site-static!
    eleventyConfig.addPassthroughCopy({ 'site-static': '/' });

    // Files in site-includes are available to import into other files, but
    // won't be copied into the output. This is where you can put partial
    // pages, like a navigation bar, that you want to re-use.
    // Note that this is relative to the input directory, so it's 
    // "../site-include" and not "site-include".
    eleventyConfig.setIncludesDirectory('../site-include');
}
