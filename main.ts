// Validated entry program for make.fun competition w33
import * as fs from 'node:fs';
import * as path from 'node:path';

const ENTRY_TEXT = "The same senators drafting criminal penalties for autonomous neural network architectures still print out their emails so an unpaid intern can scan them back in as upside-down JPEGs.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';
fs.mkdirSync(outputDir, { recursive: true });
fs.writeFileSync(path.join(outputDir, 'entry.txt'), `${ENTRY_TEXT}\n`, 'utf8');
