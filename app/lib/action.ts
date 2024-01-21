'use server'

import { PrismaClient } from '@prisma/client';
import { revalidatePath } from 'next/cache';
import { z } from 'zod';

const prisma = new PrismaClient();

export async function createBrand(prevState: any, formData: FormData) {
  const schema = z.object({
    name: z.string().nonempty(),
    url: z.string().nonempty(),
  });

  const data = schema.parse({
    name: formData.get('name'),
    url: formData.get('url'),
  });

  try
  {
    await prisma.brands.upsert({
      where: { name: data.name },
      update: {},
      create: {
        name: data.name,
        website: data.url,
      },
    });

    revalidatePath('/brands');
  }
  catch(e)
  {
    console.error('Database Error:', e);
    throw new Error('Failed to create brand.');
  }
}