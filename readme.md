# gigs-adapter-authenticjobs

> A [gigs](https://github.com/alebelcor/gigs) adapter for [Authentic Jobs](https://authenticjobs.com)

[![npm version](https://img.shields.io/npm/v/gigs-adapter-authenticjobs.svg)](https://npmjs.org/package/gigs-adapter-authenticjobs)
[![Build Status](https://img.shields.io/travis/alebelcor/gigs-adapter-authenticjobs/master.svg)](https://travis-ci.org/alebelcor/gigs-adapter-authenticjobs)
[![Test coverage](https://img.shields.io/coveralls/alebelcor/gigs-adapter-authenticjobs.svg)](https://coveralls.io/github/alebelcor/gigs-adapter-authenticjobs)

## Install

Ensure you have [Node.js](https://nodejs.org) version 10+ installed. Then run the following:

```bash
npm install --save gigs
npm install --save gigs-adapter-authenticjobs
```

## Setup

Set up `AUTHENTICJOBS_API_KEY` environment variable with your [Authentic Jobs API key](https://authenticjobs.com/api).

## Usage

```js
const gigs = require('gigs');

const adapter = require('gigs-adapter-authenticjobs');

gigs([adapter])
  .process()
  .then(gigs => {
    console.log(gigs);
    //=> [ {title: 'Senior Node.js Developer'}, ... ]
  });
```

## Related

* [gigs](https://github.com/alebelcor/gigs) - A jobs/careers/openings/positions aggregator

## License

MIT © Alejandro Beltrán

## Disclaimer

This was made for illustrative purposes.
I do not own the content generated by this tool.
All rights belong to their respective owners.
No copyright infringement intended.
