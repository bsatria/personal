import { GradientText, Section } from 'astro-boilerplate-components';

const Experienced = () => (
  <Section
    title={
      <>
        Recent <GradientText>Experience</GradientText>
      </>
    }
  >
    <div className="flex flex-col gap-6">
      <ol className="relative border-s border-gray-200 dark:border-gray-700">
        {/* Koinworks */}
        <li className="mb-6 ms-6">
          <span className="absolute -start-3 flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 ring-8 ring-white dark:bg-blue-900 dark:ring-gray-900">
            <svg
              className="h-2.5 w-2.5 text-blue-800 dark:text-blue-300"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
            </svg>
          </span>
          <h3 className="mb-1 flex items-center text-lg font-semibold text-gray-900 dark:text-white">
            Front End Engineer @&nbsp;
            <GradientText>Koinworks Indonesia</GradientText>
            <span className="me-2 ms-3 rounded bg-blue-100 px-2.5 py-0.5 text-sm font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-300">
              Present
            </span>
          </h3>
          <time className="mb-2 block text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            November 2021 - Present
          </time>
          <p className="mb-1 text-base font-normal text-gray-500 dark:text-gray-400">
            - Built Maintenance a Back-office CMS using ReactJS / NextJS
          </p>
          <p className="mb-1 text-base font-normal text-gray-500 dark:text-gray-400">
            - Create a starterkit, standaritation & cdn prefix for Frontend Team
          </p>
          <p className="mb-1 text-base font-normal text-gray-500 dark:text-gray-400">
            - Slicing UI Design to HTML CSS & ReactJS / NextJS
          </p>
          <p className="mb-1 text-base font-normal text-gray-500 dark:text-gray-400">
            - Collaborate, Consume & Manage API from Backend
          </p>
        </li>
        {/* Jojonomic */}
        <li className="mb-6 ms-6">
          <span className="absolute -start-3 flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 ring-8 ring-white dark:bg-blue-900 dark:ring-gray-900">
            <svg
              className="h-2.5 w-2.5 text-blue-800 dark:text-blue-300"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
            </svg>
          </span>
          <h3 className="mb-1 flex items-center text-lg font-semibold text-gray-900 dark:text-white">
            Front End Engineer @&nbsp;
            <GradientText>Jojonomic Indonesia</GradientText>
          </h3>
          <time className="mb-2 block text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            January 2021 - October 2021
          </time>
          <p className="mb-1 text-base font-normal text-gray-500 dark:text-gray-400">
            - Built and Maintenance a HR Management System using VueJS
          </p>
          <p className="mb-1 text-base font-normal text-gray-500 dark:text-gray-400">
            - Slicing UI Design to HTML CSS & ReactJS / NextJS
          </p>
          <p className="mb-1 text-base font-normal text-gray-500 dark:text-gray-400">
            - Collaborate, Consume & Manage API from Backend
          </p>
        </li>
        {/* Restorocket */}
        <li className="mb-6 ms-6">
          <span className="absolute -start-3 flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 ring-8 ring-white dark:bg-blue-900 dark:ring-gray-900">
            <svg
              className="h-2.5 w-2.5 text-blue-800 dark:text-blue-300"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
            </svg>
          </span>
          <h3 className="mb-1 flex items-center text-lg font-semibold text-gray-900 dark:text-white">
            Front End Engineer @&nbsp;
            <GradientText>Restorocket Indonesia</GradientText>
          </h3>
          <time className="mb-2 block text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            April 2020 - December 2020
          </time>
          <p className="mb-1 text-base font-normal text-gray-500 dark:text-gray-400">
            - Built and Maintenance a Food & Beverage Product using ReactJS and
            React Native
          </p>
          <p className="mb-1 text-base font-normal text-gray-500 dark:text-gray-400">
            - Slicing UI Design to HTML CSS & ReactJS / NextJS
          </p>
          <p className="mb-1 text-base font-normal text-gray-500 dark:text-gray-400">
            - Collaborate, Consume & Manage API from Backend
          </p>
        </li>
        {/* Nodeflux Indonesia */}
        <li className="mb-6 ms-6">
          <span className="absolute -start-3 flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 ring-8 ring-white dark:bg-blue-900 dark:ring-gray-900">
            <svg
              className="h-2.5 w-2.5 text-blue-800 dark:text-blue-300"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
            </svg>
          </span>
          <h3 className="mb-1 flex items-center text-lg font-semibold text-gray-900 dark:text-white">
            Front End Engineer @&nbsp;
            <GradientText>Nodeflux Indonesia</GradientText>
          </h3>
          <time className="mb-2 block text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            November 2018 - April 2020
          </time>
          <p className="mb-1 text-base font-normal text-gray-500 dark:text-gray-400">
            - Built and Maintenance a Cloud Artificial Intelligence Product
            using NextJS cloud.nodeflux.io
          </p>
          <p className="mb-1 text-base font-normal text-gray-500 dark:text-gray-400">
            - Slicing UI Design to HTML CSS & ReactJS / NextJS
          </p>
          <p className="mb-1 text-base font-normal text-gray-500 dark:text-gray-400">
            - Collaborate, Consume & Manage API from Backend
          </p>
          <p className="mb-1 text-base font-normal text-gray-500 dark:text-gray-400">
            - Create a starterkit, standaritation for Frontend Team
          </p>
          <p className="mb-1 text-base font-normal text-gray-500 dark:text-gray-400">
            - Create Design System Component
          </p>
          <p className="mb-1 text-base font-normal text-gray-500 dark:text-gray-400">
            - Implement Styled-Component system
          </p>
          <p className="mb-1 text-base font-normal text-gray-500 dark:text-gray-400">
            - Implement Unit Testing Frontend
          </p>
        </li>
        {/* Codigo Cyberlin Metadata Indonesia */}
        <li className="mb-6 ms-6">
          <span className="absolute -start-3 flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 ring-8 ring-white dark:bg-blue-900 dark:ring-gray-900">
            <svg
              className="h-2.5 w-2.5 text-blue-800 dark:text-blue-300"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
            </svg>
          </span>
          <h3 className="mb-1 flex items-center text-lg font-semibold text-gray-900 dark:text-white">
            Front End Engineer @&nbsp;
            <GradientText>Codigo Cyberlin Metadata Indonesia</GradientText>
          </h3>
          <time className="mb-2 block text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            January 2017 - November 2018
          </time>
          <p className="mb-1 text-base font-normal text-gray-500 dark:text-gray-400">
            - Built and Maintenance a NET TV Product : qubicle.id, zulu.id and
            Mobile Apps Generator Website
          </p>
          <p className="mb-1 text-base font-normal text-gray-500 dark:text-gray-400">
            - Slicing UI Design to HTML CSS & ReactJS / NextJS
          </p>
          <p className="mb-1 text-base font-normal text-gray-500 dark:text-gray-400">
            - Collaborate, Consume & Manage API from Backend
          </p>
        </li>
        {/* Daya Transformatika Indonesia */}
        <li className="mb-6 ms-6">
          <span className="absolute -start-3 flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 ring-8 ring-white dark:bg-blue-900 dark:ring-gray-900">
            <svg
              className="h-2.5 w-2.5 text-blue-800 dark:text-blue-300"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
            </svg>
          </span>
          <h3 className="mb-1 flex items-center text-lg font-semibold text-gray-900 dark:text-white">
            Web Developer @&nbsp;
            <GradientText>Daya Transformatika Indonesia</GradientText>
          </h3>
          <time className="mb-2 block text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            October 2015 - December 2016
          </time>
          <p className="mb-1 text-base font-normal text-gray-500 dark:text-gray-400">
            - Built and Maintenance a ERP product for PT Frisian Flag Group
          </p>
        </li>
      </ol>
    </div>
  </Section>
);

export { Experienced };
