import { FC, memo } from 'react';

import { aboutData, SectionId } from '../../data/data';
import Section from '../Layout/Section';

const About: FC = memo(() => {
  const { description, aboutItems } = aboutData;
  return (
    <Section className="bg-neutral-800 w-full" sectionId={SectionId.About}>
      <div className="flex flex-col gap-y-2">
        <h2 className="text-2xl font-bold text-white">About the band</h2>
        <p className="prose prose-sm text-gray-300 sm:prose-base max-w-none">
          {description}
        </p>
      </div>
      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {aboutItems.map(({ label, text, Icon }, idx) => (
          <li className="col-span-1 flex items-start gap-x-2" key={idx}>
            {Icon && <Icon className="h-5 w-5 text-white" />}
            <span className="text-sm font-bold text-white">{label}:</span>
            <span className="text-sm text-gray-300">{text}</span>
          </li>
        ))}
      </ul>
    </Section>
  );
});

About.displayName = 'About';
export default About;
