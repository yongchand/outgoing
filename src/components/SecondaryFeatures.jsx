'use client'

import Image from 'next/image'
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import { ArrowPathIcon, AdjustmentsHorizontalIcon, LightBulbIcon } from '@heroicons/react/24/outline'

import clsx from 'clsx'

import { Container } from '@/components/Container'
import screenshotVisaProcessing from '@/images/screenshots/visaprocessing.png'
import screenshotAlignment from '@/images/screenshots/alignment.png'
import screenshotExploration from '@/images/screenshots/exploration.png'

const features = [
  {
    name: 'Visa Processing',
    summary: 'Stay on top of visa processing for all of your employees.',
    description:
      'Processing and renewing visas for your employees can become a complicated, annoying process. Don’t let that bother you from your actual work.',
    image: screenshotVisaProcessing,
    icon: function ReportingIcon() {
      return (
        <ArrowPathIcon className="h-6 w-6 text-white" />
      )
    },
  },
  {
    name: 'Alignment',
    summary:
      'Stay aligned with your employees. Communicate with awareness of each others’ time zones.',
    description:
      'Don’t lose track of where your employees are. Reduce communication inefficiencies across teams.',
    image: screenshotAlignment,
    icon: function InventoryIcon() {
      return (
        <AdjustmentsHorizontalIcon className="h-6 w-6 text-white" />
      )
    },
  },
  {
    name: 'Exploration',
    summary:
      'Explore different work destination options, no more hours of extra googling.',
    description:
      'Everyone wants to travel, but the details can get cumbersome, especially for work. Whether your employee’s priority is cost, time zone alignment or tax benefits, we’ve got you covered.',
    image: screenshotExploration,
    icon: function ContactsIcon() {
      return (
        <LightBulbIcon className="h-6 w-6 text-white" />
      )
    },
  },
]

function Feature({ feature, isActive, className, ...props }) {
  return (
    <div
      className={clsx(className, !isActive && 'opacity-75 hover:opacity-100')}
      {...props}
    >
      <div
        className={clsx(
          'w-9 rounded-lg',
          isActive ? 'bg-customPurple' : 'bg-slate-500',
        )}
      >
        <svg aria-hidden="true" className="h-9 w-9 p-1" fill="none">
          <feature.icon />
        </svg>
      </div>
      <h3
        className={clsx(
          'mt-6 text-sm font-medium',
          isActive ? 'text-customPurple' : 'text-slate-600',
        )}
      >
        {feature.name}
      </h3>
      <p className="mt-2 font-display text-xl text-slate-900">
        {feature.summary}
      </p>
      <p className="mt-4 text-sm text-slate-600">{feature.description}</p>
    </div>
  )
}

function FeaturesMobile() {
  return (
    <div className="-mx-4 mt-20 flex flex-col gap-y-10 overflow-hidden px-4 sm:-mx-6 sm:px-6 lg:hidden">
      {features.map((feature) => (
        <div key={feature.summary}>
          <Feature feature={feature} className="mx-auto max-w-2xl" isActive />
          <div className="relative mt-10">
            <div className="relative mx-auto w-full overflow-hidden rounded-xl bg-white shadow-lg shadow-slate-900/5 ring-1 ring-slate-500/10">
              <Image
                className="w-full"
                src={feature.image}
                alt=""
                sizes="(max-width: 640px) 100vw, 640px"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

function FeaturesDesktop() {
  return (
    <TabGroup className="hidden lg:mt-20 lg:block">
      {({ selectedIndex }) => (
        <>
          <TabList className="grid grid-cols-3 gap-x-8">
            {features.map((feature, featureIndex) => (
              <Feature
                key={feature.summary}
                feature={{
                  ...feature,
                  name: (
                    <Tab className="ui-not-focus-visible:outline-none">
                      <span className="absolute inset-0" />
                      {feature.name}
                    </Tab>
                  ),
                }}
                isActive={featureIndex === selectedIndex}
                className="relative"
              />
            ))}
          </TabList>
          <TabPanels className="relative mt-20 overflow-hidden rounded-4xl bg-slate-200 px-14 py-16 xl:px-16">
            {features.map((feature, featureIndex) => (
              <TabPanel
                key={feature.summary}
                className={clsx(
                  'transition-opacity duration-500 ease-in-out ui-not-focus-visible:outline-none',
                  featureIndex === selectedIndex ? 'opacity-100' : 'opacity-0'
                )}
              >
                <div className="w-full overflow-hidden rounded-xl bg-white shadow-lg shadow-slate-900/5 ring-1 ring-slate-500/10">
                  <Image
                    className="w-full"
                    src={feature.image}
                    alt=""
                    sizes="52.75rem"
                  />
                </div>
              </TabPanel>
            ))}
            <div className="pointer-events-none absolute inset-0 rounded-4xl ring-1 ring-inset ring-slate-900/10" />
          </TabPanels>
        </>
      )}
    </TabGroup>
  );
}

export function SecondaryFeatures() {
  return (
    <section
      id="secondary-features"
      aria-label="Features for simplifying everyday business tasks"
      className="pb-14 pt-20 sm:pb-20 sm:pt-32 lg:pb-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl md:text-center">
          <h2 className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl">
          Simplify the work abroad process.
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
          Don’t waste time sending needless emails, searching online or consulting lawyers. 
          We’ve got everything covered.
          </p>
        </div>
        <FeaturesMobile />
        <FeaturesDesktop />
      </Container>
    </section>
  )
}