import { rest } from 'msw';
import { dummyResponse } from './dummyResponse';

export const handlers = [
    rest.get(
        'https://api.mixcloud.com/spartacus/following?limit=10',
        (req, res, ctx) => {
            return res(ctx.status(200), ctx.json(dummyResponse));
        }
    )
];
