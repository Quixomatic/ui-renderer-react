/**
 * This is a temporary workaround to expose legacy global variables
 * to keep the Seismic Test Plugin (component drivers) working correctly.
 * Please rip this out (and fix the esbuild.config.js to use the correct
 * entry point) once we get a real fix for that
 */

import * as exports from './index.js';

if (typeof window !== 'undefined') window.__QUIXOMATIC__$servicenow_ui_renderer_react = exports;

export * from './index.js';
export {default} from './index.js';
