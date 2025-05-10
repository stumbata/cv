// 1. Import utilities from `astro:content`
import { defineCollection, z } from 'astro:content';

// 2. Import loader(s)
import { file } from 'astro/loaders';

const myInfo = defineCollection({
    loader: file('src/my_info.json', {
        parser: (text) => {
            let myInfo = JSON.parse(text);
            myInfo.id = '1';
            return [myInfo];
        },
    }),
    schema: z.object({
        firstname: z.string(),
        lastname: z.string(),
        email: z.string(),
        phone: z.string(),
        birthday: z.string(),
        living_city: z.string(),
        cv_motto: z.string(),
        job_history: z.array(
            z.object({
                company: z.string(),
                location: z.string(),
                company_site: z.string(),
                job_title: z.string(),
                start_date: z.string(),
                end_date: z.string(),
                company_description: z.string(),
                responsibilities: z.array(z.string()),
            })
        ),
        achievements: z.array(
            z.object({
                title: z.string(),
                description: z.string(),
            })
        ),
        languages: z.array(
            z.object({
                name: z.string(),
                level_text: z.string(),
                level_points: z.number(),
                level_max_points: z.number(),
            })
        ),
        projects: z.array(
            z.object({
                title: z.string(),
                start_date: z.string(),
                end_date: z.string(),
                location: z.string(),
                my_role: z.string(),
                results: z.array(z.string()),
            })
        ),
        personal_projects: z.array(
            z.object({
                site: z.string(),
                tech: z.string(),
                info: z.string(),
            })
        ),
        courses: z.array(z.string()),
        passions: z.array(z.string()),
        summary: z.string(),
        technologies: z.array(
            z.object({
                name: z.string(),
                skills: z.array(z.string()),
            })
        ),
        education: z.array(
            z.object({
                school_name: z.string(),
                start_date: z.string(),
                end_date: z.string(),
                speciality: z.string(),
                degree: z.string(),
                grade: z.number(),
                grade_max: z.string(),
            })
        ),
    }),
});

// 4. Export a single `collections` object to register your collection(s)
export const collections = { myInfo };
