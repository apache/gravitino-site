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

import Layout from '@theme/Layout';
import HomepageFeatures from '../components/HomepageFeatures';
import GravitinoInfo from '../components/GravitinoInfo';
import Link from '@docusaurus/Link'

export default function Home(): JSX.Element {
  return (
    <Layout title='Welcome'>
      <div className='tw'>
        <div className='bg-home'>
          <div className='container'>
            <div className='relative'>
              <img src="img/background.png" />
              <div className='absolute h-full inset-0 bg-[rgba(217,217,217,0.4)] p-[2%] md:p-[5%]'>
                <div className='bg-[rgba(217,217,217,0.4)] p-[1%] md:p-[5%] text-center'>
                  <img className='m-auto w-[60%]' src='/img/apache-gravitino.svg' />
                  <div className='relative my-[2%] md:my-[5%] text-xs w-full md:text-xl xl:w-[60%]  m-auto after:content-[ ] after:border-b-[1px] after:border-black after:absolute after:-bottom-4 after:left-[25%] after:w-[50%] after:h-2'>
                    A unified metadata lake across all your sources, formats, cloud providers, and regions in a federated architecture. 
                  </div>
                  <div className='inline-flex flex-wrap gap-1 px-0 py-[5%] md:gap-4 xl:px-[15%]'>
                    <Link to={'/community'}>
                      <span className='background-gradient-btn text-white px-2 py-1 text-[10px] md:px-6 md:py-2 md:text-base rounded-full'>COMMUNITY</span>
                    </Link>
                    <Link to={'https://github.com/apache/gravitino'} target='_blank'>
                      <span className='background-gradient-btn text-white px-2 py-1 text-[10px] md:px-6 md:py-2 md:text-base rounded-full'>GITHUB</span>
                    </Link>
                    <Link to={'/contrib#getting-started'}>
                      <span className='background-gradient-btn text-white px-2 py-1 text-[10px] md:px-6 md:py-2 md:text-base rounded-full'>GETTING STARTED</span>
                    </Link>
                    <Link to={'https://the-asf.slack.com/'} target='_blank'>
                      <span className='background-gradient-btn text-white px-2 py-1 text-[10px] md:px-6 md:py-2 md:text-base rounded-full'>SLACK</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <main>
              <GravitinoInfo />
              <HomepageFeatures/>
            </main>
          </div>
        </div>
      </div>
    </Layout>
  );
}
