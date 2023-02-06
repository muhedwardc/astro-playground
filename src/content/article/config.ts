import { z, defineCollection } from 'astro:content';

const articleCollection = defineCollection({ 
    schema: z.object({
        title: z.string(),
        description: z.string(),
        image: z.string()
    })
});

export const collections = {
  'article': articleCollection,
};