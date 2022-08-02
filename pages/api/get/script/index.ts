// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import { cwd } from 'process';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const { file } = req.query;

    // check db is able to access or not
    res.setHeader('Content-Type', 'script/js').send(
        fs.readFileSync(`${cwd()}/script/${file}/index.js`)
    );
}
