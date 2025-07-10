import { defineCollection, z } from '@nuxt/content'
import { asSeoCollection } from '@nuxtjs/seo/content'

const commonContentSchema = z.object({
  title: z.string().nonempty(),
  description: z.string().nonempty(),
  date: z.string().nonempty(),
})

const commonArticleSchema = z.object({
  title: z.string().nonempty(),
  description: z.string().nonempty(),
  date: z.string().nonempty(),
  image: z.string().url(),
  readingTime: z.string().nonempty(),
  tags: z.array(z.string().nonempty()),
})

const commonProjectSchema = z.object({
  name: z.string().nonempty(),
  image: z.string().nonempty(), // Use .url() only if it's a full URL; keep as .nonempty() for relative paths
  description: z.string().nonempty(),
  platforms: z.array(z.enum(['web', 'mobile'])).nonempty(),
  stack: z.array(
    z.object({
      name: z.string().nonempty(),
      icon: z.string().nonempty(),
    }),
  ),
  role: z.array(z.string().nonempty()).nonempty(),

  featured: z.boolean().optional(),
})

const commonFaqSchema = z.object({
  title: z.string().nonempty(),
  subtitle: z.string().nonempty(),
  faqQuestions: z.array(
    z.object({
      icon: z.string().nonempty(),
      questions: z.array(
        z.object({
          label: z.string().nonempty(),
          content: z.string().nonempty(),
        }),
      ),
    }),
  ),
})

const commonFunFactSchema = z.object({
  funFacts: z.array(
    z.object({
      icon: z.string().nonempty(),
      fact: z.string().nonempty(),
    }),
  ),
})

const commonExperienceSchema = z.object({
  experience: z.array(
    z.object({
      title: z.string().nonempty(),
      company: z.string().nonempty(),
      period: z.string().nonempty(),
      description: z.array(z.string().nonempty()),
      technologies: z.array(
        z.object({
          name: z.string().nonempty(),
          icon: z.string().nonempty(),
        }),
      ),
    }),
  ),
})

const commonEducationSchema = z.object({
  education: z.array(
    z.object({
      degree: z.string().nonempty(),
      institution: z.string().nonempty(),
      period: z.string().nonempty(),
      location: z.string().nonempty(),
      achievements: z.array(z.string().nonempty()),
    }),
  ),
})

export const collections = {
  content_en: defineCollection(
    asSeoCollection({
      type: 'page',
      source: {
        include: 'en/**/*.md',
        exclude: ['en/articles/*.md'],
        prefix: '/en',
      },
      schema: commonContentSchema,
    }),
  ),
  content_es: defineCollection(
    asSeoCollection({
      type: 'page',
      source: {
        include: 'es/**/*.md',
        exclude: ['es/articles/*.md'],
        prefix: '/es',
      },
      schema: commonContentSchema,
    }),
  ),
  articles_en: defineCollection(
    asSeoCollection({
      type: 'page',
      source: {
        include: 'en/articles/*.md',
        prefix: '/en/articles',
      },
      schema: commonArticleSchema,
    }),
  ),
  articles_es: defineCollection(
    asSeoCollection({
      type: 'page',
      source: {
        include: 'es/articles/*.md',
        prefix: '/es/articles',
      },
      schema: commonArticleSchema,
    }),
  ),
  projects_en: defineCollection(
    asSeoCollection({
      type: 'data',
      source: 'en/projects/*.json',
      schema: commonProjectSchema,
    }),
  ),
  projects_es: defineCollection(
    asSeoCollection({
      type: 'data',
      source: 'es/projects/*.json',
      schema: commonProjectSchema,
    }),
  ),
  stack: defineCollection({
    type: 'data',
    source: 'stack.json',
    schema: z.object({
      items: z.array(
        z.object({
          name: z.string().nonempty(),
          link: z.string().url(),
          icon: z.string().nonempty(),
        }),
      ),
    }),
  }),
  faq_en: defineCollection({
    type: 'data',
    source: 'en/faq.json',
    schema: commonFaqSchema,
  }),
  faq_es: defineCollection({
    type: 'data',
    source: 'es/faq.json',
    schema: commonFaqSchema,
  }),
  fun_facts_en: defineCollection({
    type: 'data',
    source: 'en/funFacts.json',
    schema: commonFunFactSchema,
  }),
  fun_facts_es: defineCollection({
    type: 'data',
    source: 'es/funFacts.json',
    schema: commonFunFactSchema,
  }),
  experiences_en: defineCollection({
    type: 'data',
    source: 'en/experiences.json',
    schema: commonExperienceSchema,
  }),
  experiences_es: defineCollection({
    type: 'data',
    source: 'es/experiences.json',
    schema: commonExperienceSchema,
  }),
  education_en: defineCollection({
    type: 'data',
    source: 'en/education.json',
    schema: commonEducationSchema,
  }),
  education_es: defineCollection({
    type: 'data',
    source: 'es/education.json',
    schema: commonEducationSchema,
  }),
}
