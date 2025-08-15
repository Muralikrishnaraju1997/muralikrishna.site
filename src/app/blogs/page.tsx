import { HoverEffect } from '@/components/contributions-card';
import { ProjectCard } from '@/components/project-card';
import Image from 'next/image';
import { DATA } from '@/data';
import type { Metadata } from 'next';
import Markdown from 'react-markdown';
import FreeCodeCamp from '@/components/blog-card';

export const metadata: Metadata = {
  title: 'Projects',
  description: 'A summary of my Projects and open-source contributions.',
};

export default function ProjectsPage() {
  return (
    <section>
         
        <div className='mb-5'>
         <FreeCodeCamp/>
          
        </div>
        
    </section>
  );
}