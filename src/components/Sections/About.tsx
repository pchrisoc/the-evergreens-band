import { FC, memo } from 'react';

import { aboutData, SectionId } from '../../data/data';
import Section from '../Layout/Section';

const About: FC = memo(() => {
  const { description } = aboutData;
  return (
    <Section className="bg-neutral-800 w-full" sectionId={SectionId.About}>
      <div className="flex flex-col gap-y-2">
        <h2 className="text-2xl font-bold text-white">About the band</h2>
        <p className="prose prose-sm text-gray-300 sm:prose-base max-w-none">
          {description}
        </p>
      </div>
    </Section>
  );
});

About.displayName = 'About';
export default About;
