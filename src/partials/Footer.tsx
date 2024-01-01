import { Section } from 'astro-boilerplate-components';

import { AppConfig } from '@/utils/AppConfig';

const Footer = () => (
  <Section>
    <div className="text-sm">
      © Copyright {new Date().getFullYear()} built with ♥ by{' '}
      {AppConfig.site_name}
    </div>
  </Section>
);

export { Footer };
