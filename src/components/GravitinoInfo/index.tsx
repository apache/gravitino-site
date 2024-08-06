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

import Heading from '@theme/Heading'
import Link from '@docusaurus/Link'

export default function GravitinoInfo(): JSX.Element {
  return (
    <div className='bg-feature shadow-md mx-1 my-8 background-gradient'>
      <div className='mx-10 py-4'>
        <Heading as='h1' className='font-bold mb-4 text-center text-xl md:text-4xl'>
          <div className='relative after:content-[ ] after:border-b-[1px] after:border-black after:absolute after:-bottom-1 after:left-[35%] after:w-[30%] after:h-2'>
            WHAT IS GRAVITINO?
          </div>
        </Heading>
        <div className='bg-black/[0.04] rounded-sm p-4 font-sans font-light text-sm'>
          Apache Gravitino is a high-performance, geo-distributed, and federated metadata lake. By using a technical data catalog and metadata lake, you can manage access and perform data governance for all your data sources (including filestores, relational databases, and event streams) while safely using multiple engines like Spark, Trino, or Flink on multiple formats on different cloud providers. 
        </div>
        <div>
          <img src='img/metadata-lake.svg' />
        </div>
        <div className='text-center mb-4'>
          <Link to={'/downloads'}>
            <span className='background-gradient-btn text-white text-[10px] px-2 py-1 md:px-6 md:py-2 md:text-base rounded-full'>DOWNLOAD</span>
          </Link>
        </div>
      </div>
    </div>
  );
}