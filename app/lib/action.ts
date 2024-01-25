'use server'

import { PrismaClient } from '@prisma/client';
import { revalidatePath } from 'next/cache';
import { redirect } from "next/navigation";
import { z } from 'zod';

const prisma = new PrismaClient();

export async function fetchBrands() {
  try {
    const brands = await prisma.brands.findMany();

    return brands;
  } 
  catch (error) 
  {
    console.log('Database Error:', error);
    throw new Error('Failed to fetch brands');
  } 
}

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

export async function deleteBrand(id: string) {
  try
  {
    console.log('Brand delete id', id)
    const retValue = await prisma.brands.delete({
      where: { id },
    });

    revalidatePath('/brands');
  }
  catch(e)
  {
    console.error('Database Error:', e);
    throw new Error('Failed to delete brand.');
  }
}

export async function updateBrand(id: string, formData: FormData) {
  const rawFormData = {
    name: formData.get('name') as string,
    website: formData.get('website') as string
  }

  try {
    await prisma.brands.update({
      where: { id },
      data: rawFormData,
    });

    revalidatePath('/brands');
    redirect('/brands');
  } 
  catch (error) 
  {
    console.log('Database Error:', error);
    throw new Error('Failed to update brand.');
  }
}
