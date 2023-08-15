import { describe, it, expect, vi, test } from 'vitest';
import prismaMock from '../../../libs/__mocks__/prisma';
import { User } from '../../types/user';
import request from 'supertest';
import initApp from '../../express';

const supertest = request(initApp(prismaMock));

describe('user auth API', () => {
    it('should return the generated user', async () => {
        const user: User = { email: 'user@prisma.io', username: 'Prisma Fan', password: 'test' };
        const currentDateTime = new Date();
        // mock the db response
        prismaMock.user.create.mockResolvedValue({ ...user, id: 1, active: true, updatedAt: currentDateTime, createdAt: currentDateTime });
        const resp = await supertest.post('/user').send({ username: 'john', password: 'Test@123', email: 'harish@gmail.com' });
        expect(resp.statusCode).toBe(200);
    });

    it('should throw password must be at least x characters long error', async () => {
        const user: User = { email: 'user@prisma.io', username: 'Prisma Fan', password: 'test' };
        const currentDateTime = new Date();
        // mock the db response
        prismaMock.user.create.mockResolvedValue({ ...user, id: 1, active: true, updatedAt: currentDateTime, createdAt: currentDateTime });
        const resp = await supertest.post('/user').send({ username: 'john', password: 'test', email: 'harish@gmail.com' });
        expect(resp.statusCode).toBe(400);
        expect(resp.body.status).equal('error');
        expect(resp.body.message).equal('Password must be at least 6 characters long');
    });

    it('should throw password regex rule error', async () => {
        const user: User = { email: 'user@prisma.io', username: 'Prisma Fan', password: 'test' };
        const currentDateTime = new Date();
        // mock the db response
        prismaMock.user.create.mockResolvedValue({ ...user, id: 1, active: true, updatedAt: currentDateTime, createdAt: currentDateTime });
        const resp = await supertest.post('/user').send({ username: 'john', password: 'testtest', email: 'harish@gmail.com' });
        expect(resp.statusCode).toBe(400);
        expect(resp.body.status).equal('error');
        expect(resp.body.message).equal('Password must include at least one lowercase, one uppercase, one digit, and one special character');
    });

    it('should throw username should be composed of lowercase letters and digits error', async () => {
        const user: User = { email: 'user@prisma.io', username: 'Prisma Fan', password: 'test' };
        const currentDateTime = new Date();
        // mock the db response
        prismaMock.user.create.mockResolvedValue({ ...user, id: 1, active: true, updatedAt: currentDateTime, createdAt: currentDateTime });
        const resp = await supertest.post('/user').send({ username: 'john-', password: 'testtest', email: 'harish@gmail.com' });
        expect(resp.statusCode).toBe(400);
        expect(resp.body.status).equal('error');
        expect(resp.body.message).equal('Username should be composed of lowercase letters and digits only');
    });
});
