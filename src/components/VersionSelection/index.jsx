/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
import { useLocation, useHistory } from '@docusaurus/router'
import { useVersions, useActiveDocContext } from '@docusaurus/plugin-content-docs/client'
import { useDocsPreferredVersion } from '@docusaurus/theme-common'
import { useDocsVersionCandidates } from '@docusaurus/theme-common/internal'

const getVersionMainDoc = version => version.docs.find(doc => doc.id === version.mainDocId)

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const VersionSelection = () => {
  const { search, hash } = useLocation()
  const router = useHistory()

  const versions = useVersions()

  const activeDocContext = useActiveDocContext()

  const { savePreferredVersionName } = useDocsPreferredVersion()

  const dropdownVersion = useDocsVersionCandidates()[0]

  const versionLinks = versions
    .filter(i => i.name !== 'current')
    .map(version => {
      // We try to link to the same doc, in another version
      // When not possible, fallback to the "main doc" of the version
      const versionDoc = activeDocContext.alternateDocVersions[version.name] ?? getVersionMainDoc(version)
      return {
        label: version.label,
        // preserve ?search#hash suffix on version switches
        to: `${versionDoc.path}${search}${hash}`,
        isActive: () => version === activeDocContext.activeVersion,
        onClick: () => savePreferredVersionName(version.name)
      }
    })

  const items = [...versionLinks]

  const [selected, setSelected] = useState(dropdownVersion.label)

  const handleChangeListBox = e => {
    setSelected(e)

    const item = items.find(i => i.label === e)
    router.push(item.to)
  }

  return (
    <Fragment>
      <Listbox value={selected} onChange={e => handleChangeListBox(e)}>
        {({ open }) => (
          <div className='tw'>
            <div className='relative my-2 px-2'>
              <Listbox.Button className='border-none relative w-full cursor-default rounded-md bg-white dark:bg-[#21222b] dark:text-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6'>
                <span className='flex items-center'>
                  <span className='ml-3 block truncate'>{selected}</span>
                </span>
                <span className='pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2'>
                  <ChevronUpDownIcon className='h-5 w-5 text-gray-400' aria-hidden='true' />
                </span>
              </Listbox.Button>

              <Transition
                show={open}
                as={Fragment}
                leave='transition ease-in duration-100'
                leaveFrom='opacity-100'
                leaveTo='opacity-0'
              >
                <Listbox.Options className='list-none absolute z-10 mt-1 max-h-56 w-[95%] overflow-auto rounded-md bg-white dark:bg-[#2c2d36]  p-0 py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm'>
                  {items.map(item => (
                    <Listbox.Option
                      key={item.label}
                      className={({ active }) =>
                        classNames(
                          active ? 'bg-indigo-600 text-white' : 'text-gray-900',
                          'relative cursor-default select-none py-2 pl-3'
                        )
                      }
                      value={item.label}
                    >
                      {({ selected, active }) => (
                        <>
                          <div className='flex items-center dark:text-white' onClick={item.onClick}>
                            <span
                              className={classNames(selected ? 'font-semibold' : 'font-normal', 'ml-3 block truncate')}
                            >
                              {item.label}
                            </span>
                          </div>

                          {selected ? (
                            <span
                              className={classNames(
                                active ? 'text-white' : 'text-indigo-600',
                                'absolute inset-y-0 right-0 flex items-center pr-4'
                              )}
                            >
                              <CheckIcon className='h-5 w-5' aria-hidden='true' />
                            </span>
                          ) : null}
                        </>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
            </div>
          </div>
        )}
      </Listbox>
    </Fragment>
  )
}

export default VersionSelection
