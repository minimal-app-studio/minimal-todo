import { PrismaClient } from '@prisma/client';
import { beforeEach } from 'vitest';
import { DeepMockProxy, mockDeep, mockReset } from 'vitest-mock-extended';

beforeEach(() => {
    mockReset(prismaMock);
});

const prismaMock: DeepMockProxy<PrismaClient> = mockDeep<PrismaClient>();
export default prismaMock;
