import { vi, beforeEach } from 'vitest';

beforeEach(() => {
    vi.mock('peepal', async () => {
        return {
            default: {
                peepal: vi.fn().mockReturnValue({
                    info: vi.fn(),
                    debug: vi.fn(),
                    trace: vi.fn(),
                    error: vi.fn(),
                    warn: vi.fn(),
                    fatal: vi.fn(),
                }),
                child: vi.fn().mockReturnValue({
                    info: vi.fn(),
                    debug: vi.fn(),
                    trace: vi.fn(),
                    error: vi.fn(),
                    warn: vi.fn(),
                    fatal: vi.fn(),
                }),
            },
            peepal: vi.fn().mockReturnValue({
                info: vi.fn(),
                debug: vi.fn(),
                trace: vi.fn(),
                error: vi.fn(),
                warn: vi.fn(),
                fatal: vi.fn(),
            }),
            child: vi.fn().mockReturnValue({
                info: vi.fn(),
                debug: vi.fn(),
                trace: vi.fn(),
                error: vi.fn(),
                warn: vi.fn(),
                fatal: vi.fn(),
            }),
            contextMiddleware: (req, res, next) => next(),
        };
    });
});
